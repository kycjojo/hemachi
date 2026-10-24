import { type SQLiteDatabase } from 'expo-sqlite';
import { Transaction } from '../types';

export async function insertTransaction(db: SQLiteDatabase, tx: Transaction): Promise<void> {
  await db.runAsync(
    `INSERT INTO transactions (id, type, amount, category_id, category_name, category_group, category_image, note, date, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      tx.id,
      tx.type,
      tx.amount,
      tx.category_id,
      tx.category_name,
      tx.category_group,
      tx.category_image || '',
      tx.note || '',
      tx.date,
      tx.created_at,
    ]
  );
}

export async function getTransactionsByMonth(
  db: SQLiteDatabase,
  month: number,
  year: number
): Promise<Transaction[]> {
  const startDate = `${year}-${String(month).padStart(2, '0')}-01`;
  const endDate = `${year}-${String(month).padStart(2, '0')}-31`;
  return await db.getAllAsync<Transaction>(
    `SELECT * FROM transactions WHERE date >= ? AND date <= ? ORDER BY date DESC, created_at DESC`,
    [startDate, endDate]
  );
}

export async function getRecentTransactions(
  db: SQLiteDatabase,
  limit: number = 5
): Promise<Transaction[]> {
  return await db.getAllAsync<Transaction>(
    `SELECT * FROM transactions ORDER BY date DESC, created_at DESC LIMIT ?`,
    [limit]
  );
}

export async function deleteTransaction(db: SQLiteDatabase, id: string): Promise<void> {
  await db.runAsync(`DELETE FROM transactions WHERE id = ?`, [id]);
}

export async function getTotalByTypeAndMonth(
  db: SQLiteDatabase,
  type: 'income' | 'expense',
  month: number,
  year: number
): Promise<number> {
  const startDate = `${year}-${String(month).padStart(2, '0')}-01`;
  const endDate = `${year}-${String(month).padStart(2, '0')}-31`;
  const result = await db.getFirstAsync<{ total: number }>(
    `SELECT COALESCE(SUM(amount), 0) as total FROM transactions WHERE type = ? AND date >= ? AND date <= ?`,
    [type, startDate, endDate]
  );
  return result?.total ?? 0;
}

export async function getExpenseByGroupAndMonth(
  db: SQLiteDatabase,
  group: string,
  month: number,
  year: number
): Promise<number> {
  const startDate = `${year}-${String(month).padStart(2, '0')}-01`;
  const endDate = `${year}-${String(month).padStart(2, '0')}-31`;
  const result = await db.getFirstAsync<{ total: number }>(
    `SELECT COALESCE(SUM(amount), 0) as total FROM transactions WHERE type = 'expense' AND category_group = ? AND date >= ? AND date <= ?`,
    [group, startDate, endDate]
  );
  return result?.total ?? 0;
}
