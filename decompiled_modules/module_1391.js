// Module ID: 1391
// Function ID: 1393
// Dependencies: [1392, 1395, 1396]

// Module 1391
import module_1392 from "module_1392" /* 1392 */;
import insertTransaction from "insertTransaction" /* 1395 */;
import webInsertTransaction from "webInsertTransaction" /* 1396 */;

let c6, c7, closure_1_0;

let date = new Date();
let closure_3 = ["campus", "kos", "food", "personal"];
let closure_4 = module_1392.create((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let obj = {
    db: null,
    transactions: [],
    recentTransactions: [],
    totalIncome: 0,
    totalExpense: 0,
    balance: 0,
    expenseByGroup: {},
    currentMonth: date.getMonth() + 1,
    currentYear: date.getFullYear(),
    setDb(db) {
      const obj = { db };
      closure_0(obj);
      const obj2 = closure_1();
      const transactions = obj2.loadTransactions();
    },
    loadTransactions: async function loadTransactions(arg0, value) {
      let constants;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "writable", done: "BounceInDown" };
        }
      } else {
        try {
          let transactions;
          let recentTransactions;
          let totalIncome;
          let totalExpense;
          let expenseByGroup;
          c7 = 2;
          const tmp4 = c6;
          if (0 === c6) {
            transactions = undefined;
            recentTransactions = undefined;
            totalIncome = undefined;
            totalExpense = undefined;
            const tmp61 = webInsertTransaction();
            const db = tmp61.db;
            const currentMonth = tmp61.currentMonth;
            const currentYear = tmp61.currentYear;
            expenseByGroup = {};
            if (constants.IS_WEB) {
              const all2 = Promise.all;
              const items = [constants.webGetTransactionsByMonth(currentMonth, currentYear), constants.webGetRecentTransactions(5), constants.webGetTotalByTypeAndMonth("income", currentMonth, currentYear), constants.webGetTotalByTypeAndMonth("expense", currentMonth, currentYear)];
              c6 = 1;
              c7 = 1;
              const obj4 = { value: all2(items), done: false };
              return obj4;
            } else if (db) {
              const items1 = [closure_1_0.getTransactionsByMonth(db, currentMonth, currentYear), closure_1_0.getRecentTransactions(db, 5), , ];
              const str = "income";
              items1[2] = closure_1_0.getTotalByTypeAndMonth(db, "income", currentMonth, currentYear);
              items1[3] = closure_1_0.getTotalByTypeAndMonth(db, "expense", currentMonth, currentYear);
              c6 = 3;
              c7 = 1;
              const obj5 = { value: all(items1), done: false };
              return obj5;
            } else {
              c7 = 3;
              return { value: "writable", done: "BounceInDown" };
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              const iter7 = value[Symbol.iterator]();
              closure_1_0 = value;
              constants = undefined;
              let tmp43 = iter7 === undefined;
              if (!tmp43) {
                constants = iter7.next();
              }
              transactions = constants;
              constants = undefined;
              let iter3 = tmp78;
              if (!tmp43) {
                tmp43 = tmp42;
                iter3 = iter8;
                if (iter7 !== undefined) {
                  constants = iter8.next();
                  tmp43 = tmp42;
                  iter3 = iter8;
                }
              }
              recentTransactions = constants;
              constants = undefined;
              let iter4 = iter3;
              if (!tmp43) {
                tmp43 = tmp48;
                iter4 = iter3;
                if (iter3 !== undefined) {
                  constants = iter3.next();
                  tmp43 = tmp48;
                  iter4 = iter3;
                }
              }
              totalIncome = constants;
              constants = undefined;
              let obj7 = iter4;
              if (!tmp43) {
                tmp43 = tmp53;
                obj7 = iter4;
                if (iter4 !== undefined) {
                  constants = iter4.next();
                  tmp43 = tmp53;
                  obj7 = iter4;
                }
              }
              totalExpense = constants;
              if (!tmp43) {
                obj7.return();
              }
              c6 = 2;
              c7 = 1;
              const obj8 = {
                value: Promise.all(transactions.map(async (item, index) => {
                          closure_0 = item;
                          if (c4 === 2) {
                            c4 = 3;
                            throw new TypeError("Generator functions may not be called on executing generators");
                          } else if (tmp2 === 3) {
                            if (item === 1) {
                              throw index;
                            } else if (item === 2) {
                              const obj2 = { value: index, done: true };
                              return obj2;
                            } else {
                              return { value: "writable", done: "BounceInDown" };
                            }
                          } else {
                            try {
                              let closure_2;
                              c4 = 2;
                              if (0 === c3) {
                                closure_2 = expenseByGroup;
                                closure_1 = closure_0;
                                c3 = 1;
                                c4 = 1;
                                const obj3 = { value: closure_1.webGetExpenseByGroupAndMonth(closure_0, constants, closure_2_2), done: false };
                                return obj3;
                              } else if (item === 1) {
                                c4 = 3;
                                throw index;
                              } else if (item === 2) {
                                c4 = 3;
                                const obj = { value: index, done: true };
                                return obj;
                              } else {
                                closure_2[closure_1] = index;
                                c4 = 3;
                                return { value: "writable", done: "BounceInDown" };
                              }
                            } catch (tmp11) {
                              c4 = 3;
                              throw tmp11;
                            }
                          }
                        })),
                done: false
              };
              return obj8;
            }
          } else {
            if (2 === tmp4) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                const obj9 = { value, done: true };
                return obj9;
              }
            } else if (3 === tmp4) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                const obj11 = { value, done: true };
                return obj11;
              } else {
                const iter5 = value[Symbol.iterator]();
                date = value;
                transactions = undefined;
                let tmp10 = iter5 === undefined;
                if (!tmp10) {
                  transactions = iter5.next();
                }
                transactions = undefined;
                let iter = tmp76;
                if (!tmp10) {
                  const tmp9 = iter6 === undefined;
                  tmp10 = tmp9;
                  iter = iter6;
                  if (!tmp9) {
                    transactions = iter6.next();
                    tmp10 = tmp9;
                    iter = iter6;
                  }
                }
                const tmp11 = recentTransactions;
                recentTransactions = transactions;
                transactions = undefined;
                let iter2 = iter;
                if (!tmp10) {
                  const tmp13 = date;
                  const tmp15 = iter === undefined;
                  tmp10 = tmp15;
                  iter2 = iter;
                  if (!tmp15) {
                    transactions = iter.next();
                    tmp10 = tmp15;
                    iter2 = iter;
                  }
                }
                totalIncome = transactions;
                transactions = undefined;
                let obj2 = iter2;
                if (!tmp10) {
                  tmp10 = tmp20;
                  obj2 = iter2;
                  if (iter2 !== undefined) {
                    transactions = iter2.next();
                    tmp10 = tmp20;
                    obj2 = iter2;
                  }
                }
                totalExpense = transactions;
                if (!tmp10) {
                  obj2.return();
                }
                c6 = 4;
                c7 = 1;
                const obj12 = {
                  value: Promise.all(transactions.map(async (item) => {
                              let expenseByGroupAndMonth = item;
                              let c3 = 0;
                              let c4 = 0;
                              return (async (arg0, value) => {
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
                                      closure_2 = closure_2_7;
                                      closure_1 = expenseByGroupAndMonth;
                                      c3 = 1;
                                      c4 = 1;
                                      const obj3 = { value: expenseByGroupAndMonth.getExpenseByGroupAndMonth(closure_2_0, expenseByGroupAndMonth, closure_2_1, closure_2_2), done: false };
                                      return obj3;
                                    } else if (arg0 === 1) {
                                      c4 = 3;
                                      throw value;
                                    } else if (arg0 === 2) {
                                      c4 = 3;
                                      return { value, done: true };
                                    } else {
                                      closure_2[closure_1] = value;
                                      c4 = 3;
                                      return { value: "writable", done: "BounceInDown" };
                                    }
                                  } catch (tmp13) {
                                    c4 = 3;
                                    throw tmp13;
                                  }
                                }
                              })();
                            })),
                  done: false
                };
                return obj12;
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              let obj = { value, done: true };
              return obj;
            }
            const obj13 = { transactions, recentTransactions, totalIncome, totalExpense, balance: totalIncome - totalExpense, expenseByGroup };
            closure_133_0(obj13);
            c7 = 3;
            return { value: "writable", done: "BounceInDown" };
          }
        } catch (tmp71) {
          c7 = 3;
          throw tmp71;
        }
      }
    },
    addTransaction: async function addTransaction(arg0, value) {
      let obj3;
      let toISOStringResult;
      closure_0 = arg0;
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
          c3 = 2;
          if (0 === c2) {
            let c1 = 0;
            const db = webInsertTransaction().db;
            const _Date = Date;
            const _Math = Math;
            const str = Date.now();
            const str1 = str.toString();
            const str2 = Math.random();
            const _Date2 = Date;
            const self = this;
            const self2 = this;
            const str3 = str2.toString(36);
            const sum = str1 + str3.substring(2);
            date = new Date();
            const obj4 = { id: sum, created_at: toISOStringResult };
            toISOStringResult = date.toISOString();
            const merged = Object.assign(closure_0);
            if (c1.IS_WEB) {
              c2 = 1;
              c3 = 1;
              const obj5 = { value: c1.webInsertTransaction(obj4), done: false };
              return obj5;
            } else if (db) {
              c2 = 3;
              c3 = 1;
              const obj6 = { value: closure_0.insertTransaction(db, obj4), done: false };
              return obj6;
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
                const obj7 = { value, done: true };
                return obj7;
              }
            } else if (2 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj8 = { value, done: true };
                return obj8;
              } else {
                c3 = 3;
                return { value: "writable", done: "BounceInDown" };
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj = { value, done: true };
              return obj;
            }
            c2 = 2;
            c3 = 1;
            const obj9 = { value: obj3.loadTransactions(), done: false };
            obj3 = closure_129_1();
            return obj9;
          }
        } catch (tmp16) {
          c3 = 3;
          throw tmp16;
        }
      }
    },
    removeTransaction: async function removeTransaction(arg0, value) {
      let obj3;
      closure_0 = arg0;
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
          c3 = 2;
          if (0 === c2) {
            let c1 = 0;
            const db = webInsertTransaction().db;
            if (c1.IS_WEB) {
              c2 = 1;
              c3 = 1;
              const obj4 = { value: c1.webDeleteTransaction(closure_0), done: false };
              return obj4;
            } else if (db) {
              c2 = 3;
              c3 = 1;
              const obj5 = { value: closure_0.deleteTransaction(db, closure_0), done: false };
              return obj5;
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
                const obj6 = { value, done: true };
                return obj6;
              }
            } else if (2 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj7 = { value, done: true };
                return obj7;
              } else {
                c3 = 3;
                return { value: "writable", done: "BounceInDown" };
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj = { value, done: true };
              return obj;
            }
            c2 = 2;
            c3 = 1;
            const obj8 = { value: obj3.loadTransactions(), done: false };
            obj3 = closure_129_1();
            return obj8;
          }
        } catch (tmp9) {
          c3 = 3;
          throw tmp9;
        }
      }
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
              const obj5 = { value: obj3.loadTransactions(), done: false };
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

export const useTransactionStore = closure_4;
