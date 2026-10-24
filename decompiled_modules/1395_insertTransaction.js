// Module ID: 1395
// Function ID: 1397
// Name: insertTransaction
// Dependencies: []
// Exports: deleteTransaction, getExpenseByGroupAndMonth, getRecentTransactions, getTotalByTypeAndMonth, getTransactionsByMonth, insertTransaction

// Module 1395 (insertTransaction)
let c2;


export async function insertTransaction(db, value) {
  let closure_0 = db;
  let closure_1 = value;
  if (c2 === 2) {
    c2 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp2 === 3) {
    if (db === 1) {
      throw value;
    } else if (db === 2) {
      const obj2 = { value, done: true };
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
          throw value;
        } else if (db === 2) {
          c2 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          const items = [, , , , , , , , , ];
          ({ id: arr[0], type: arr[1], amount: arr[2], category_id: arr[3], category_name: arr[4], category_group: arr[5], category_image: arr[6], note: arr[7], date: arr[8], created_at: arr[9] } = closure_1);
          c3 = 1;
          c2 = 1;
          const obj4 = { value: closure_0.runAsync("INSERT INTO transactions (id, type, amount, category_id, category_name, category_group, category_image, note, date, created_at)\n     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", items), done: false };
          return obj4;
        }
      } else if (db === 1) {
        c2 = 3;
        throw value;
      } else if (db === 2) {
        c2 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        c2 = 3;
        return { value: "writable", done: "BounceInDown" };
      }
    } catch (tmp4) {
      c2 = 3;
      throw tmp4;
    }
  }
}
export async function getTransactionsByMonth(db, currentMonth, currentYear) {
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
          const _String = String;
          const _HermesInternal = HermesInternal;
          const _String2 = String;
          const StringResult = String(closure_1);
          const combined = "" + closure_2 + "-" + StringResult.padStart(2, "0") + "-01";
          const _HermesInternal2 = HermesInternal;
          const items = [combined, ];
          const StringResult1 = String(closure_1);
          items[1] = "" + closure_2 + "-" + StringResult1.padStart(2, "0") + "-31";
          c3 = 3;
          const obj = { value: allAsync.getAllAsync("SELECT * FROM transactions WHERE date >= ? AND date <= ? ORDER BY date DESC, created_at DESC", items), done: true };
          return obj;
        }
      } catch (tmp3) {
        c3 = 3;
        throw tmp3;
      }
    }
  })();
}
export async function getRecentTransactions(db, arg1) {
  let allAsync = db;
  let closure_1 = arg1;
  let c3 = 0;
  let c4 = 0;
  let iter = (async (arg0) => {
    let num8 = closure_1;
    if (closure_1 === undefined) {
      num8 = 5;
    }
    await "memoizedState";
    const items = [num8];
    return allAsync.getAllAsync("SELECT * FROM transactions ORDER BY date DESC, created_at DESC LIMIT ?", items);
  })();
  iter.next();
  return iter;
}
export async function deleteTransaction(db, value) {
  let closure_0 = db;
  let closure_1 = value;
  if (c2 === 2) {
    c2 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp2 === 3) {
    if (db === 1) {
      throw value;
    } else if (db === 2) {
      const obj2 = { value, done: true };
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
          throw value;
        } else if (db === 2) {
          c2 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          const items = [closure_1];
          c3 = 1;
          c2 = 1;
          const obj4 = { value: closure_0.runAsync("DELETE FROM transactions WHERE id = ?", items), done: false };
          return obj4;
        }
      } else if (db === 1) {
        c2 = 3;
        throw value;
      } else if (db === 2) {
        c2 = 3;
        const obj = { value, done: true };
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
export async function getTotalByTypeAndMonth(db, expense, currentMonth, currentYear) {
  let firstAsync = db;
  let closure_1 = expense;
  let closure_2 = currentMonth;
  let closure_3 = currentYear;
  let c6 = 0;
  let c7 = 0;
  return (async (arg0, value, arg2, arg3) => {
    let total;
    const _String = String;
    const _HermesInternal = HermesInternal;
    const _String2 = String;
    const StringResult = String(closure_2);
    const combined = "" + closure_3 + "-" + StringResult.padStart(2, "0") + "-01";
    const _HermesInternal2 = HermesInternal;
    const items = [closure_1, combined, ];
    const StringResult1 = String(closure_2);
    items[2] = "" + closure_3 + "-" + StringResult1.padStart(2, "0") + "-31";
    firstAsync = await firstAsync.getFirstAsync("SELECT COALESCE(SUM(amount), 0) as total FROM transactions WHERE type = ? AND date >= ? AND date <= ?", items);
    if (firstAsync != null) {
      total = firstAsync.total;
    }
    value = total;
    if (total == null) {
      value = 0;
    }
    return value;
  })();
}
export async function getExpenseByGroupAndMonth(arg0, arg1, arg2, arg3) {
  let firstAsync = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  let closure_3 = arg3;
  let c6 = 0;
  let c7 = 0;
  return (async (arg0, value, arg2, arg3) => {
    let total;
    const _String = String;
    const _HermesInternal = HermesInternal;
    const _String2 = String;
    const StringResult = String(closure_2);
    const combined = "" + closure_3 + "-" + StringResult.padStart(2, "0") + "-01";
    const _HermesInternal2 = HermesInternal;
    const items = [closure_1, combined, ];
    const StringResult1 = String(closure_2);
    items[2] = "" + closure_3 + "-" + StringResult1.padStart(2, "0") + "-31";
    firstAsync = await firstAsync.getFirstAsync("SELECT COALESCE(SUM(amount), 0) as total FROM transactions WHERE type = 'expense' AND category_group = ? AND date >= ? AND date <= ?", items);
    if (firstAsync != null) {
      total = firstAsync.total;
    }
    value = total;
    if (total == null) {
      value = 0;
    }
    return value;
  })();
}
