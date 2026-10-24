// Module ID: 1428
// Function ID: 1430
// Dependencies: [52, 5, 1078, 1391, 1389, 1403, 233]

// Module 1428
import react from "react" /* 52 */;
import react_native from "react-native" /* 5 */;
import module_1078 from "module_1078" /* 1078 */;
import module_1391 from "module_1391" /* 1391 */;
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
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
function ReportScreen() {
  let combined;
  let combined1;
  let currentMonth;
  let currentYear;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let totalIncome;
  const top = module_1078.useSafeAreaInsets().top;
  const transactionStore = module_1391.useTransactionStore();
  const expenseByGroup = transactionStore.expenseByGroup;
  const totalExpense = transactionStore.totalExpense;
  ({ totalIncome, loadTransactions: module_1078 } = transactionStore);
  ({ currentMonth, currentYear } = transactionStore);
  const effect = expenseByGroup.useEffect(() => {
    module_1078();
  }, []);
  const entries = Object.entries(expenseByGroup);
  const sorted = entries.sort((arg0, arg1) => arg1[1] - arg0[1]);
  let str = "Mulai catat pengeluaranmu untuk mendapat tips hemat! \u{1F4A1}";
  if (sorted.length !== 0) {
    str = "Mulai catat pengeluaranmu untuk mendapat tips hemat! \u{1F4A1}";
    if (sorted[0][1] !== 0) {
      const CATEGORY_GROUPS = module_1403.CATEGORY_GROUPS;
      const found = CATEGORY_GROUPS.find((id) => id.id === sorted[0][0]);
      let name;
      if (found != null) {
        name = found.name;
      }
      if (name == null) {
        name = sorted[0][0];
      }
      let _HermesInternal = HermesInternal;
      let str2 = "\". Coba evaluasi dan kurangi pengeluaran di sana! \u{1F4A1}";
      str = "Pengeluaran terbesar bulan ini di kategori \"" + name + "\". Coba evaluasi dan kurangi pengeluaran di sana! \u{1F4A1}";
    }
  }
  items = [closure_10.header, ];
  let obj4 = { paddingTop: 12 + top };
  items[1] = obj4;
  let jsxs = Fragment.jsxs;
  let View = totalExpense.View;
  let jsx = Fragment.jsx;
  let View2 = totalExpense.View;
  let items1 = [<View2 style={items}>{null}</View2>, ];
  let obj6 = { showsVerticalScrollIndicator: false, contentContainerStyle: closure_10.scroll, children: items3 };
  let items2 = [closure_7[currentMonth - 1], " ", currentYear];
  let jsxs2 = Fragment.jsxs;
  const ScrollView = totalExpense.ScrollView;
  items3 = [<totalExpense.Text style={closure_10.monthTitle}>{items2}</totalExpense.Text>, , , , ];
  const obj9 = { style: items4, children: items5 };
  items4 = [closure_10.summaryCard, ];
  let obj10 = { backgroundColor: `${module_1389.COLORS.statusIncome}22` };
  const obj8 = { style: closure_10.summaryRow, children: items7 };
  items4[1] = obj10;
  let jsxs3 = Fragment.jsxs;
  let View3 = totalExpense.View;
  let jsxs4 = Fragment.jsxs;
  const View4 = totalExpense.View;
  items5 = [<totalExpense.Text style={closure_10.summaryLabel}>{"Total Masuk"}</totalExpense.Text>, ];
  const obj12 = { style: items6, children: combined };
  items6 = [closure_10.summaryAmount, { color: module_1389.COLORS.statusIncome }];
  let jsx2 = Fragment.jsx;
  let Text = totalExpense.Text;
  if (totalIncome >= 1000000) {
    let result = totalIncome / 1000000;
    const _HermesInternal4 = HermesInternal;
    combined = "Rp " + result.toFixed(1) + "jt";
  } else {
    let num = 1000;
    if (totalIncome >= 1000) {
      let result1 = totalIncome / 1000;
      let _HermesInternal3 = HermesInternal;
      combined = "Rp " + result1.toFixed(0) + "k";
    } else {
      let _HermesInternal2 = HermesInternal;
      let str4 = "Rp ";
      combined = "Rp " + totalIncome;
    }
  }
  items5[1] = jsx2(Text, obj12);
  items7 = [jsxs4(View4, obj9), ];
  const obj13 = { style: items8, children: items9 };
  items8 = [closure_10.summaryCard, { backgroundColor: `${module_1389.COLORS.error}22` }];
  const jsxs5 = obj2.jsxs;
  const View5 = tmp7.View;
  items9 = [, ];
  items9[0] = <totalExpense.Text style={closure_10.summaryLabel}>{"Total Keluar"}</totalExpense.Text>;
  const obj15 = { style: items10, children: combined1 };
  items10 = [closure_10.summaryAmount, { color: module_1389.COLORS.error }];
  const jsx3 = obj2.jsx;
  let Text2 = tmp7.Text;
  if (totalExpense >= 1000000) {
    let result2 = totalExpense / 1000000;
    const _HermesInternal7 = HermesInternal;
    combined1 = "Rp " + result2.toFixed(1) + "jt";
  } else {
    let num2 = 1000;
    if (totalExpense >= 1000) {
      const result3 = totalExpense / 1000;
      const _HermesInternal6 = HermesInternal;
      combined1 = "Rp " + result3.toFixed(0) + "k";
    } else {
      const _HermesInternal5 = HermesInternal;
      combined1 = "Rp " + totalExpense;
    }
  }
  items9[1] = jsx3(Text2, obj15);
  items7[1] = jsxs5(View5, obj13);
  items3[1] = jsxs3(View3, obj8);
  const jsxs6 = obj2.jsxs;
  const View6 = tmp7.View;
  const obj16 = { style: closure_10.card, children: items11 };
  items11 = [, ];
  items11[0] = <totalExpense.Text style={closure_10.cardTitle}>{"Pengeluaran per Kategori"}</totalExpense.Text>;
  const CATEGORY_GROUPS1 = module_1403.CATEGORY_GROUPS;
  items11[1] = CATEGORY_GROUPS1.map((backgroundColor) => {
    let combined;
    let items1;
    let items2;
    let items3;
    let items6;
    let num = expenseByGroup[backgroundColor.id];
    if (num == null) {
      num = 0;
    }
    let num2 = 0;
    if (totalExpense > 0) {
      num2 = num / totalExpense;
    }
    const obj3 = { style: items, children: items1 };
    items = [closure_10.legendBox, { backgroundColor: backgroundColor.bgColor }];
    let str = "\u{1F3EB}";
    const jsxs = Fragment.jsxs;
    const View = react_native.View;
    const jsxs2 = Fragment.jsxs;
    const View2 = react_native.View;
    const jsx = Fragment.jsx;
    const Text = react_native.Text;
    if (backgroundColor.id !== "campus") {
      let str2 = "\u{1F3E0}";
      if (backgroundColor.id !== "kos") {
        let str4 = "\u{1F381}";
        if (backgroundColor.id === "food") {
          str4 = "\u{1F35C}";
        }
        str2 = str4;
      }
      str = str2;
    }
    items1 = [<Text style={closure_10.legendEmoji}>{str}</Text>, , ];
    items1[1] = <react-native.Text style={closure_10.legendName}>{arg0.name}</react-native.Text>;
    const obj6 = { style: items2, children: items3 };
    items2 = [closure_10.legendPct, { color: backgroundColor.color }];
    const result = num2 * 100;
    const jsxs3 = obj.jsxs;
    const Text2 = tmp.Text;
    items3 = [result.toFixed(0), "%"];
    items1[2] = jsxs3(Text2, obj6);
    const items4 = [jsxs2(View2, obj3), , ];
    const items5 = [closure_10.barFill, { flex: num2, backgroundColor: backgroundColor.color }];
    const jsxs4 = obj.jsxs;
    const View3 = tmp.View;
    const obj7 = { style: closure_10.barBg, children: items6 };
    items6 = [<react-native.View style={items5} />, ];
    const obj10 = { flex: 1 - num2 };
    items6[1] = <react-native.View style={obj10} />;
    items4[1] = jsxs4(View3, obj7);
    const jsx2 = obj.jsx;
    const Text3 = tmp.Text;
    const obj11 = { style: closure_10.barAmount, children: combined };
    if (num >= 1000000) {
      const result1 = num / 1000000;
      const _HermesInternal3 = HermesInternal;
      combined = "Rp " + result1.toFixed(1) + "jt";
    } else if (num >= 1000) {
      const result2 = num / 1000;
      const _HermesInternal2 = HermesInternal;
      combined = "Rp " + result2.toFixed(0) + "k";
    } else {
      const _HermesInternal = HermesInternal;
      combined = "Rp " + num;
    }
    items4[2] = jsx2(Text3, obj11);
    return <View key={arg0.id} style={closure_10.pieRow}>{items4}</View>;
  });
  items3[2] = jsxs6(View6, obj16);
  const jsxs7 = obj2.jsxs;
  const View7 = tmp7.View;
  const obj18 = { style: closure_10.card, children: items12 };
  items12 = [, ];
  items12[0] = <totalExpense.Text style={closure_10.cardTitle}>{"Tren Mingguan"}</totalExpense.Text>;
  items12[1] = <totalExpense.View style={closure_10.weekRow}>{items.map((backgroundColor) => {
    const jsxs = React.jsxs;
    const View = totalExpense.View;
    items = [, , , ];
    items[0] = <totalExpense.Text style={closure_1_10.weekEmoji}>{"\u{1F4B0}"}</totalExpense.Text>;
    const items1 = [closure_1_10.weekBar, ];
    const obj4 = { height: backgroundColor.frac * 80, backgroundColor: backgroundColor.color };
    items1[1] = obj4;
    items[1] = <totalExpense.View style={items1} />;
    const items2 = [closure_1_10.weekLabel, { backgroundColor: backgroundColor.color }];
    const jsx = React.jsx;
    const View2 = totalExpense.View;
    items[2] = <View2 style={items2}>{null}</View2>;
    items[3] = <totalExpense.Text style={closure_1_10.weekName}>{arg0.label}</totalExpense.Text>;
    return <View key={arg0.label} style={closure_1_10.weekItem}>{items}</View>;
  })}</totalExpense.View>;
  items3[3] = jsxs7(View7, obj18);
  const jsxs8 = obj2.jsxs;
  const View8 = tmp7.View;
  const obj21 = { style: closure_10.tipsCard, children: items13 };
  items13 = [, ];
  items13[0] = <totalExpense.Image source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDX73WPdAn0rcHVyZE4OINauDqqtXyASP5ekP00gVuUhcyYDsOb5I1m2crNm8CcQtq4x0M8A8q5QhVUFYQ4iqEiDvxKQluMp6xWtn5RHGxjRwvp10Lzo9YEWcyRL43UJDEXK4BOmG1z4Z-20he8AC9l9dNLM2n60px9c8_FtHG5Zefjx90VwIp1gPqdyrhe26MdInijdn4nKwfvAkl8LQWMdlChl4bV3pePYPgDDAdL-MXtXaPdLh7V" }} style={closure_10.tipsImage} resizeMode="contain" />;
  const jsxs9 = obj2.jsxs;
  const View9 = tmp7.View;
  const obj23 = { style: closure_10.tipsText, children: items14 };
  items14 = [, ];
  items14[0] = <totalExpense.Text style={closure_10.tipsTitle}>{"Tips Hemat! \u{1F4A1}"}</totalExpense.Text>;
  items14[1] = <totalExpense.Text style={closure_10.tipsBody}>{str}</totalExpense.Text>;
  items13[1] = jsxs9(View9, obj23);
  items3[4] = jsxs8(View8, obj21);
  items1[1] = jsxs2(ScrollView, obj6);
  return <View style={closure_10.container}>{items1}</View>;
}
let closure_7 = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
const obj2 = { label: "M1", status: "Normal", frac: 0.6, color: module_1389.COLORS.groupCampus };
let items = [obj2, { label: "M2", status: "Boros", frac: 0.95, color: module_1389.COLORS.error }, { label: "M3", status: "Hemat", frac: 0.4, color: module_1389.COLORS.statusIncome }, { label: "M4", status: "Super!", frac: 0.2, color: module_1389.COLORS.groupBoarding }];
const StyleSheet = react_native.StyleSheet;
let obj3 = { container: { flex: 1, backgroundColor: module_1389.COLORS.background }, header: obj4, appTitle: obj5, scroll: { padding: 20, paddingBottom: 40 }, monthTitle: obj6, summaryRow: { flexDirection: "row", gap: 12, marginBottom: 16 }, summaryCard: obj7, summaryLabel: obj8, summaryAmount: obj9, card: obj10, cardTitle: obj11, pieRow: { flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 8 }, legendBox: obj12, legendEmoji: { fontSize: 20 }, legendName: obj13, legendPct: obj14, barBg: { flex: 1, height: 14, backgroundColor: module_1389.COLORS.surfaceContainerHighest, borderRadius: module_1389.BORDER.radius.full, borderWidth: 2, borderColor: module_1389.COLORS.uiStroke, overflow: "hidden", flexDirection: "row" }, barFill: { height: "100%" }, barAmount: obj15, weekRow: { flexDirection: "row", justifyContent: "space-around", alignItems: "flex-end", height: 160 }, weekItem: { alignItems: "center", gap: 4 }, weekEmoji: { fontSize: 22 }, weekBar: { width: 28, borderRadius: 6, borderWidth: 2, borderColor: module_1389.COLORS.uiStroke }, weekLabel: { paddingHorizontal: 6, paddingVertical: 2, borderRadius: module_1389.BORDER.radius.full, borderWidth: 1, borderColor: module_1389.COLORS.uiStroke }, weekLabelText: obj16, weekName: obj17, tipsCard: obj18, tipsImage: { width: 72, height: 72, borderRadius: 12, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke }, tipsText: { flex: 1 }, tipsTitle: obj19, tipsBody: obj20 };
obj4 = { paddingHorizontal: 20, paddingVertical: 12, backgroundColor: module_1389.COLORS.background, borderBottomWidth: module_1389.BORDER.width, borderBottomColor: module_1389.COLORS.uiStroke };
const create = StyleSheet.create;
const merged = Object.assign(module_1389.SHADOWS.sticker);
obj5 = { color: module_1389.COLORS.primary, textAlign: "center" };
const merged1 = Object.assign(module_1389.FONTS.headlineLgMobile);
obj6 = { color: module_1389.COLORS.uiStroke, textAlign: "center", marginBottom: 16 };
const merged2 = Object.assign(module_1389.FONTS.headlineMd);
obj7 = { flex: 1, padding: 14, borderRadius: module_1389.BORDER.radius.xl, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke };
const merged3 = Object.assign(module_1389.SHADOWS.stickerSm);
obj8 = { color: module_1389.COLORS.onSurfaceVariant };
const merged4 = Object.assign(module_1389.FONTS.labelSm);
obj9 = { marginTop: 4 };
const merged5 = Object.assign(module_1389.FONTS.headlineSm);
obj10 = { backgroundColor: module_1389.COLORS.surfaceContainerLowest, borderRadius: module_1389.BORDER.radius.xl, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke, padding: 16, marginBottom: 16 };
const merged6 = Object.assign(module_1389.SHADOWS.sticker);
obj11 = { color: module_1389.COLORS.uiStroke, marginBottom: 12 };
const merged7 = Object.assign(module_1389.FONTS.headlineSm);
obj12 = { width: 72, alignItems: "center", padding: 6, borderRadius: module_1389.BORDER.radius.lg, borderWidth: 2, borderColor: module_1389.COLORS.uiStroke, gap: 2 };
const merged8 = Object.assign(module_1389.SHADOWS.stickerSm);
obj13 = { color: module_1389.COLORS.uiStroke };
const merged9 = Object.assign(module_1389.FONTS.labelSm);
obj14 = {};
const merged10 = Object.assign(module_1389.FONTS.headlineSm);
obj15 = { color: module_1389.COLORS.onSurface, width: 52, textAlign: "right" };
const merged11 = Object.assign(module_1389.FONTS.labelSm);
obj16 = { color: "#fff" };
const merged12 = Object.assign(module_1389.FONTS.labelSm);
obj17 = { color: module_1389.COLORS.onSurface };
const merged13 = Object.assign(module_1389.FONTS.labelSm);
obj18 = { backgroundColor: module_1389.COLORS.uiPaper, borderRadius: module_1389.BORDER.radius.xl, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke, padding: 16, flexDirection: "row", gap: 12, alignItems: "flex-start" };
const merged14 = Object.assign(module_1389.SHADOWS.sticker);
obj19 = { color: module_1389.COLORS.uiStroke, marginBottom: 4 };
const merged15 = Object.assign(module_1389.FONTS.headlineSm);
obj20 = { color: module_1389.COLORS.uiStroke };
const merged16 = Object.assign(module_1389.FONTS.bodyMd);
let closure_10 = create(obj3);

export default ReportScreen;
