import { type SQLiteDatabase } from 'expo-sqlite';
import { Budget } from '../types';

export async function upsertBudget(db: SQLiteDatabase, budget: Budget): Promise<void> {
  await db.runAsync(
    `INSERT INTO budgets (id, category_group, amount, month, year)
     VALUES (?, ?, ?, ?, ?)
     ON CONFLICT(category_group, month, year) DO UPDATE SET amount = excluded.amount`,
    [budget.id, budget.category_group, budget.amount, budget.month, budget.year]
  );
}

export async function getBudgetsByMonth(
  db: SQLiteDatabase,
  month: number,
  year: number
): Promise<Budget[]> {
  return await db.getAllAsync<Budget>(
    `SELECT * FROM budgets WHERE month = ? AND year = ?`,
    [month, year]
  );
}
