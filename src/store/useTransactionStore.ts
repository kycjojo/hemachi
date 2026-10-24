import { create } from 'zustand';
import { type SQLiteDatabase } from 'expo-sqlite';
import { Transaction } from '../types';
import {
  insertTransaction as dbInsertTransaction,
  deleteTransaction as dbDeleteTransaction,
  getTransactionsByMonth as dbGetTransactionsByMonth,
  getRecentTransactions as dbGetRecentTransactions,
  getTotalByTypeAndMonth as dbGetTotalByTypeAndMonth,
  getExpenseByGroupAndMonth as dbGetExpenseByGroupAndMonth,
} from '../database/transactionDb';

const CATEGORY_GROUPS = ['campus', 'kos', 'food', 'personal'];

interface TransactionState {
  db: SQLiteDatabase | null;
  transactions: Transaction[];
  recentTransactions: Transaction[];
  totalIncome: number;
  totalExpense: number;
  balance: number;
  expenseByGroup: Record<string, number>;
  currentMonth: number;
  currentYear: number;
  setDb: (db: SQLiteDatabase) => void;
  loadTransactions: () => Promise<void>;
  addTransaction: (tx: Omit<Transaction, 'id' | 'created_at'>) => Promise<void>;
  removeTransaction: (id: string) => Promise<void>;
  setMonth: (month: number, year: number) => Promise<void>;
}

const now = new Date();

export const useTransactionStore = create<TransactionState>((set, get) => ({
  db: null,
  transactions: [],
  recentTransactions: [],
  totalIncome: 0,
  totalExpense: 0,
  balance: 0,
  expenseByGroup: {},
  currentMonth: now.getMonth() + 1,
  currentYear: now.getFullYear(),

  setDb: (db: SQLiteDatabase) => {
    set({ db });
    get().loadTransactions();
  },

  loadTransactions: async () => {
    const { db, currentMonth, currentYear } = get();
    if (!db) return;

    try {
      const [transactions, recentTransactions, totalIncome, totalExpense] = await Promise.all([
        dbGetTransactionsByMonth(db, currentMonth, currentYear),
        dbGetRecentTransactions(db, 5),
        dbGetTotalByTypeAndMonth(db, 'income', currentMonth, currentYear),
        dbGetTotalByTypeAndMonth(db, 'expense', currentMonth, currentYear),
      ]);

      const expenseByGroup: Record<string, number> = {};
      await Promise.all(
        CATEGORY_GROUPS.map(async (group) => {
          const total = await dbGetExpenseByGroupAndMonth(db, group, currentMonth, currentYear);
          expenseByGroup[group] = total;
        })
      );

      set({
        transactions,
        recentTransactions,
        totalIncome,
        totalExpense,
        balance: totalIncome - totalExpense,
        expenseByGroup,
      });
    } catch (err) {
      console.error('Failed to load transactions:', err);
    }
  },

  addTransaction: async (txData) => {
    const { db } = get();
    if (!db) return;

    const id = Date.now().toString() + Math.random().toString(36).substring(2);
    const newTx: Transaction = {
      ...txData,
      id,
      created_at: new Date().toISOString(),
    };

    await dbInsertTransaction(db, newTx);
    await get().loadTransactions();
  },

  removeTransaction: async (id: string) => {
    const { db } = get();
    if (!db) return;

    await dbDeleteTransaction(db, id);
    await get().loadTransactions();
  },

  setMonth: async (currentMonth: number, currentYear: number) => {
    set({ currentMonth, currentYear });
    await get().loadTransactions();
  },
}));
