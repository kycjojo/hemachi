// Module ID: 1401
// Function ID: 1403
// Dependencies: [1392, 1402, 1396]

// Module 1401
import module_1392 from "module_1392" /* 1392 */;
import upsertBudget from "upsertBudget" /* 1402 */;
import webInsertTransaction from "webInsertTransaction" /* 1396 */;

let date = new Date();
let closure_3 = module_1392.create((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let obj = {
    db: null,
    budgets: [],
    currentMonth: date.getMonth() + 1,
    currentYear: date.getFullYear(),
    setDb(db) {
      const obj = { db };
      closure_0(obj);
      const obj2 = closure_1();
      const budgets = obj2.loadBudgets();
    },
    loadBudgets: async function loadBudgets(arg0, value) {
      let currentMonth;
      let currentYear;
      let db;
      if (c3 === 2) {
        c3 = 3;
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
          let budgets;
          c3 = 2;
          if (0 === c2) {
            closure_1 = tmp3;
            budgets = undefined;
            ({ db, currentMonth, currentYear } = webInsertTransaction());
            const tmp12 = webInsertTransaction();
            if (closure_1.IS_WEB) {
              c2 = 1;
              c3 = 1;
              const obj3 = { value: closure_1.webGetBudgetsByMonth(currentMonth, currentYear), done: false };
              return obj3;
            } else if (db) {
              c2 = 2;
              c3 = 1;
              const obj4 = { value: budgets.getBudgetsByMonth(db, currentMonth, currentYear), done: false };
              return obj4;
            } else {
              c3 = 3;
              return { value: "writable", done: "BounceInDown" };
            }
          } else {
            if (1 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                budgets = value;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              budgets = value;
            }
            const obj6 = { budgets };
            closure_129_0(obj6);
            c3 = 3;
            return { value: "writable", done: "BounceInDown" };
          }
        } catch (tmp14) {
          c3 = 3;
          throw tmp14;
        }
      }
    },
    setBudget: async function setBudget(arg0, arg1) {
      let category_group = arg0;
      let amount = arg1;
      let c3 = 0;
      let c4 = 0;
      return (async (arg0, value) => {
        let currentMonth;
        let currentYear;
        let db;
        let obj3;
        if (c4 === 2) {
          c4 = 3;
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
            c4 = 2;
            if (0 === c3) {
              c2 = 0;
              ({ db, currentMonth, currentYear } = closure_2_1());
              const _HermesInternal = HermesInternal;
              date = { id: "" + category_group + "_" + currentMonth + "_" + currentYear, category_group, amount, month: currentMonth, year: currentYear };
              closure_2_1();
              if (amount.IS_WEB) {
                c3 = 1;
                c4 = 1;
                const obj4 = { value: amount.webUpsertBudget(date), done: false };
                return obj4;
              } else if (db) {
                c3 = 3;
                c4 = 1;
                const obj5 = { value: category_group.upsertBudget(db, date), done: false };
                return obj5;
              } else {
                c4 = 3;
                return { value: "writable", done: "BounceInDown" };
              }
            } else {
              if (1 === c3) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  return { value, done: true };
                }
              } else if (2 === c3) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  return { value, done: true };
                } else {
                  c4 = 3;
                  return { value: "writable", done: "BounceInDown" };
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                return { value, done: true };
              }
              c3 = 2;
              c4 = 1;
              const obj8 = { value: obj3.loadBudgets(), done: false };
              obj3 = closure_130_1();
              return obj8;
            }
          } catch (tmp15) {
            c4 = 3;
            throw tmp15;
          }
        }
      })();
    },
    getBudgetForGroup(arg0) {
      closure_0 = arg0;
      const budgets = closure_1().budgets;
      const found = budgets.find((category_group) => category_group.category_group === closure_0);
      let num;
      if (found != null) {
        num = found.amount;
      }
      if (num == null) {
        num = 0;
      }
      return num;
    },
    setMonth: async function setMonth(arg0, arg1) {
      let currentMonth = arg0;
      let currentYear = arg1;
      let c3 = 0;
      let c2 = 0;
      return (async (arg0, value) => {
        let obj3;
        if (c2 === 2) {
          c2 = 3;
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
            c2 = 2;
            if (0 === c3) {
              const obj4 = { currentMonth, currentYear };
              closure_2_0(obj4);
              c3 = 1;
              c2 = 1;
              const obj5 = { value: obj3.loadBudgets(), done: false };
              obj3 = closure_2_1();
              return obj5;
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              return { value, done: true };
            } else {
              c2 = 3;
              return { value: "writable", done: "BounceInDown" };
            }
          } catch (tmp9) {
            c2 = 3;
            throw tmp9;
          }
        }
      })();
    }
  };
  return obj;
});

export const useBudgetStore = closure_3;
