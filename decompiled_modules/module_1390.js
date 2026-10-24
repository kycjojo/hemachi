// Module ID: 1390
// Function ID: 1392
// Dependencies: [52, 5, 1078, 1120, 1391, 1401, 1389, 1403, 233]

// Module 1390
import react_mod from "react" /* 52 */;
import react_native from "react-native" /* 5 */;
import module_1078 from "module_1078" /* 1078 */;
import module_1120 from "module_1120" /* 1120 */;
import module_1391 from "module_1391" /* 1391 */;
import module_1401 from "module_1401" /* 1401 */;
import module_1389 from "module_1389" /* 1389 */;
import module_1403 from "module_1403" /* 1403 */;
import Fragment from "Fragment" /* 233 */;

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
let obj23;
let obj24;
let obj25;
let obj26;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
function HomeScreen() {
  let CATEGORY_GROUPS;
  let View12;
  let balance;
  let budgets;
  let categoryImage;
  let combined;
  let combined1;
  let combined2;
  let constants;
  let currentMonth;
  let currentYear;
  let error;
  let expenseByGroup;
  let items;
  let items1;
  let items10;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items4;
  let items5;
  let items7;
  let items8;
  let jsx6;
  let jsx9Result;
  let loadTransactions;
  let navigation;
  let recentTransactions;
  let str16;
  let totalExpense;
  let totalIncome;
  const top = loadTransactions.useSafeAreaInsets().top;
  react = module_1120.useNavigation();
  const transactionStore = module_1391.useTransactionStore();
  ({ totalIncome, totalExpense, balance, recentTransactions, expenseByGroup } = transactionStore);
  loadTransactions = transactionStore.loadTransactions;
  ({ currentMonth, currentYear } = transactionStore);
  const budgetStore = module_1401.useBudgetStore();
  ({ budgets, loadBudgets: module_1120, getBudgetForGroup: module_1391 } = budgetStore);
  const effect = react.useEffect(() => {
    loadTransactions();
    module_1120();
  }, []);
  let closure_1;
  let closure_2;
  let num = 100;
  if (budgets.length !== 0) {
    closure_1 = 0;
    closure_2 = 0;
    const item = budgets.forEach((amount) => {
      if (amount.amount > 0) {
        let num = expenseByGroup[amount.category_group];
        if (num == null) {
          num = 0;
        }
        const _Math = Math;
        closure_1 = closure_1 + Math.max(0, 100 - num / amount.amount * 100);
        closure_2 = closure_2 + 1;
      }
    });
    let num2 = 100;
    if (closure_2 !== 0) {
      let _Math = Math;
      const tmp7 = closure_1;
      num2 = Math.round(closure_1 / closure_2);
    }
    num = num2;
  }
  const obj = Fragment;
  const obj3 = { style: items, children: items1 };
  items = [closure_11.header, ];
  const obj4 = { paddingTop: 12 + top };
  items[1] = obj4;
  let tmp9 = closure_9[currentMonth - 1];
  let jsxs = Fragment.jsxs;
  let View = expenseByGroup.View;
  let jsxs2 = Fragment.jsxs;
  let View2 = expenseByGroup.View;
  items1 = [<expenseByGroup.Text style={closure_11.appTitle}>{"Playful Pocket"}</expenseByGroup.Text>, ];
  let obj7 = { style: closure_11.settingsIcon, children: "\u2699\uFE0F" };
  let jsx = Fragment.jsx;
  const TouchableOpacity = expenseByGroup.TouchableOpacity;
  items1[1] = <TouchableOpacity style={closure_11.settingsBtn} onPress={function onPress() {
    return navigation.navigate("Settings");
  }}>{null}</TouchableOpacity>;
  let items2 = [jsxs2(View2, obj3), ];
  let obj8 = { showsVerticalScrollIndicator: false, contentContainerStyle: closure_11.scroll, children: items13 };
  let obj9 = { style: closure_11.balanceCard, children: items4 };
  let items3 = [tmp9, " ", currentYear];
  let jsxs3 = Fragment.jsxs;
  const ScrollView = expenseByGroup.ScrollView;
  let jsxs4 = Fragment.jsxs;
  let View3 = expenseByGroup.View;
  items4 = [<expenseByGroup.Text style={closure_11.monthLabel}>{items3}</expenseByGroup.Text>, , , ];
  items4[1] = <expenseByGroup.Text style={closure_11.balanceLabel}>{"TOTAL SALDO"}</expenseByGroup.Text>;
  let obj12 = { style: closure_11.balanceAmount, children: combined };
  let jsx2 = Fragment.jsx;
  let Text = expenseByGroup.Text;
  if (balance >= 1000000) {
    let result = balance / 1000000;
    let _HermesInternal3 = HermesInternal;
    combined = "Rp " + result.toFixed(1) + "jt";
  } else if (balance >= 1000) {
    let result1 = balance / 1000;
    let _HermesInternal2 = HermesInternal;
    let str3 = "Rp ";
    combined = "Rp " + result1.toFixed(0) + "k";
  } else {
    let _HermesInternal = HermesInternal;
    let str = "Rp ";
    combined = "Rp " + balance;
  }
  items4[2] = jsx2(Text, obj12);
  let obj13 = { style: tmp11.inOutRow, children: items8 };
  let jsxs5 = obj.jsxs;
  let View4 = tmp10.View;
  const jsxs6 = obj.jsxs;
  let View5 = tmp10.View;
  const obj14 = { style: closure_11.inOutItem, children: items5 };
  items5 = [<tmp10.Text style={tmp11.inOutIcon}>{"\u2193"}</tmp10.Text>, ];
  const jsxs7 = obj.jsxs;
  const View6 = tmp10.View;
  let items6 = [<tmp10.Text style={tmp11.inOutLabel}>{"Masuk"}</tmp10.Text>, ];
  const obj17 = { style: items7, children: combined1 };
  items7 = [tmp11.inOutAmount, ];
  const obj18 = { color: module_1389.COLORS.statusIncome };
  items7[1] = obj18;
  let jsx3 = obj.jsx;
  let Text2 = tmp10.Text;
  if (totalIncome >= 1000000) {
    let result2 = totalIncome / 1000000;
    let _HermesInternal6 = HermesInternal;
    combined1 = "Rp " + result2.toFixed(1) + "jt";
  } else if (totalIncome >= 1000) {
    let result3 = totalIncome / 1000;
    let _HermesInternal5 = HermesInternal;
    let str7 = "k";
    combined1 = "Rp " + result3.toFixed(0) + "k";
  } else {
    let _HermesInternal4 = HermesInternal;
    combined1 = "Rp " + totalIncome;
  }
  const obj19 = { children: items6 };
  items6[1] = jsx3(Text2, obj17);
  items5[1] = jsxs7(View6, obj19);
  items8 = [jsxs6(View5, obj14), , ];
  items8[1] = <tmp10.View style={closure_11.divider} />;
  const items9 = [tmp11.inOutIcon, { color: tmp16.COLORS.error }];
  const jsxs8 = obj.jsxs;
  const View7 = tmp10.View;
  const obj21 = { style: closure_11.inOutItem, children: items10 };
  items10 = [<tmp10.Text style={items9}>{"\u2191"}</tmp10.Text>, ];
  const jsxs9 = obj.jsxs;
  const View8 = tmp10.View;
  const items11 = [, ];
  items11[0] = <tmp10.Text style={closure_11.inOutLabel}>{"Keluar"}</tmp10.Text>;
  const obj24 = { style: items12, children: combined2 };
  items12 = [tmp11.inOutAmount, { color: tmp16.COLORS.error }];
  const jsx4 = obj.jsx;
  let Text3 = tmp10.Text;
  if (totalExpense >= 1000000) {
    const result4 = totalExpense / 1000000;
    const _HermesInternal9 = HermesInternal;
    combined2 = "Rp " + result4.toFixed(1) + "jt";
  } else if (totalExpense >= 1000) {
    const result5 = totalExpense / 1000;
    const _HermesInternal8 = HermesInternal;
    combined2 = "Rp " + result5.toFixed(0) + "k";
  } else {
    const _HermesInternal7 = HermesInternal;
    combined2 = "Rp " + totalExpense;
  }
  const obj25 = { children: items11 };
  items11[1] = jsx4(Text3, obj24);
  items10[1] = jsxs9(View8, obj25);
  items8[2] = jsxs8(View7, obj21);
  items4[3] = jsxs5(View4, obj13);
  items13 = [jsxs4(View3, obj9), , , , , ];
  const jsxs10 = obj.jsxs;
  const View9 = tmp10.View;
  const jsxs11 = obj.jsxs;
  const View10 = tmp10.View;
  const obj27 = { style: closure_11.scoreRow, children: items14 };
  items14 = [, ];
  const obj26 = { style: closure_11.scoreCard, children: items16 };
  items14[0] = <tmp10.Text style={closure_11.scoreLabelText}>{"Skor Keuangan"}</tmp10.Text>;
  const obj29 = { style: closure_11.scoreNumber, children: items15 };
  items15 = [num, ];
  const jsxs12 = obj.jsxs;
  const Text4 = tmp10.Text;
  items15[1] = <tmp10.Text style={closure_11.scoreMax}>{"/100"}</tmp10.Text>;
  items14[1] = jsxs12(Text4, obj29);
  items16 = [jsxs11(View10, obj27), , ];
  const obj31 = { style: closure_11.scoreBarWrap, children: jsx6(View12, { style: items17 }) };
  items17 = [tmp11.scoreBar, ];
  const jsx5 = obj.jsx;
  const View11 = tmp10.View;
  jsx6 = obj.jsx;
  View12 = tmp10.View;
  const obj32 = { flex: num / 100, backgroundColor: error };
  if (num > 70) {
    error = tmp16.COLORS.statusIncome;
  } else if (num > 40) {
    error = tmp16.COLORS.groupFood;
  } else {
    error = tmp16.COLORS.error;
  }
  items17[1] = obj32;
  items16[1] = jsx5(View11, obj31);
  const obj33 = { style: closure_11.scoreDesc, children: str16 };
  str16 = "\u{1F31F} Keuangan sehat!";
  const jsx7 = obj.jsx;
  const Text5 = tmp10.Text;
  if (num < 80) {
    let str17 = "\u{1F6A8} Over budget!";
    if (num >= 50) {
      str17 = "\u26A0\uFE0F Perlu dikontrol";
    }
    str16 = str17;
  }
  items16[2] = jsx7(Text5, obj33);
  items13[1] = jsxs10(View9, obj26);
  items13[2] = <tmp10.Text style={closure_11.sectionTitle}>{"Budget Bulan Ini"}</tmp10.Text>;
  const obj35 = {
    style: closure_11.groupGrid,
    children: CATEGORY_GROUPS.map((backgroundColor) => {
      let combined;
      let error;
      let items2;
      let items4;
      let items6;
      let items8;
      let str;
      const tmp = module_1391(backgroundColor.id);
      let num = expenseByGroup[backgroundColor.id];
      if (num == null) {
        num = 0;
      }
      let num2 = 0;
      if (tmp > 0) {
        const _Math = Math;
        num2 = Math.min(num / tmp, 1);
      }
      let tmp3 = tmp > 0 && num > tmp;
      if (num2 < 0.6) {
        error = module_1389.COLORS.statusIncome;
      } else if (num2 < 0.9) {
        error = module_1389.COLORS.groupFood;
      } else {
        error = module_1389.COLORS.error;
      }
      const items = [closure_11.groupCardHeader, { backgroundColor: backgroundColor.color }];
      const jsxs = Fragment.jsxs;
      const View = react_native.View;
      const jsx = Fragment.jsx;
      const View2 = react_native.View;
      const items1 = [<View2 style={items}>{null}</View2>, ];
      const jsxs2 = Fragment.jsxs;
      const View3 = react_native.View;
      const obj5 = { style: closure_11.groupCardBody, children: items2 };
      items2 = [, ];
      items2[0] = <react-native.Image source={module_1403.getCategoryImage(arg0.image)} style={closure_11.groupImage} resizeMode="cover" />;
      const items3 = [closure_11.groupSpent, ];
      let tmp9 = tmp3;
      const jsxs3 = Fragment.jsxs;
      const View4 = react_native.View;
      const jsx2 = Fragment.jsx;
      const Text = react_native.Text;
      const obj7 = { style: closure_11.groupInfo, children: items4 };
      if (tmp3) {
        tmp9 = { color: module_1389.COLORS.error };
        const obj8 = { color: module_1389.COLORS.error };
      }
      const obj9 = { style: items3, children: str };
      items3[1] = tmp9;
      str = "Terpakai";
      if (tmp3) {
        str = "Overbudget! \u{1F6A8}";
      }
      items4 = [jsx2(Text, obj9), , , ];
      const items5 = [closure_11.groupAmount, ];
      const jsx3 = obj.jsx;
      const Text2 = tmp7.Text;
      if (tmp3) {
        tmp3 = { color: module_1389.COLORS.error };
        const obj10 = { color: module_1389.COLORS.error };
      }
      const obj11 = { style: items5, children: combined };
      items5[1] = tmp3;
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
      items4[1] = jsx3(Text2, obj11);
      let str7 = "belum diset";
      const jsxs4 = obj.jsxs;
      const Text3 = tmp7.Text;
      const obj12 = { style: closure_11.groupBudget, children: items6 };
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
      items6 = ["dari ", str7];
      items4[2] = jsxs4(Text3, obj12);
      const items7 = [closure_11.progressFill, { flex: num2, backgroundColor: error }];
      const jsxs5 = obj.jsxs;
      const View5 = tmp7.View;
      const obj13 = { style: closure_11.progressBg, children: items8 };
      items8 = [<react-native.View style={items7} />, ];
      const obj16 = { flex: 1 - num2 };
      items8[1] = <react-native.View style={obj16} />;
      items4[3] = jsxs5(View5, obj13);
      items2[1] = jsxs3(View4, obj7);
      items1[1] = jsxs2(View3, obj5);
      return <View key={arg0.id} style={closure_11.groupCard}>{items1}</View>;
    })
  };
  CATEGORY_GROUPS = module_1403.CATEGORY_GROUPS;
  const jsx8 = obj.jsx;
  const View13 = tmp10.View;
  items13[3] = jsx8(View13, obj35);
  items13[4] = <tmp10.Text style={closure_11.sectionTitle}>{"Transaksi Terakhir"}</tmp10.Text>;
  if (recentTransactions.length === 0) {
    const jsx9 = obj.jsx;
    const View14 = tmp10.View;
    const obj37 = { style: closure_11.emptyBox, children: null };
    jsx9Result = jsx9(View14, obj37);
  } else {
    jsx9Result = recentTransactions.map((category_image) => {
      let category_group;
      let combined;
      let error;
      let items2;
      let items4;
      let jsx;
      let jsxResult;
      let jsxs;
      let str;
      ({ jsx, jsxs } = Fragment);
      const View = expenseByGroup.View;
      if (category_image.category_image) {
        const Image = tmp.Image;
        jsxResult = <Image source={categoryImage.getCategoryImage(arg0.category_image)} style={closure_1_11.txImage} />;
      } else {
        const items = [closure_1_11.txImage, ];
        const obj5 = { backgroundColor: constants.COLORS.surfaceContainerHigh, justifyContent: "center", alignItems: "center" };
        items[1] = obj5;
        const obj6 = { style: { fontSize: 20 }, children: str };
        str = "\u{1F4B8}";
        const View2 = tmp.View;
        const jsx2 = obj.jsx;
        const Text = tmp.Text;
        if (category_image.type === "income") {
          str = "\u{1F4B0}";
        }
        jsxResult = <View2 style={items}>{jsx2(Text, obj6)}</View2>;
      }
      const items1 = [jsxResult, , ];
      const jsxs2 = obj.jsxs;
      const View3 = tmp.View;
      const obj7 = { style: closure_1_11.txInfo, children: items2 };
      items2 = [, ];
      items2[0] = <expenseByGroup.Text style={closure_1_11.txName}>{arg0.category_name}</expenseByGroup.Text>;
      const obj9 = { style: closure_1_11.txNote, numberOfLines: 1, children: category_group };
      category_group = category_image.note;
      const jsx3 = obj.jsx;
      const Text2 = tmp.Text;
      if (!category_group) {
        category_group = category_image.category_group;
      }
      items2[1] = jsx3(Text2, obj9);
      items1[1] = jsxs2(View3, obj7);
      const items3 = [closure_1_11.txAmount, ];
      const jsxs3 = obj.jsxs;
      const Text3 = tmp.Text;
      if (category_image.type === "income") {
        error = constants.COLORS.statusIncome;
      } else {
        error = constants.COLORS.error;
      }
      const obj10 = { style: items3, children: items4 };
      items3[1] = { color: error };
      let str3 = "-";
      if (category_image.type === "income") {
        str3 = "+";
      }
      items4 = [str3, ];
      const amount = category_image.amount;
      if (amount >= 1000000) {
        const result = amount / 1000000;
        const _HermesInternal3 = HermesInternal;
        combined = "Rp " + result.toFixed(1) + "jt";
      } else if (amount >= 1000) {
        const result1 = amount / 1000;
        const _HermesInternal2 = HermesInternal;
        combined = "Rp " + result1.toFixed(0) + "k";
      } else {
        const _HermesInternal = HermesInternal;
        combined = "Rp " + amount;
      }
      items4[1] = combined;
      items1[2] = jsxs3(Text3, obj10);
      return <View key={arg0.id} style={closure_1_11.txItem}>{items1}</View>;
    });
  }
  items13[5] = jsx9Result;
  items2[1] = jsxs3(ScrollView, obj8);
  return <View style={closure_11.container}>{items2}</View>;
}
let react = react_mod;
let closure_9 = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
const StyleSheet = react_native.StyleSheet;
const obj2 = { container: { flex: 1, backgroundColor: module_1389.COLORS.background }, header: obj3, appTitle: obj4, settingsBtn: { width: 40, height: 40, alignItems: "center", justifyContent: "center" }, settingsIcon: { fontSize: 22 }, scroll: { padding: 20, paddingBottom: 40 }, balanceCard: obj5, monthLabel: obj6, balanceLabel: obj7, balanceAmount: obj8, inOutRow: { flexDirection: "row", marginTop: 12, alignItems: "center" }, inOutItem: { flex: 1, flexDirection: "row", alignItems: "center", gap: 8 }, inOutIcon: { fontSize: 20, color: module_1389.COLORS.statusIncome }, inOutLabel: obj9, inOutAmount: obj10, divider: { width: 1, height: 32, backgroundColor: "rgba(255,255,255,0.3)", marginHorizontal: 8 }, scoreCard: obj11, scoreRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }, scoreLabelText: obj12, scoreNumber: obj13, scoreMax: obj14, scoreBarWrap: { height: 14, backgroundColor: module_1389.COLORS.surfaceContainerHighest, borderRadius: module_1389.BORDER.radius.full, borderWidth: 2, borderColor: module_1389.COLORS.uiStroke, overflow: "hidden", marginBottom: 8, flexDirection: "row" }, scoreBar: { height: "100%" }, scoreDesc: obj15, sectionTitle: obj16, groupGrid: { gap: 12, marginBottom: 16 }, groupCard: obj17, groupCardHeader: { paddingHorizontal: 16, paddingVertical: 10, borderBottomWidth: module_1389.BORDER.width, borderBottomColor: module_1389.COLORS.uiStroke }, groupCardTitle: obj18, groupCardBody: { flexDirection: "row", padding: 12, gap: 12, alignItems: "center" }, groupImage: { width: 80, height: 80, borderRadius: 12, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke }, groupInfo: { flex: 1 }, groupSpent: obj19, groupAmount: obj20, groupBudget: obj21, progressBg: { height: 14, backgroundColor: module_1389.COLORS.surfaceContainerHighest, borderRadius: module_1389.BORDER.radius.full, borderWidth: 2, borderColor: module_1389.COLORS.uiStroke, overflow: "hidden", flexDirection: "row" }, progressFill: { height: "100%" }, txItem: obj22, txImage: { width: 48, height: 48, borderRadius: 24, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke }, txInfo: { flex: 1 }, txName: obj23, txNote: obj24, txAmount: obj25, emptyBox: { padding: 24, alignItems: "center", backgroundColor: module_1389.COLORS.surfaceContainerLow, borderRadius: module_1389.BORDER.radius.xl, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke }, emptyText: obj26 };
obj3 = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, paddingVertical: 12, backgroundColor: module_1389.COLORS.background, borderBottomWidth: module_1389.BORDER.width, borderBottomColor: module_1389.COLORS.uiStroke };
const create = StyleSheet.create;
const merged = Object.assign(module_1389.SHADOWS.sticker);
obj4 = { color: module_1389.COLORS.primary };
const merged1 = Object.assign(module_1389.FONTS.headlineLgMobile);
obj5 = { backgroundColor: module_1389.COLORS.primaryContainer, borderRadius: module_1389.BORDER.radius.xl, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke, padding: 20, marginBottom: 16 };
const merged2 = Object.assign(module_1389.SHADOWS.sticker);
obj6 = { color: module_1389.COLORS.onPrimaryContainer, opacity: 0.8, marginBottom: 4 };
const merged3 = Object.assign(module_1389.FONTS.labelSm);
obj7 = { color: module_1389.COLORS.onPrimaryContainer, opacity: 0.8 };
const merged4 = Object.assign(module_1389.FONTS.labelSm);
obj8 = { color: module_1389.COLORS.onPrimaryContainer, marginVertical: 4 };
const merged5 = Object.assign(module_1389.FONTS.headlineLgMobile);
obj9 = { color: module_1389.COLORS.onPrimaryContainer, opacity: 0.8 };
const merged6 = Object.assign(module_1389.FONTS.labelSm);
obj10 = { color: module_1389.COLORS.onPrimaryContainer };
const merged7 = Object.assign(module_1389.FONTS.labelLg);
obj11 = { backgroundColor: module_1389.COLORS.surfaceContainerLowest, borderRadius: module_1389.BORDER.radius.xl, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke, padding: 16, marginBottom: 16 };
const merged8 = Object.assign(module_1389.SHADOWS.stickerSm);
obj12 = { color: module_1389.COLORS.onSurface };
const merged9 = Object.assign(module_1389.FONTS.labelLg);
obj13 = { color: module_1389.COLORS.primary };
const merged10 = Object.assign(module_1389.FONTS.headlineMd);
obj14 = { color: module_1389.COLORS.outline };
const merged11 = Object.assign(module_1389.FONTS.labelSm);
obj15 = { color: module_1389.COLORS.onSurfaceVariant };
const merged12 = Object.assign(module_1389.FONTS.labelSm);
obj16 = { color: module_1389.COLORS.onSurface, marginTop: 8, marginBottom: 12 };
const merged13 = Object.assign(module_1389.FONTS.headlineSm);
obj17 = { backgroundColor: module_1389.COLORS.surface, borderRadius: module_1389.BORDER.radius.xl, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke, overflow: "hidden" };
const merged14 = Object.assign(module_1389.SHADOWS.sticker);
obj18 = { color: module_1389.COLORS.uiStroke };
const merged15 = Object.assign(module_1389.FONTS.headlineSm);
obj19 = { color: module_1389.COLORS.onSurfaceVariant };
const merged16 = Object.assign(module_1389.FONTS.labelSm);
obj20 = { color: module_1389.COLORS.uiStroke };
const merged17 = Object.assign(module_1389.FONTS.headlineMd);
obj21 = { color: module_1389.COLORS.outline, marginBottom: 8 };
const merged18 = Object.assign(module_1389.FONTS.labelSm);
obj22 = { flexDirection: "row", alignItems: "center", gap: 12, backgroundColor: module_1389.COLORS.surfaceContainerLowest, borderRadius: module_1389.BORDER.radius.xl, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke, padding: 12, marginBottom: 10 };
const merged19 = Object.assign(module_1389.SHADOWS.stickerSm);
obj23 = { color: module_1389.COLORS.onSurface };
const merged20 = Object.assign(module_1389.FONTS.labelLg);
obj24 = { color: module_1389.COLORS.outline };
const merged21 = Object.assign(module_1389.FONTS.labelSm);
obj25 = {};
const merged22 = Object.assign(module_1389.FONTS.labelLg);
obj26 = { color: module_1389.COLORS.outline, textAlign: "center" };
const merged23 = Object.assign(module_1389.FONTS.bodyMd);
let closure_11 = create(obj2);

export default HomeScreen;
