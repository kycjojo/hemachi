// Module ID: 1430
// Function ID: 1432
// Name: migrateDatabase
// Dependencies: []
// Exports: migrateDatabase

// Module 1430 (migrateDatabase)
let c1, c2;


export async function migrateDatabase(arg0, value) {
  let closure_0 = arg0;
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp2 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "writable", done: "BounceInDown" };
    }
  } else {
    try {
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          c2 = 1;
          c1 = 1;
          const obj4 = { value: closure_0.execAsync("\n    PRAGMA journal_mode = WAL;\n\n    CREATE TABLE IF NOT EXISTS transactions (\n      id TEXT PRIMARY KEY NOT NULL,\n      type TEXT NOT NULL,\n      amount REAL NOT NULL,\n      category_id TEXT NOT NULL,\n      category_name TEXT NOT NULL,\n      category_group TEXT NOT NULL,\n      category_image TEXT DEFAULT '',\n      note TEXT DEFAULT '',\n      date TEXT NOT NULL,\n      created_at TEXT NOT NULL\n    );\n\n    CREATE TABLE IF NOT EXISTS budgets (\n      id TEXT PRIMARY KEY NOT NULL,\n      category_group TEXT NOT NULL,\n      amount REAL NOT NULL,\n      month INTEGER NOT NULL,\n      year INTEGER NOT NULL,\n      UNIQUE(category_group, month, year)\n    );\n  "), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        c1 = 3;
        return { value: "writable", done: "BounceInDown" };
      }
    } catch (tmp5) {
      c1 = 3;
      throw tmp5;
    }
  }
}
