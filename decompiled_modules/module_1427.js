// Module ID: 1427
// Function ID: 1429
// Dependencies: [52, 5, 1078, 1391, 1401, 1389, 1403, 233]

// Module 1427
import react from "react" /* 52 */;
import react_native from "react-native" /* 5 */;
import module_1078 from "module_1078" /* 1078 */;
import module_1391 from "module_1391" /* 1391 */;
import module_1401 from "module_1401" /* 1401 */;
import module_1389 from "module_1389" /* 1389 */;
import module_1403 from "module_1403" /* 1403 */;
import Fragment from "Fragment" /* 233 */;

let c2, c3;

let obj10;
let obj11;
let obj12;
let obj13;
let obj14;
let obj15;
let obj16;
let obj17;
let obj18;
let obj19;
let obj20;
let obj21;
let obj22;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
function BudgetScreen() {
  let budgets;
  let categoryImage;
  let currentMonth;
  let currentYear;
  let items;
  let items1;
  let items10;
  let items11;
  let items13;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let str;
  let tmp4;
  let tmp7;
  const top = currentYear.useSafeAreaInsets().top;
  const transactionStore = module_1391.useTransactionStore();
  ({ expenseByGroup: react, currentMonth } = transactionStore);
  currentYear = transactionStore.currentYear;
  ({ loadTransactions: module_1391, setMonth: module_1401 } = transactionStore);
  const budgetStore = module_1401.useBudgetStore();
  ({ budgets, loadBudgets: module_1389, setBudget: module_1403, getBudgetForGroup: Fragment, setMonth: closure_8 } = budgetStore);
  let obj = react;
  const state = react.useState(null);
  [tmp4, ] = state;
  const state1 = obj.useState("");
  [str, ] = state1;
  const state2 = obj.useState(false);
  [tmp7, ] = state2;
  const effect = obj.useEffect(() => {
    module_1391();
    module_1389();
  }, []);
  function handleOpenEdit(arg0) {

  }
  function handleNumInput(arg0) {

  }
  if (tmp7) {
    if (tmp4) {
      const CATEGORY_GROUPS = module_1403.CATEGORY_GROUPS;
      let obj15 = module_1403;
      const found = CATEGORY_GROUPS.find((id) => id.id === BudgetScreen);
      let obj2 = { style: closure_10.container, children: items2 };
      const tmp11 = closure_10;
      let obj3 = { style: items, children: items1 };
      items = [closure_10.header, ];
      let obj4 = { paddingTop: 12 + top };
      let num = 12;
      items[1] = obj4;
      let obj5 = {
        onPress() {
              closure_1_13(false);
              closure_1_10(null);
            },
        children: null
      };
      let obj6 = { style: closure_10.backBtn, children: "\u2190 Batal" };
      let jsxs5 = Fragment.jsxs;
      const View5 = currentMonth.View;
      const jsxs6 = Fragment.jsxs;
      const View6 = currentMonth.View;
      const jsx4 = Fragment.jsx;
      const TouchableOpacity3 = currentMonth.TouchableOpacity;
      items1 = [jsx4(TouchableOpacity3, obj5), , ];
      items1[1] = <currentMonth.Text style={closure_10.appTitle}>{"Set Budget"}</currentMonth.Text>;
      items1[2] = <currentMonth.View style={{ width: 60 }} />;
      items2 = [jsxs6(View6, obj3), ];
      let obj9 = { style: closure_10.budgetInputScreen, children: items5 };
      let jsxs8Result = found;
      const jsxs7 = Fragment.jsxs;
      const View7 = currentMonth.View;
      if (found) {
        const obj10 = { style: items3, children: items4 };
        items3 = [tmp11.groupBadge, ];
        let obj11 = { backgroundColor: found.color };
        items3[1] = obj11;
        let obj12 = { source: obj15.getCategoryImage(found.image), style: tmp11.badgeImage, resizeMode: "contain" };
        const jsxs8 = obj16.jsxs;
        const View8 = tmp10.View;
        const jsx5 = obj16.jsx;
        const Image = tmp10.Image;
        items4 = [jsx5(Image, obj12), ];
        items4[1] = <tmp10.Text style={tmp11.badgeName}>{found.name}</tmp10.Text>;
        jsxs8Result = jsxs8(View8, obj10);
      }
      items5 = [jsxs8Result, , , , ];
      items5[1] = <tmp10.Text style={tmp11.budgetDisplayLabel}>{"Budget per Bulan"}</tmp10.Text>;
      let obj17 = { style: tmp11.budgetDisplay, children: items6 };
      const jsxs9 = obj16.jsxs;
      let Text = tmp10.Text;
      if (!str) {
        str = "0";
      }
      items6 = ["Rp ", str];
      async function handleSaveBudget(arg0, value) {
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
            if (0 === currentMonth) {
              let closure_0 = currentMonth;
              if (BudgetScreen) {
                const _parseInt = parseInt;
                const parsed = parseInt(React5, 10);
                const _isNaN = isNaN;
                if (!isNaN(parsed)) {
                  if (parsed > 0) {
                    currentMonth = 1;
                    c2 = 1;
                    const obj3 = { value: categoryImage(tmp11, parsed), done: false };
                    return obj3;
                  }
                }
                currentMonth = currentMonth.Alert;
                currentMonth.alert("Masukkan nominal yang valid");
                c2 = 3;
                return { value: "writable", done: "BounceInDown" };
              } else {
                c2 = 3;
                return { value: "writable", done: "BounceInDown" };
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              closure_128_13(false);
              closure_128_10(null);
              closure_128_12("");
              c2 = 3;
              return { value: "writable", done: "BounceInDown" };
            }
          } catch (tmp18) {
            c2 = 3;
            throw tmp18;
          }
        }
      }
      items5[2] = jsxs9(Text, obj17);
      const obj18 = {
        style: tmp11.numpad,
        children: items7.map((children) => {
              let closure_0 = children;
              const items = [closure_1_10.numKey, ];
              let tmp4 = children === "\u232B";
              let numKeyDel = tmp4;
              const tmp = Fragment;
              const jsx = Fragment.jsx;
              const TouchableOpacity = currentMonth.TouchableOpacity;
              const tmp2 = currentMonth;
              if (tmp4) {
                numKeyDel = tmp3.numKeyDel;
              }
              items[1] = numKeyDel;
              const items1 = [tmp3.numKeyText, ];
              const jsx2 = tmp.jsx;
              const Text = tmp2.Text;
              if (tmp4) {
                tmp4 = { color: module_1389.COLORS.error };
                const obj2 = { color: module_1389.COLORS.error };
              }
              const obj3 = { style: items1, children };
              items1[1] = tmp4;
              return <TouchableOpacity key={arg0} style={items} onPress={function onPress() {
                if (typeof handleNumInput === "function") {
                  let closure_0 = tmp;
                  let str = "\u232B";
                  if (closure_0 === "\u232B") {
                    closure_2_12((arr) => {
                      let str = "";
                      if (arr.length > 1) {
                        str = arr.slice(0, -1);
                      }
                      return str;
                    });
                  } else if (closure_0 === "000") {
                    closure_2_12((arg0) => arg0 + "000");
                  } else {
                    closure_2_12((arg0) => arg0 + closure_0);
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }}>{jsx2(Text, obj3)}</TouchableOpacity>;
            })
      };
      items7 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "000", "0", "\u232B"];
      const jsx6 = obj16.jsx;
      const View9 = tmp10.View;
      items5[3] = jsx6(View9, obj18);
      let obj19 = { style: tmp11.saveBtn, onPress: handleSaveBudget, children: null };
      const jsx7 = obj16.jsx;
      const TouchableOpacity4 = tmp10.TouchableOpacity;
      items5[4] = jsx7(TouchableOpacity4, obj19);
      items2[1] = jsxs7(View7, obj9);
      return jsxs5(View5, obj2);
    }
  }
  let items8 = [closure_10.header, ];
  const obj23 = { paddingTop: 12 + top };
  items8[1] = obj23;
  async function handlePrevMonth(arg0, value) {
    if (c3 === 2) {
      c3 = 3;
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
        let c1;
        let num10;
        c3 = 2;
        if (0 === c2) {
          let diff;
          let closure_1 = tmp4;
          let closure_0 = tmp;
          c1 = undefined;
          num10 = 12;
          if (currentMonth !== 1) {
            num10 = currentMonth - 1;
          }
          if (currentMonth === 1) {
            diff = tmp11 - 1;
          } else {
            diff = tmp11;
          }
          c1 = diff;
          c2 = 1;
          c3 = 1;
          const obj3 = { value: module_1401(num10, diff), done: false };
          return obj3;
        } else if (1 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c2 = 2;
            c3 = 1;
            const obj5 = { value: closure_129_8(num10, c1), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c3 = 3;
          return { value: "writable", done: "BounceInDown" };
        }
      } catch (tmp14) {
        c3 = 3;
        throw tmp14;
      }
    }
  }
  async function handleNextMonth(arg0, value) {
    if (c3 === 2) {
      c3 = 3;
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
        let c1;
        let num11;
        c3 = 2;
        if (0 === c2) {
          let sum;
          let closure_1 = tmp4;
          let closure_0 = tmp;
          c1 = undefined;
          num11 = 1;
          if (currentMonth !== 12) {
            num11 = currentMonth + 1;
          }
          if (currentMonth === 12) {
            sum = tmp11 + 1;
          } else {
            sum = tmp11;
          }
          c1 = sum;
          c2 = 1;
          c3 = 1;
          const obj3 = { value: module_1401(num11, sum), done: false };
          return obj3;
        } else if (1 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c2 = 2;
            c3 = 1;
            const obj5 = { value: closure_129_8(num11, c1), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c3 = 3;
          return { value: "writable", done: "BounceInDown" };
        }
      } catch (tmp14) {
        c3 = 3;
        throw tmp14;
      }
    }
  }
  let jsxs = Fragment.jsxs;
  let View = currentMonth.View;
  let jsx = Fragment.jsx;
  let View2 = currentMonth.View;
  let items9 = [<View2 style={items8}>{null}</View2>, ];
  let jsxs2 = Fragment.jsxs;
  const ScrollView = currentMonth.ScrollView;
  let jsxs3 = Fragment.jsxs;
  let View3 = currentMonth.View;
  let jsx2 = Fragment.jsx;
  let TouchableOpacity = currentMonth.TouchableOpacity;
  const obj25 = { showsVerticalScrollIndicator: false, contentContainerStyle: closure_10.scroll, children: items13 };
  const obj26 = { style: closure_10.monthNav, children: items10 };
  const obj27 = { style: closure_10.navBtn, onPress: handlePrevMonth, children: null };
  items10 = [jsx2(TouchableOpacity, obj27), , ];
  let jsxs4 = Fragment.jsxs;
  let View4 = currentMonth.View;
  const obj29 = { style: closure_10.monthCenter, children: items11 };
  items11 = [, ];
  items11[0] = <currentMonth.Text style={closure_10.monthSub}>{"BULAN INI"}</currentMonth.Text>;
  const items12 = [closure_8[currentMonth - 1], " ", currentYear];
  items11[1] = <currentMonth.Text style={closure_10.monthTitle}>{items12}</currentMonth.Text>;
  items10[1] = jsxs4(View4, obj29);
  let jsx3 = Fragment.jsx;
  const TouchableOpacity2 = currentMonth.TouchableOpacity;
  const obj32 = { style: closure_10.navBtn, onPress: handleNextMonth, children: null };
  items10[2] = jsx3(TouchableOpacity2, obj32);
  items13 = [jsxs3(View3, obj26), ];
  const CATEGORY_GROUPS1 = module_1403.CATEGORY_GROUPS;
  items13[1] = CATEGORY_GROUPS1.map((backgroundColor) => {
    let combined;
    let error;
    let items;
    let items1;
    let items3;
    let items5;
    let items7;
    let items9;
    let jsxs6;
    let jsxs6Result;
    const tmp = React(backgroundColor.id);
    let num = backgroundColor[backgroundColor.id];
    if (num == null) {
      num = 0;
    }
    let num2 = 0;
    if (tmp > 0) {
      let tmp2 = globalThis;
      const _Math = Math;
      num2 = Math.min(num / tmp, 1);
    }
    let tmp3 = tmp > 0 && num > tmp;
    if (num2 < 0.6) {
      error = module_1389.COLORS.statusIncome;
    } else if (num2 < 0.9) {
      let tmp5 = module_1389;
      error = module_1389.COLORS.groupFood;
    } else {
      error = module_1389.COLORS.error;
    }
    const obj3 = { style: items, children: items1 };
    items = [closure_1_10.cardHeader, { backgroundColor: backgroundColor.color }];
    const jsxs = React.jsxs;
    const TouchableOpacity = currentMonth.TouchableOpacity;
    const jsxs2 = React.jsxs;
    const View = currentMonth.View;
    items1 = [, ];
    items1[0] = <currentMonth.Text style={closure_1_10.cardTitle}>{arg0.name}</currentMonth.Text>;
    items1[1] = <currentMonth.Text style={closure_1_10.editHint}>{"Tap untuk edit \u270F\uFE0F"}</currentMonth.Text>;
    const items2 = [jsxs2(View, obj3), ];
    const jsxs3 = React.jsxs;
    const View2 = currentMonth.View;
    const obj6 = { style: closure_1_10.cardBody, children: items3 };
    items3 = [, ];
    items3[0] = <currentMonth.Image source={module_1403.getCategoryImage(arg0.image)} style={closure_1_10.cardImage} resizeMode="contain" />;
    const items4 = [closure_1_10.spentLabel, ];
    let tmp9 = tmp3;
    const jsxs4 = React.jsxs;
    const View3 = currentMonth.View;
    const jsx = React.jsx;
    const Text = currentMonth.Text;
    const obj8 = { style: closure_1_10.cardInfo, children: items5 };
    if (tmp3) {
      tmp9 = { color: module_1389.COLORS.error };
      const obj9 = { color: module_1389.COLORS.error };
    }
    items4[1] = tmp9;
    let str = "Terpakai";
    if (tmp3) {
      str = "Overbudget! \u{1F6A8}";
    }
    items5 = [<Text style={items4}>{str}</Text>, , , , ];
    const items6 = [tmp8.spentAmount, ];
    const jsx2 = obj.jsx;
    const Text2 = tmp7.Text;
    if (tmp3) {
      tmp3 = { color: module_1389.COLORS.error };
      const obj11 = { color: module_1389.COLORS.error };
    }
    const obj12 = { style: items6, children: combined };
    items6[1] = tmp3;
    if (num >= 1000000) {
      const result = num / 1000000;
      const _HermesInternal3 = HermesInternal;
      combined = "Rp " + result.toFixed(1) + "jt";
    } else if (num >= 1000) {
      const result1 = num / 1000;
      const _HermesInternal2 = HermesInternal;
      combined = "Rp " + result1.toFixed(0) + "k";
    } else {
      const _HermesInternal = HermesInternal;
      combined = "Rp " + num;
    }
    items5[1] = jsx2(Text2, obj12);
    let str7 = "belum diset";
    const jsxs5 = obj.jsxs;
    const Text3 = tmp7.Text;
    const obj13 = { style: closure_1_10.budgetLabel, children: items7 };
    if (tmp > 0) {
      let combined1;
      if (tmp >= 1000000) {
        const result2 = tmp / 1000000;
        const _HermesInternal6 = HermesInternal;
        combined1 = "Rp " + result2.toFixed(1) + "jt";
      } else if (tmp >= 1000) {
        const result3 = tmp / 1000;
        const _HermesInternal5 = HermesInternal;
        combined1 = "Rp " + result3.toFixed(0) + "k";
      } else {
        const _HermesInternal4 = HermesInternal;
        combined1 = "Rp " + tmp;
      }
      str7 = combined1;
    }
    items7 = ["dari ", str7];
    items5[2] = jsxs5(Text3, obj13);
    const obj14 = { style: closure_1_10.progressBg, children: jsxs6Result };
    jsxs6Result = tmp > 0;
    const jsx3 = obj.jsx;
    const View4 = tmp7.View;
    if (jsxs6Result) {
      const items8 = [tmp8.progressFill, ];
      const obj15 = { children: items9 };
      const obj17 = { flex: num2, backgroundColor: error };
      items8[1] = obj17;
      ({ jsxs: jsxs6, Fragment } = React);
      items9 = [<currentMonth.View style={items8} />, ];
      const obj19 = { flex: 1 - num2 };
      items9[1] = <currentMonth.View style={obj19} />;
      jsxs6Result = jsxs6(Fragment, obj15);
    }
    items5[3] = jsx3(View4, obj14);
    const jsxResult = tmp === 0 && <tmp7.Text style={closure_1_10.setBudgetHint}>{"Tap untuk set budget \u2192"}</tmp7.Text>;
    items5[4] = jsxResult;
    items3[1] = jsxs4(View3, obj8);
    items2[1] = jsxs3(View2, obj6);
    return <TouchableOpacity key={arg0.id} style={closure_1_10.card} onPress={function onPress() {
      const id = backgroundColor.id;
      if (typeof handleOpenEdit === "function") {
        const tmp2 = Fragment(id);
        closure_2_10(id);
        let str = "";
        const tmp5 = closure_2_12;
        if (tmp2 > 0) {
          const _String = String;
          str = String(tmp2);
        }
        tmp5(str);
        closure_2_13(true);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }} activeOpacity={0.85}>{items2}</TouchableOpacity>;
  });
  items9[1] = jsxs2(ScrollView, obj25);
  return <View style={closure_10.container}>{items9}</View>;
}
let closure_8 = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
const StyleSheet = react_native.StyleSheet;
let obj2 = { container: { flex: 1, backgroundColor: module_1389.COLORS.background }, header: obj3, appTitle: obj4, backBtn: obj5, scroll: { padding: 20, paddingBottom: 40 }, monthNav: obj6, navBtn: { width: 40, height: 40, alignItems: "center", justifyContent: "center" }, navBtnText: { fontSize: 28, color: module_1389.COLORS.onSurface, fontWeight: "700" }, monthCenter: { alignItems: "center" }, monthSub: obj7, monthTitle: obj8, card: obj9, cardHeader: { paddingHorizontal: 16, paddingVertical: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: module_1389.BORDER.width, borderBottomColor: module_1389.COLORS.uiStroke }, cardTitle: obj10, editHint: obj11, cardBody: { flexDirection: "row", padding: 12, gap: 12, alignItems: "center" }, cardImage: { width: 80, height: 80, borderRadius: 12, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke }, cardInfo: { flex: 1 }, spentLabel: obj12, spentAmount: obj13, budgetLabel: obj14, setBudgetHint: obj15, progressBg: { height: 14, backgroundColor: module_1389.COLORS.surfaceContainerHighest, borderRadius: module_1389.BORDER.radius.full, borderWidth: 2, borderColor: module_1389.COLORS.uiStroke, overflow: "hidden", flexDirection: "row" }, progressFill: { height: "100%" }, budgetInputScreen: { flex: 1, padding: 24, gap: 16, alignItems: "center" }, groupBadge: obj16, badgeImage: { width: 80, height: 80 }, badgeName: obj17, budgetDisplayLabel: obj18, budgetDisplay: obj19, numpad: { flexDirection: "row", flexWrap: "wrap", gap: 10, width: "100%" }, numKey: size, numKeyDel: { backgroundColor: module_1389.COLORS.errorContainer }, numKeyText: obj20, saveBtn: obj21, saveBtnText: obj22 };
obj3 = { paddingHorizontal: 20, paddingVertical: 12, backgroundColor: module_1389.COLORS.background, borderBottomWidth: module_1389.BORDER.width, borderBottomColor: module_1389.COLORS.uiStroke, flexDirection: "row", justifyContent: "space-between", alignItems: "center" };
const create = StyleSheet.create;
const merged = Object.assign(module_1389.SHADOWS.sticker);
obj4 = { color: module_1389.COLORS.primary, textAlign: "center", flex: 1 };
const merged1 = Object.assign(module_1389.FONTS.headlineLgMobile);
obj5 = { color: module_1389.COLORS.primary };
const merged2 = Object.assign(module_1389.FONTS.labelLg);
obj6 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: module_1389.COLORS.surface, borderRadius: module_1389.BORDER.radius.full, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke, paddingHorizontal: 8, paddingVertical: 8, marginBottom: 16 };
const merged3 = Object.assign(module_1389.SHADOWS.sticker);
obj7 = { color: module_1389.COLORS.onSurfaceVariant };
const merged4 = Object.assign(module_1389.FONTS.labelSm);
obj8 = { color: module_1389.COLORS.onSurface };
const merged5 = Object.assign(module_1389.FONTS.headlineSm);
obj9 = { backgroundColor: module_1389.COLORS.surface, borderRadius: module_1389.BORDER.radius.xl, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke, overflow: "hidden", marginBottom: 16 };
const merged6 = Object.assign(module_1389.SHADOWS.sticker);
obj10 = { color: module_1389.COLORS.uiStroke };
const merged7 = Object.assign(module_1389.FONTS.headlineSm);
obj11 = { color: module_1389.COLORS.uiStroke, opacity: 0.7 };
const merged8 = Object.assign(module_1389.FONTS.labelSm);
obj12 = { color: module_1389.COLORS.onSurfaceVariant };
const merged9 = Object.assign(module_1389.FONTS.labelSm);
obj13 = { color: module_1389.COLORS.uiStroke };
const merged10 = Object.assign(module_1389.FONTS.headlineMd);
obj14 = { color: module_1389.COLORS.outline, marginBottom: 8 };
const merged11 = Object.assign(module_1389.FONTS.labelSm);
obj15 = { color: module_1389.COLORS.primary, marginTop: 4 };
const merged12 = Object.assign(module_1389.FONTS.labelSm);
obj16 = { borderRadius: module_1389.BORDER.radius.xl, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke, padding: 16, alignItems: "center", gap: 8, width: 140 };
const merged13 = Object.assign(module_1389.SHADOWS.sticker);
obj17 = { color: module_1389.COLORS.uiStroke };
const merged14 = Object.assign(module_1389.FONTS.headlineSm);
obj18 = { color: module_1389.COLORS.onSurfaceVariant, letterSpacing: 2 };
const merged15 = Object.assign(module_1389.FONTS.labelSm);
obj19 = { color: module_1389.COLORS.primary };
const merged16 = Object.assign(module_1389.FONTS.headlineLgMobile);
size = { width: "30%", height: 52, backgroundColor: module_1389.COLORS.surface, borderRadius: module_1389.BORDER.radius.xl, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke, alignItems: "center", justifyContent: "center" };
const merged17 = Object.assign(module_1389.SHADOWS.stickerSm);
obj20 = { color: module_1389.COLORS.uiStroke };
const merged18 = Object.assign(module_1389.FONTS.headlineSm);
obj21 = { width: "100%", backgroundColor: module_1389.COLORS.primary, borderRadius: module_1389.BORDER.radius.xl, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke, paddingVertical: 16, alignItems: "center" };
const merged19 = Object.assign(module_1389.SHADOWS.sticker);
obj22 = { color: "#fff" };
const merged20 = Object.assign(module_1389.FONTS.headlineSm);
let closure_10 = create(obj2);

export default BudgetScreen;
