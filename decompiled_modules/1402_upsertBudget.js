// Module ID: 1402
// Function ID: 1404
// Name: upsertBudget
// Dependencies: []
// Exports: getBudgetsByMonth, upsertBudget

// Module 1402 (upsertBudget)
let c2;


export async function upsertBudget(db, date) {
  let closure_0 = db;
  let closure_1 = date;
  if (c2 === 2) {
    c2 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp2 === 3) {
    if (db === 1) {
      throw date;
    } else if (db === 2) {
      const obj2 = { value: date, done: true };
      return obj2;
    } else {
      return { value: "writable", done: "BounceInDown" };
    }
  } else {
    try {
      c2 = 2;
      if (0 === c3) {
        if (db === 1) {
          c2 = 3;
          throw date;
        } else if (db === 2) {
          c2 = 3;
          const obj3 = { value: date, done: true };
          return obj3;
        } else {
          const items = [, , , , ];
          ({ id: arr[0], category_group: arr[1], amount: arr[2], month: arr[3], year: arr[4] } = closure_1);
          c3 = 1;
          c2 = 1;
          const obj4 = { value: closure_0.runAsync("INSERT INTO budgets (id, category_group, amount, month, year)\n     VALUES (?, ?, ?, ?, ?)\n     ON CONFLICT(category_group, month, year) DO UPDATE SET amount = excluded.amount", items), done: false };
          return obj4;
        }
      } else if (db === 1) {
        c2 = 3;
        throw date;
      } else if (db === 2) {
        c2 = 3;
        const obj = { value: date, done: true };
        return obj;
      } else {
        c2 = 3;
        return { value: "writable", done: "BounceInDown" };
      }
    } catch (tmp6) {
      c2 = 3;
      throw tmp6;
    }
  }
}
export async function getBudgetsByMonth(db, currentMonth, currentYear) {
  let allAsync = db;
  let closure_1 = currentMonth;
  let closure_2 = currentYear;
  let c3 = 0;
  return (async (arg0, value, arg2) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        return { value, done: true };
      } else {
        return { value: "writable", done: "BounceInDown" };
      }
    } else {
      try {
        c3 = 2;
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          return { value, done: true };
        } else {
          const items = [closure_1, closure_2];
          c3 = 3;
          const obj = { value: allAsync.getAllAsync("SELECT * FROM budgets WHERE month = ? AND year = ?", items), done: true };
          return obj;
        }
      } catch (tmp6) {
        c3 = 3;
        throw tmp6;
      }
    }
  })();
}
