// Module ID: 1426
// Function ID: 1428
// Dependencies: [52, 5, 1078, 1120, 1391, 1389, 1403, 233]

// Module 1426
import react from "react" /* 52 */;
import react_native from "react-native" /* 5 */;
import module_1078 from "module_1078" /* 1078 */;
import module_1120 from "module_1120" /* 1120 */;
import module_1391 from "module_1391" /* 1391 */;
import module_1389 from "module_1389" /* 1389 */;
import module_1403 from "module_1403" /* 1403 */;
import Fragment from "Fragment" /* 233 */;

let c3, c6, closure_4;

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
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let size1;
function AddTransactionScreen() {
  let RN;
  let Text;
  let Text2;
  let Text4;
  let found;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items3;
  let items4;
  let items6;
  let items7;
  let items8;
  let items9;
  let jsx10;
  let jsx13;
  let jsx3;
  let jsx5;
  let jsx7Result;
  let jsxs5;
  let jsxs6;
  let jsxs8;
  let obj16;
  let obj36;
  let str;
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp3;
  let tmp5;
  let tmp7;
  let tmp9;
  let user;
  const top = module_1078.useSafeAreaInsets().top;
  const navigation = module_1120.useNavigation();
  const addTransaction = module_1391.useTransactionStore().addTransaction;
  let obj = addTransaction;
  const state = addTransaction.useState("expense");
  [tmp3, ] = state;
  const state1 = obj.useState(null);
  [tmp5, ] = state1;
  const state2 = obj.useState(null);
  [tmp7, ] = state2;
  const state3 = obj.useState("0");
  [tmp9, ] = state3;
  const state4 = obj.useState("");
  [tmp11, tmp12] = state4;
  const state5 = obj.useState(false);
  [tmp14, ] = state5;
  if (tmp5) {
    const CATEGORIES = module_1403.CATEGORIES;
    found = CATEGORIES.filter((group) => group.group === module_1120);
  } else {
    found = [];
  }
  function handleNumpad(arg0) {

  }
  let obj2 = Fragment;
  let items = [closure_9.header, ];
  let obj5 = { paddingTop: 12 + top };
  items[1] = obj5;
  const obj6 = { style: closure_9.appTitle, children: "Catat Transaksi" };
  let jsxs = Fragment.jsxs;
  let View = react_native.View;
  let jsx = Fragment.jsx;
  const View2 = react_native.View;
  let items1 = [<View2 style={items}>{null}</View2>, ];
  const items2 = [closure_9.toggleBtn, ];
  let jsxs5Result = tmp3 === "expense";
  let toggleExpense = jsxs5Result;
  const jsxs2 = Fragment.jsxs;
  const ScrollView = react_native.ScrollView;
  const jsxs3 = Fragment.jsxs;
  const View3 = react_native.View;
  let jsx2 = Fragment.jsx;
  let TouchableOpacity = react_native.TouchableOpacity;
  const obj7 = { showsVerticalScrollIndicator: false, contentContainerStyle: closure_9.scroll, keyboardShouldPersistTaps: "handled", children: items7 };
  const obj8 = { style: closure_9.toggle, children: items4 };
  if (jsxs5Result) {
    toggleExpense = tmp17.toggleExpense;
  }
  items2[1] = toggleExpense;
  const obj9 = {
    style: items2,
    onPress() {
      module_1078("expense");
      module_1403(null);
      module_1391(null);
    },
    children: jsx3(Text, { style: items3, children: "Pengeluaran" })
  };
  items3 = [tmp17.toggleText, ];
  let toggleTextActive = jsxs5Result;
  jsx3 = obj2.jsx;
  Text = tmp16.Text;
  if (jsxs5Result) {
    toggleTextActive = tmp17.toggleTextActive;
  }
  items3[1] = toggleTextActive;
  items4 = [jsx2(TouchableOpacity, obj9), ];
  const items5 = [tmp17.toggleBtn, ];
  let toggleTextActive2 = tmp3 === "income";
  let toggleIncome = toggleTextActive2;
  const jsx4 = obj2.jsx;
  const TouchableOpacity2 = tmp16.TouchableOpacity;
  if (toggleTextActive2) {
    toggleIncome = tmp17.toggleIncome;
  }
  items5[1] = toggleIncome;
  const obj10 = {
    style: items5,
    onPress() {
      module_1078("income");
      module_1403(null);
      module_1391(null);
    },
    children: jsx5(Text2, { style: items6, children: "Pemasukan" })
  };
  items6 = [tmp17.toggleText, ];
  jsx5 = obj2.jsx;
  Text2 = tmp16.Text;
  if (toggleTextActive2) {
    toggleTextActive2 = tmp17.toggleTextActive;
  }
  items6[1] = toggleTextActive2;
  items4[1] = jsx4(TouchableOpacity2, obj10);
  items7 = [jsxs3(View3, obj8), , , , ];
  const jsxs4 = obj2.jsxs;
  const View4 = tmp16.View;
  const jsx6 = obj2.jsx;
  const View5 = tmp16.View;
  const obj11 = { style: closure_9.stepHeader, children: items8 };
  const obj12 = { style: closure_9.stepBadge, children: null };
  items8 = [jsx6(View5, obj12), ];
  items8[1] = <tmp16.Text style={closure_9.stepLabel}>{"PILIH KATEGORI"}</tmp16.Text>;
  items7[1] = jsxs4(View4, obj11);
  const jsx7 = obj2.jsx;
  const View6 = tmp16.View;
  const obj15 = { style: null, children: null };
  if (jsxs5Result) {
    obj15.style = closure_9.groupGrid;
    const CATEGORY_GROUPS = module_1403.CATEGORY_GROUPS;
    obj15.children = CATEGORY_GROUPS.map((children) => {
      let jsxResult = closure_3 === children.id;
      const items = [closure_1_9.groupCard, ];
      let groupCardSelected = jsxResult;
      const jsxs = Fragment.jsxs;
      const TouchableOpacity = RN.TouchableOpacity;
      const tmp2 = RN;
      if (jsxResult) {
        groupCardSelected = tmp3.groupCardSelected;
      }
      items[1] = groupCardSelected;
      const items1 = [, , ];
      items1[0] = <tmp2.Image source={module_1403.getCategoryImage(arg0.image)} style={closure_1_9.groupImage} resizeMode="contain" />;
      items1[1] = <tmp2.Text style={closure_1_9.groupName}>{arg0.name}</tmp2.Text>;
      if (jsxResult) {
        const jsx = obj.jsx;
        const View = tmp2.View;
        jsxResult = <View style={closure_1_9.checkBadge}>{null}</View>;
      }
      items1[2] = jsxResult;
      return <TouchableOpacity key={arg0.id} style={items} onPress={function onPress() {
        module_1391(children.id);
        module_1403(null);
      }} activeOpacity={0.8}>{items1}</TouchableOpacity>;
    });
    jsx7Result = jsx7(View6, obj15);
    obj16 = module_1403;
  } else {
    obj15.style = closure_9.incomeGrid;
    obj16 = module_1403;
    const INCOME_CATEGORIES = module_1403.INCOME_CATEGORIES;
    obj15.children = INCOME_CATEGORIES.map((children) => {
      let closure_0 = children;
      let id;
      if (user != null) {
        id = user.id;
      }
      let incomePillActive = id === children.id;
      const items = [closure_1_9.incomePill, ];
      let obj = Fragment;
      const jsx = Fragment.jsx;
      const TouchableOpacity = RN.TouchableOpacity;
      if (incomePillActive) {
        incomePillActive = tmp3.incomePillActive;
      }
      items[1] = incomePillActive;
      return <TouchableOpacity key={arg0.id} style={items} onPress={function onPress() {
        const obj = { group: "income" };
        const merged = Object.assign(children);
        return module_1403(obj);
      }}>{null}</TouchableOpacity>;
    });
    jsx7Result = jsx7(View6, obj15);
  }
  items7[2] = jsx7Result;
  if (jsxs5Result) {
    jsxs5Result = tmp5;
  }
  if (jsxs5Result) {
    const obj17 = { children: items10 };
    const obj18 = { style: closure_9.stepHeader, children: items9 };
    const obj19 = { style: closure_9.stepBadge, children: null };
    ({ jsxs: jsxs5, Fragment, jsxs: jsxs6 } = obj2);
    const View7 = tmp16.View;
    const jsx8 = obj2.jsx;
    const View8 = tmp16.View;
    items9 = [jsx8(View8, obj19), ];
    items9[1] = <tmp16.Text style={closure_9.stepLabel}>{"PILIH RINCIAN"}</tmp16.Text>;
    items10 = [jsxs6(View7, obj18), ];
    const jsx9 = obj2.jsx;
    const ScrollView2 = tmp16.ScrollView;
    const obj22 = {
      horizontal: true,
      showsHorizontalScrollIndicator: false,
      style: closure_9.subScroll,
      keyboardShouldPersistTaps: "handled",
      nestedScrollEnabled: true,
      children: found.map((children) => {
          let closure_0 = children;
          let id;
          if (user != null) {
            id = user.id;
          }
          let subPillActive = id === children.id;
          const items = [closure_1_9.subPill, ];
          const jsxs = Fragment.jsxs;
          const TouchableOpacity = RN.TouchableOpacity;
          if (subPillActive) {
            subPillActive = tmp3.subPillActive;
          }
          items[1] = subPillActive;
          const items1 = [, ];
          items1[0] = <RN.Image source={module_1403.getCategoryImage(arg0.image)} style={closure_1_9.subPillImage} resizeMode="cover" />;
          items1[1] = <RN.Text style={closure_1_9.subPillText}>{arg0.name}</RN.Text>;
          return <TouchableOpacity key={arg0.id} style={items} onPress={function onPress() {
            return module_1403(children);
          }}>{items1}</TouchableOpacity>;
        })
    };
    items10[1] = jsx9(ScrollView2, obj22);
    jsxs5Result = jsxs5(Fragment, obj17);
  }
  items7[3] = jsxs5Result;
  let jsxs8Result = tmp7;
  const jsxs7 = obj2.jsxs;
  const View9 = tmp16.View;
  const obj23 = { style: closure_9.inputCard, children: items13 };
  if (tmp7) {
    let jsx10Result;
    const obj24 = { style: closure_9.selectedCatRow, children: items12 };
    ({ jsx: jsx10, jsxs: jsxs8 } = obj2);
    const View10 = tmp16.View;
    if (tmp7.image) {
      const Image = tmp16.Image;
      const obj25 = { source: obj16.getCategoryImage(tmp7.image), style: closure_9.selectedCatImg, resizeMode: "cover" };
      jsx10Result = jsx10(Image, obj25);
    } else {
      const obj26 = { style: items11, children: null };
      items11 = [tmp17.selectedCatImg, ];
      const obj27 = { backgroundColor: module_1389.COLORS.statusIncome, justifyContent: "center", alignItems: "center" };
      items11[1] = obj27;
      const View11 = tmp16.View;
      jsx10Result = jsx10(View11, obj26);
    }
    items12 = [jsx10Result, ];
    items12[1] = <tmp16.Text style={closure_9.selectedCatName}>{tmp7.name}</tmp16.Text>;
    jsxs8Result = jsxs8(View10, obj24);
  }
  items13 = [jsxs8Result, , , , , ];
  items13[1] = <tmp16.Text style={closure_9.nominalLabel}>{"NOMINAL"}</tmp16.Text>;
  const jsxs9 = obj2.jsxs;
  const Text3 = tmp16.Text;
  const obj31 = { style: closure_9.nominalDisplay, children: items14 };
  let parsed = parseInt(tmp9, 10);
  items14 = ["Rp ", parsed.toLocaleString("id-ID")];
  items13[2] = jsxs9(Text3, obj31);
  items13[3] = <tmp16.TextInput style={closure_9.noteInput} placeholder="Catatan tambahan (opsional)..." value={tmp11} onChangeText={tmp12} placeholderTextColor={module_1389.COLORS.outline} returnKeyType="done" />;
  const obj33 = {
    style: closure_9.numpad,
    children: items15.map((children) => {
      let closure_0 = children;
      const items = [closure_1_9.numKey, ];
      let tmp4 = children === "\u232B";
      let numKeyDelete = tmp4;
      const tmp = Fragment;
      const jsx = Fragment.jsx;
      const TouchableOpacity = RN.TouchableOpacity;
      const tmp2 = RN;
      if (tmp4) {
        numKeyDelete = tmp3.numKeyDelete;
      }
      items[1] = numKeyDelete;
      const items1 = [tmp3.numKeyText, ];
      const jsx2 = tmp.jsx;
      const Text = tmp2.Text;
      if (tmp4) {
        tmp4 = { color: user.COLORS.error };
        const obj2 = { color: user.COLORS.error };
      }
      const obj3 = { style: items1, children };
      items1[1] = tmp4;
      return <TouchableOpacity key={arg0} style={items} onPress={function onPress() {
        if (typeof handleNumpad === "function") {
          let closure_0 = tmp;
          let str = "\u232B";
          if (closure_0 === "\u232B") {
            AddTransactionScreen((arr) => {
              let str = "0";
              if (arr.length > 1) {
                str = arr.slice(0, -1);
              }
              return str;
            });
          } else if (closure_0 === "000") {
            AddTransactionScreen((arg0) => {
              let str = "0";
              if (arg0 !== "0") {
                str = `${arg0}000`;
              }
              return str;
            });
          } else {
            AddTransactionScreen((arg0) => {
              let sum;
              if (arg0 === "0") {
                sum = closure_0;
              } else {
                sum = arg0 + closure_0;
              }
              return sum;
            });
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }} activeOpacity={0.7}>{jsx2(Text, obj3)}</TouchableOpacity>;
    })
  };
  items15 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "000", "0", "\u232B"];
  const jsx11 = obj2.jsx;
  const View12 = tmp16.View;
  items13[4] = jsx11(View12, obj33);
  const items16 = [tmp17.saveBtn, ];
  let obj34 = tmp14;
  const jsx12 = obj2.jsx;
  const TouchableOpacity3 = tmp16.TouchableOpacity;
  if (tmp14) {
    obj34 = { opacity: 0.6 };
  }
  items16[1] = obj34;
  const obj35 = {
    style: items16,
    onPress: async function handleSave(arg0, value) {
      let category_image;
      let first;
      let group;
      let income;
      if (c6 === 2) {
        c6 = 3;
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
        let c5;
        try {
          c6 = 2;
          if (0 === c3) {
            let closure_2 = tmp;
            const _parseInt = parseInt;
            const parsed = parseInt(React, 10);
            if (parsed <= 0) {
              const Alert3 = category_image.Alert;
              Alert3.alert("Nominal harus lebih dari 0");
              c6 = 3;
              return { value: "writable", done: "BounceInDown" };
            } else if (user) {
              React5(true);
              c5 = 1;
              const _Date = Date;
              const self = this;
              const self2 = this;
              const date = new Date();
              const obj4 = { type, amount: parsed, category_id: null, category_name: null, category_group: income, category_image, note: closure_2_9.trim(), date: first };
              ({ id: obj3.category_id, name: obj3.category_name, group } = user);
              income = group;
              const str = date.toISOString();
              first = str.split("T")[0];
              const tmp35 = addTransaction;
              if (group == null) {
                income = "income";
              }
              const image = tmp50.image;
              category_image = image;
              if (image == null) {
                category_image = "";
              }
              c3 = 2;
              c6 = 1;
              const obj5 = { value: tmp35(obj4), done: false };
              return obj5;
            } else {
              const Alert2 = category_image.Alert;
              Alert2.alert("Pilih kategori terlebih dahulu");
              c6 = 3;
              return { value: "writable", done: "BounceInDown" };
            }
          } else if (1 === tmp4) {
            c5 = 0;
            closure_130_11(false);
            throw closure_4;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            closure_130_11(false);
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_130_4(null);
            closure_130_6(null);
            closure_130_8("0");
            closure_130_10("");
            const Alert = category_image.Alert;
            Alert.alert("\u2705 Tersimpan!", "Transaksi berhasil dicatat.");
            c5 = 0;
            closure_130_11(false);
            c6 = 3;
            return { value: "writable", done: "BounceInDown" };
          }
        } catch (tmp42) {
          closure_4 = tmp42;
          if (0 === c5) {
            c6 = 3;
            throw tmp42;
          } else {
            c3 = 1;
          }
        }
      }
    },
    disabled: tmp14,
    activeOpacity: 0.8,
    children: jsx13(Text4, obj36)
  };
  obj36 = { style: closure_9.saveBtnText, children: str };
  str = "\u2713 Simpan Transaksi";
  jsx13 = obj2.jsx;
  Text4 = tmp16.Text;
  if (tmp14) {
    str = "Menyimpan...";
  }
  items13[5] = jsx12(TouchableOpacity3, obj35);
  items7[4] = jsxs7(View9, obj23);
  items1[1] = jsxs2(ScrollView, obj7);
  return <View style={closure_9.container}>{items1}</View>;
}
const StyleSheet = react_native.StyleSheet;
let obj2 = { container: { flex: 1, backgroundColor: module_1389.COLORS.background }, header: obj3, appTitle: obj4, scroll: { padding: 20, paddingBottom: 40 }, toggle: obj5, toggleBtn: { flex: 1, paddingVertical: 10, borderRadius: module_1389.BORDER.radius.lg, alignItems: "center" }, toggleExpense: { backgroundColor: module_1389.COLORS.error, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke }, toggleIncome: { backgroundColor: module_1389.COLORS.statusIncome, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke }, toggleText: obj6, toggleTextActive: { color: "#fff" }, stepHeader: { flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 12 }, stepBadge: { width: 24, height: 24, borderRadius: 12, backgroundColor: module_1389.COLORS.primary, borderWidth: 2, borderColor: module_1389.COLORS.uiStroke, alignItems: "center", justifyContent: "center" }, stepNum: obj7, stepLabel: obj8, groupGrid: { flexDirection: "row", flexWrap: "wrap", gap: 12, marginBottom: 16 }, groupCard: size, groupCardSelected: { borderColor: module_1389.COLORS.primary, borderWidth: 3 }, groupImage: { width: "80%", height: 80 }, groupName: obj9, checkBadge: { position: "absolute", top: 8, right: 8, width: 22, height: 22, borderRadius: 11, backgroundColor: module_1389.COLORS.primary, borderWidth: 2, borderColor: module_1389.COLORS.uiStroke, alignItems: "center", justifyContent: "center" }, checkText: { color: "#fff", fontSize: 12, fontWeight: "700" }, incomeGrid: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 16 }, incomePill: obj10, incomePillActive: { backgroundColor: module_1389.COLORS.statusIncome }, incomePillText: obj11, subScroll: { marginHorizontal: -20, paddingHorizontal: 20, marginBottom: 16 }, subPill: obj12, subPillActive: { backgroundColor: module_1389.COLORS.groupBoarding, borderColor: module_1389.COLORS.primary }, subPillImage: { width: 28, height: 28, borderRadius: 14 }, subPillText: obj13, inputCard: obj14, selectedCatRow: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 12 }, selectedCatImg: { width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: module_1389.COLORS.uiStroke }, selectedCatName: obj15, nominalLabel: obj16, nominalDisplay: obj17, noteInput: obj18, numpad: { flexDirection: "row", flexWrap: "wrap", gap: 10, marginBottom: 16 }, numKey: size1, numKeyDelete: { backgroundColor: module_1389.COLORS.errorContainer }, numKeyText: obj19, saveBtn: obj20, saveBtnText: obj21 };
obj3 = { paddingHorizontal: 20, paddingVertical: 12, backgroundColor: module_1389.COLORS.background, borderBottomWidth: module_1389.BORDER.width, borderBottomColor: module_1389.COLORS.uiStroke };
const create = StyleSheet.create;
let merged = Object.assign(module_1389.SHADOWS.sticker);
obj4 = { color: module_1389.COLORS.primary, textAlign: "center" };
const merged1 = Object.assign(module_1389.FONTS.headlineLgMobile);
obj5 = { flexDirection: "row", backgroundColor: module_1389.COLORS.surfaceContainerHigh, borderRadius: module_1389.BORDER.radius.xl, padding: 6, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke, marginBottom: 16 };
const merged2 = Object.assign(module_1389.SHADOWS.stickerSm);
obj6 = { color: module_1389.COLORS.onSurfaceVariant };
const merged3 = Object.assign(module_1389.FONTS.labelLg);
obj7 = { color: "#fff" };
const merged4 = Object.assign(module_1389.FONTS.labelLg);
obj8 = { color: module_1389.COLORS.uiStroke, letterSpacing: 1 };
const merged5 = Object.assign(module_1389.FONTS.labelLg);
size = { width: "47%", height: 130, backgroundColor: module_1389.COLORS.surfaceContainerLowest, borderRadius: module_1389.BORDER.radius.xl, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke, alignItems: "center", justifyContent: "center", padding: 8, position: "relative" };
const merged6 = Object.assign(module_1389.SHADOWS.sticker);
obj9 = { color: module_1389.COLORS.uiStroke, marginTop: 4 };
const merged7 = Object.assign(module_1389.FONTS.labelSm);
obj10 = { paddingHorizontal: 16, paddingVertical: 10, borderRadius: module_1389.BORDER.radius.full, backgroundColor: module_1389.COLORS.surfaceContainerHighest, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke };
const merged8 = Object.assign(module_1389.SHADOWS.stickerSm);
obj11 = { color: module_1389.COLORS.uiStroke };
const merged9 = Object.assign(module_1389.FONTS.labelLg);
obj12 = { flexDirection: "row", alignItems: "center", gap: 8, paddingHorizontal: 14, paddingVertical: 10, marginRight: 8, borderRadius: module_1389.BORDER.radius.full, backgroundColor: module_1389.COLORS.surfaceContainerHighest, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke };
const merged10 = Object.assign(module_1389.SHADOWS.stickerSm);
obj13 = { color: module_1389.COLORS.uiStroke };
const merged11 = Object.assign(module_1389.FONTS.labelLg);
obj14 = { backgroundColor: module_1389.COLORS.surfaceContainerLow, borderRadius: 24, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke, padding: 20 };
const merged12 = Object.assign(module_1389.SHADOWS.sticker);
obj15 = { color: module_1389.COLORS.uiStroke };
const merged13 = Object.assign(module_1389.FONTS.labelLg);
obj16 = { color: module_1389.COLORS.onSurfaceVariant, textAlign: "center", letterSpacing: 2, marginBottom: 4 };
const merged14 = Object.assign(module_1389.FONTS.labelSm);
obj17 = { color: module_1389.COLORS.primary, textAlign: "center", marginBottom: 12 };
const merged15 = Object.assign(module_1389.FONTS.headlineLgMobile);
obj18 = { borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke, borderRadius: module_1389.BORDER.radius.xl, paddingHorizontal: 16, paddingVertical: 12, color: module_1389.COLORS.onSurface, backgroundColor: module_1389.COLORS.surface, marginBottom: 12 };
const merged16 = Object.assign(module_1389.FONTS.bodyMd);
size1 = { width: "30%", height: 52, backgroundColor: module_1389.COLORS.surface, borderRadius: module_1389.BORDER.radius.xl, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke, alignItems: "center", justifyContent: "center" };
const merged17 = Object.assign(module_1389.SHADOWS.stickerSm);
obj19 = { color: module_1389.COLORS.uiStroke };
const merged18 = Object.assign(module_1389.FONTS.headlineSm);
obj20 = { backgroundColor: module_1389.COLORS.primary, borderRadius: module_1389.BORDER.radius.xl, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke, paddingVertical: 16, alignItems: "center" };
const merged19 = Object.assign(module_1389.SHADOWS.sticker);
obj21 = { color: "#fff" };
const merged20 = Object.assign(module_1389.FONTS.headlineSm);
let closure_9 = create(obj2);

export default AddTransactionScreen;
