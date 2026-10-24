// Module ID: 1396
// Function ID: 1398
// Name: webInsertTransaction
// Dependencies: [5, 1397]
// Exports: webDeleteTransaction, webGetBudgetsByMonth, webGetExpenseByGroupAndMonth, webGetRecentTransactions, webGetTotalByTypeAndMonth, webInsertTransaction, webUpsertBudget

// Module 1396 (webInsertTransaction)
import react_native from "react-native" /* 5 */;
import module_1397_mod from "module_1397" /* 1397 */;

let c2, c4;

let tmp5;
async function readJson(arg0, value) {
  let _default;
  let closure_0 = arg0;
  if (c4 === 2) {
    c4 = 3;
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
    let c3;
    try {
      c4 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          let closure_1 = tmp3;
          closure_0 = undefined;
          c3 = 1;
          c2 = 2;
          c4 = 1;
          const obj4 = { value: _default.getItem(closure_0), done: false };
          _default = module_1397.default;
          return obj4;
        }
      } else if (1 === c2) {
        c3 = 0;
        c4 = 3;
        const obj5 = { value: [], done: true };
        return obj5;
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c4 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        let parsed;
        closure_0 = value;
        const tmp5 = closure_0;
        if (tmp5) {
          const _JSON = JSON;
          parsed = JSON.parse(closure_0);
        } else {
          parsed = [];
        }
        c3 = 0;
        c4 = 3;
        const obj = { value: parsed, done: true };
        return obj;
      }
    } catch (tmp9) {
      if (0 === c3) {
        c4 = 3;
        throw tmp9;
      } else {
        c2 = 1;
      }
    }
  }
}
async function writeJson(arg0, value) {
  let _default;
  let closure_0 = arg0;
  let closure_1 = value;
  if (c2 === 2) {
    c2 = 3;
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
      c2 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          const _JSON = JSON;
          c3 = 1;
          c2 = 1;
          const obj4 = { value: _default.setItem(closure_0, JSON.stringify(closure_1)), done: false };
          _default = module_1397.default;
          return obj4;
        }
      } else if (arg0 === 1) {
        c2 = 3;
        throw value;
      } else if (arg0 === 2) {
        c2 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        c2 = 3;
        return { value: "writable", done: "BounceInDown" };
      }
    } catch (tmp8) {
      c2 = 3;
      throw tmp8;
    }
  }
}
async function webGetTransactionsByMonth(currentMonth, currentYear) {
  let closure_0 = currentMonth;
  let closure_1 = currentYear;
  const tmp = await readJson(pp_transactions);
  const _String = String;
  const _HermesInternal = HermesInternal;
  const StringResult = String(closure_0);
  let closure_3 = "" + closure_1 + "-" + StringResult.padStart(2, "0");
  const found = tmp.filter((date) => {
    date = date.date;
    return date.startsWith(closure_1_3);
  });
  return found.sort((date, date2) => {
    date = date2.date;
    let localeCompareResult = date.localeCompare(date.date);
    if (!localeCompareResult) {
      const created_at = date2.created_at;
      localeCompareResult = created_at.localeCompare(date.created_at);
    }
    return localeCompareResult;
  });
}
let module_1397 = module_1397_mod;
if (!module_1397) {
  let obj2 = { default: module_1397 };
  tmp5 = obj2;
} else {
  tmp5 = module_1397;
}
module_1397 = tmp5;
let pp_transactions = "pp_transactions";
const pp_budgets = "pp_budgets";
let c6 = false;

export async function webInsertTransaction(arg0, value) {
  let closure_0 = arg0;
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          let closure_2 = tmp4;
          pp_transactions = undefined;
          c3 = 1;
          c4 = 1;
          const obj4 = { value: readJson(pp_transactions), done: false };
          return obj4;
        }
      } else if (1 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          pp_transactions = value;
          pp_transactions.push(closure_0);
          c3 = 2;
          c4 = 1;
          const obj6 = { value: closure_130_4(closure_130_1, pp_transactions), done: false };
          return obj6;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        c4 = 3;
        return { value: "writable", done: "BounceInDown" };
      }
    } catch (tmp16) {
      c4 = 3;
      throw tmp16;
    }
  }
}
export { webGetTransactionsByMonth };
export async function webGetRecentTransactions(arg0) {
  let closure_0 = arg0;
  let num10 = closure_0;
  if (closure_0 === undefined) {
    num10 = 5;
  }
  await "memoizedState";
  const tmp = await closure_130_3(closure_130_1);
  const sorted = tmp.sort((date, date2) => {
    date = date2.date;
    let localeCompareResult = date.localeCompare(date.date);
    if (!localeCompareResult) {
      const created_at = date2.created_at;
      localeCompareResult = created_at.localeCompare(date.created_at);
    }
    return localeCompareResult;
  });
  return sorted.slice(0, num10);
}
export async function webDeleteTransaction(arg0, value) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      let tmp;
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          let closure_2 = tmp4;
          tmp = undefined;
          c3 = 1;
          c4 = 1;
          const obj4 = { value: readJson(pp_transactions), done: false };
          return obj4;
        }
      } else if (1 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          tmp = value;
          c3 = 2;
          c4 = 1;
          const obj6 = { value: closure_130_4(closure_130_1, tmp.filter((id) => id.id !== closure_1_0)), done: false };
          return obj6;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        c4 = 3;
        return { value: "writable", done: "BounceInDown" };
      }
    } catch (tmp13) {
      c4 = 3;
      throw tmp13;
    }
  }
}
export async function webGetTotalByTypeAndMonth(expense, currentMonth, currentYear) {
  let closure_2 = currentYear;
  pp_transactions = await webGetTransactionsByMonth(closure_1, closure_2);
  const found = pp_transactions.filter((type) => type.type === closure_1_0);
  return found.reduce((acc, amount) => acc + amount.amount, 0);
}
export async function webGetExpenseByGroupAndMonth(arg0, arg1, arg2) {
  let closure_2 = arg2;
  pp_transactions = await webGetTransactionsByMonth(closure_1, closure_2);
  const found = pp_transactions.filter((type) => type.type === "expense" && type.category_group === closure_1_0);
  return found.reduce((acc, amount) => acc + amount.amount, 0);
}
export async function webUpsertBudget(date, value) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp2 === 3) {
    if (date === 1) {
      throw value;
    } else if (date === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "writable", done: "BounceInDown" };
    }
  } else {
    try {
      let closure_2;
      c4 = 2;
      if (0 === c3) {
        if (date === 1) {
          c4 = 3;
          throw value;
        } else if (date === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          let c1 = 0;
          pp_transactions = undefined;
          closure_2 = undefined;
          c3 = 1;
          c4 = 1;
          const obj4 = { value: readJson(pp_budgets), done: false };
          return obj4;
        }
      } else if (1 === c3) {
        if (date === 1) {
          c4 = 3;
          throw value;
        } else if (date === 2) {
          c4 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          pp_transactions = value;
          closure_2 = pp_transactions.findIndex((category_group) => category_group.category_group === category_group.category_group && category_group.month === category_group.month && category_group.year === category_group.year);
          if (closure_2 >= 0) {
            pp_transactions[closure_2] = category_group;
          } else {
            pp_transactions.push(category_group);
          }
          c3 = 2;
          c4 = 1;
          const obj6 = { value: closure_130_4(closure_130_2, pp_transactions), done: false };
          return obj6;
        }
      } else if (date === 1) {
        c4 = 3;
        throw value;
      } else if (date === 2) {
        c4 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        c4 = 3;
        return { value: "writable", done: "BounceInDown" };
      }
    } catch (tmp20) {
      c4 = 3;
      throw tmp20;
    }
  }
}
export async function webGetBudgetsByMonth(currentMonth, currentYear) {
  const tmp = await readJson(pp_budgets);
  return tmp.filter((month) => month.month === closure_1_0 && month.year === closure_1_1);
}
export const IS_WEB = c6;
