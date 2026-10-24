import { create } from 'zustand';
import { type SQLiteDatabase } from 'expo-sqlite';
import { Budget } from '../types';
import { upsertBudget as dbUpsertBudget, getBudgetsByMonth as dbGetBudgetsByMonth } from '../database/budgetDb';

interface BudgetState {
  db: SQLiteDatabase | null;
  budgets: Budget[];
  currentMonth: number;
  currentYear: number;
  setDb: (db: SQLiteDatabase) => void;
  loadBudgets: () => Promise<void>;
  setBudget: (category_group: string, amount: number) => Promise<void>;
  getBudgetForGroup: (category_group: string) => number;
  setMonth: (month: number, year: number) => Promise<void>;
}

const now = new Date();

export const useBudgetStore = create<BudgetState>((set, get) => ({
  db: null,
  budgets: [],
  currentMonth: now.getMonth() + 1,
  currentYear: now.getFullYear(),

  setDb: (db: SQLiteDatabase) => {
    set({ db });
    get().loadBudgets();
  },

  loadBudgets: async () => {
    const { db, currentMonth, currentYear } = get();
    if (!db) return;

    try {
      const budgets = await dbGetBudgetsByMonth(db, currentMonth, currentYear);
      set({ budgets });
    } catch (err) {
      console.error('Failed to load budgets:', err);
    }
  },

  setBudget: async (category_group: string, amount: number) => {
    const { db, currentMonth, currentYear } = get();
    if (!db) return;

    const id = `${category_group}_${currentMonth}_${currentYear}`;
    const budget: Budget = {
      id,
      category_group,
      amount,
      month: currentMonth,
      year: currentYear,
    };

    await dbUpsertBudget(db, budget);
    await get().loadBudgets();
  },

  getBudgetForGroup: (category_group: string) => {
    const { budgets } = get();
    const found = budgets.find((b) => b.category_group === category_group);
    return found ? found.amount : 0;
  },

  setMonth: async (currentMonth: number, currentYear: number) => {
    set({ currentMonth, currentYear });
    await get().loadBudgets();
  },
}));
