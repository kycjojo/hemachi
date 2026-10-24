// Module ID: 1425
// Function ID: 1427
// Dependencies: [52, 5, 1078, 1391, 1389, 1403, 233]

// Module 1425
import react from "react" /* 52 */;
import react_native from "react-native" /* 5 */;
import module_1078 from "module_1078" /* 1078 */;
import module_1391 from "module_1391" /* 1391 */;
import module_1389 from "module_1389" /* 1389 */;
import module_1403 from "module_1403" /* 1403 */;
import Fragment from "Fragment" /* 233 */;

let Alert;

let obj10;
let obj11;
let obj12;
let obj13;
let obj14;
let obj15;
let obj16;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
function HistoryScreen() {
  let RN;
  let items2;
  let items3;
  let items4;
  let jsxs3Result;
  let tmp3;
  let transactions;
  const top = module_1078.useSafeAreaInsets().top;
  const transactionStore = module_1391.useTransactionStore();
  ({ transactions, loadTransactions: react, removeTransaction: react_native } = transactionStore);
  let obj = react;
  const state = react.useState("all");
  [tmp3, ] = state;
  const effect = obj.useEffect(() => {
    react();
  }, []);
  let found = transactions;
  if (tmp3 !== "all") {
    found = transactions.filter((type) => type.type === module_1078);
  }
  let obj2 = {};
  const item = found.forEach((date) => {
    if (!obj2[date.date]) {
      obj2[date.date] = [];
    }
    const arr = obj2[date.date];
    arr.push(date);
  });
  const keys = Object.keys(obj2);
  const sorted = keys.sort((arg0, localeCompare) => localeCompare.localeCompare(arg0));
  function handleDelete(arg0) {

  }
  const tmp6 = react_native;
  const tmp7 = closure_9;
  let items = [closure_9.header, ];
  let obj6 = { paddingTop: 12 + top };
  items[1] = obj6;
  let obj7 = { style: closure_9.appTitle, children: "Playful Pocket" };
  let jsxs = Fragment.jsxs;
  let View = react_native.View;
  let jsx = Fragment.jsx;
  let View2 = react_native.View;
  let items1 = [<View2 style={items}>{null}</View2>, , ];
  const obj8 = {
    style: closure_9.filterBar,
    children: items2.map((item) => {
      let str;
      let closure_0 = item;
      const items = [closure_1_9.filterPill, ];
      let filterTextActive = closure_2 === item;
      let filterPillActive = filterTextActive;
      const jsx = React.jsx;
      const TouchableOpacity = react_native.TouchableOpacity;
      const tmp = React;
      const tmp2 = react_native;
      if (filterTextActive) {
        filterPillActive = tmp3.filterPillActive;
      }
      items[1] = filterPillActive;
      const items1 = [closure_1_9.filterText, ];
      const jsx2 = tmp.jsx;
      const Text = tmp2.Text;
      if (filterTextActive) {
        filterTextActive = tmp3.filterTextActive;
      }
      obj2 = { style: items1, children: str };
      items1[1] = filterTextActive;
      str = "Semua";
      if (item !== "all") {
        let str2 = "Pemasukan";
        if (item === "expense") {
          str2 = "Pengeluaran";
        }
        str = str2;
      }
      return <TouchableOpacity key={arg0} style={items} onPress={function onPress() {
        return module_1391(item);
      }}>{jsx2(Text, obj2)}</TouchableOpacity>;
    })
  };
  items2 = ["all", "expense", "income"];
  let jsx2 = Fragment.jsx;
  let View3 = react_native.View;
  items1[1] = jsx2(View3, obj8);
  let jsxs2 = Fragment.jsxs;
  const ScrollView = react_native.ScrollView;
  const obj4 = Fragment;
  const obj9 = { showsVerticalScrollIndicator: false, contentContainerStyle: closure_9.scroll, children: items4 };
  if (sorted.length === 0) {
    let obj10 = { style: tmp7.emptyBox, children: items3 };
    let jsxs3 = obj4.jsxs;
    const View4 = tmp6.View;
    items3 = [<tmp6.Text style={{ fontSize: 48, marginBottom: 12 }}>{"\u{1F4ED}"}</tmp6.Text>, ];
    items3[1] = <tmp6.Text style={tmp7.emptyText}>{"Belum ada transaksi"}</tmp6.Text>;
    jsxs3Result = jsxs3(View4, obj10);
  } else {
    jsxs3Result = sorted.map((children) => {
      let categoryImage;
      let combined;
      let constants;
      let error;
      let items;
      let items1;
      let items3;
      let items4;
      const reduced = arr.reduce((acc, type) => {
        let amount;
        if (type.type === "income") {
          amount = type.amount;
        } else {
          amount = -type.amount;
        }
        return acc + amount;
      }, 0);
      let obj = Fragment;
      const jsxs = Fragment.jsxs;
      let View = react_native.View;
      let jsxs2 = Fragment.jsxs;
      let View2 = react_native.View;
      let jsxs3 = Fragment.jsxs;
      const View3 = react_native.View;
      const jsx = Fragment.jsx;
      let Text = react_native.Text;
      obj2 = { style: txItem.dateGroup, children: items4 };
      const obj3 = { style: txItem.dateHeader, children: items1 };
      const date = new Date(children);
      const date1 = new Date();
      let str = date1.toISOString();
      const first = str.split("T")[0];
      const date2 = new Date(Date.now() - 86400000);
      date2.toISOString();
      let str2 = "Hari Ini";
      const tmp2 = react_native;
      if (children !== first) {
        str2 = "Kemarin";
        if (children !== tmp6) {
          let _HermesInternal = HermesInternal;
          let str3 = " ";
          const date3 = date.getDate();
          str2 = "" + date3 + " " + closure_7[date.getMonth(date)] + " " + date.getFullYear();
        }
      }
      let obj5 = { children: items };
      items = [<Text style={txItem.dateTitle}>{str2}</Text>, ];
      items[1] = <tmp2.Text style={txItem.dateSubtitle}>{arg0}</tmp2.Text>;
      items1 = [jsxs3(View3, obj5), ];
      let items2 = [tmp3.dailyTotal, ];
      const jsxs4 = obj.jsxs;
      let Text2 = tmp2.Text;
      if (reduced >= 0) {
        error = module_1389.COLORS.statusIncome;
      } else {
        error = module_1389.COLORS.error;
      }
      let obj7 = { style: items2, children: items3 };
      items2[1] = { color: error };
      let str7 = "";
      if (reduced >= 0) {
        str7 = "+";
      }
      items3 = [str7, ];
      if (reduced >= 1000000) {
        let result = reduced / 1000000;
        const _HermesInternal4 = HermesInternal;
        combined = "Rp " + result.toFixed(1) + "jt";
      } else if (reduced >= 1000) {
        let result1 = reduced / 1000;
        let _HermesInternal3 = HermesInternal;
        combined = "Rp " + result1.toFixed(0) + "k";
      } else {
        let _HermesInternal2 = HermesInternal;
        combined = "Rp " + reduced;
      }
      items3[1] = combined;
      items1[1] = jsxs4(Text2, obj7);
      items4 = [
        jsxs2(View2, obj3),
        obj2[children].map((category_image) => {
          let combined;
          let error;
          let items2;
          let items4;
          let jsx;
          let jsxResult;
          let jsxs;
          let str;
          let obj = React;
          ({ jsx, jsxs } = React);
          const TouchableOpacity = RN.TouchableOpacity;
          if (category_image.category_image) {
            const Image = tmp.Image;
            jsxResult = <Image source={categoryImage.getCategoryImage(arg0.category_image)} style={txItem.txImage} />;
          } else {
            let items = [txItem.txImage, ];
            const obj5 = { backgroundColor: constants.COLORS.surfaceContainerHigh, justifyContent: "center", alignItems: "center" };
            items[1] = obj5;
            const obj6 = { style: { fontSize: 22 }, children: str };
            str = "\u{1F4B8}";
            const View = tmp.View;
            const jsx2 = obj.jsx;
            const Text = tmp.Text;
            if (category_image.type === "income") {
              str = "\u{1F4B0}";
            }
            jsxResult = <View style={items}>{jsx2(Text, obj6)}</View>;
          }
          const items1 = [jsxResult, , ];
          const jsxs2 = obj.jsxs;
          const View2 = tmp.View;
          const obj7 = { style: txItem.txInfo, children: items2 };
          items2 = [, ];
          items2[0] = <tmp.Text style={txItem.txName}>{arg0.category_name}</tmp.Text>;
          let jsxResult1 = null;
          if (category_image.note) {
            jsxResult1 = <tmp.Text style={txItem.txNote} numberOfLines={1}>{arg0.note}</tmp.Text>;
          }
          items2[1] = jsxResult1;
          items1[1] = jsxs2(View2, obj7);
          const items3 = [txItem.txAmount, ];
          const jsxs3 = obj.jsxs;
          const Text2 = tmp.Text;
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
          items1[2] = jsxs3(Text2, obj10);
          return <TouchableOpacity key={arg0.id} style={txItem.txItem} onLongPress={function onLongPress() {
            if (typeof categoryImage === "function") {
              const id = category_image.id;
              Alert = Alert.Alert;
              const items = [{ text: "Batal", style: "cancel" }, ];
              const obj = {
                text: "Hapus",
                style: "destructive",
                onPress() {
                    return Alert(id);
                  }
              };
              items[1] = obj;
              Alert.alert("Hapus Transaksi", "Yakin ingin menghapus transaksi ini?", items);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }} activeOpacity={0.8}>{items1}</TouchableOpacity>;
        })
      ];
      return <View key={arg0} style={txItem.dateGroup}>{items4}</View>;
    });
  }
  items4 = [jsxs3Result, ];
  items4[1] = <tmp6.Text style={tmp7.deleteHint}>{"Tekan lama untuk hapus transaksi"}</tmp6.Text>;
  items1[2] = jsxs2(ScrollView, obj9);
  return <View style={closure_9.container}>{items1}</View>;
}
let closure_7 = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nov", "Des"];
const StyleSheet = react_native.StyleSheet;
let obj2 = { container: { flex: 1, backgroundColor: module_1389.COLORS.background }, header: obj3, appTitle: obj4, filterBar: { flexDirection: "row", gap: 8, paddingHorizontal: 20, paddingVertical: 12, backgroundColor: module_1389.COLORS.background, borderBottomWidth: module_1389.BORDER.width, borderBottomColor: module_1389.COLORS.uiStroke }, filterPill: obj5, filterPillActive: { backgroundColor: module_1389.COLORS.primary }, filterText: obj6, filterTextActive: { color: "#fff" }, scroll: { padding: 20, paddingBottom: 40 }, emptyBox: { padding: 40, alignItems: "center" }, emptyText: obj7, dateGroup: { marginBottom: 24 }, dateHeader: obj8, dateTitle: obj9, dateSubtitle: obj10, dailyTotal: obj11, txItem: obj12, txImage: { width: 52, height: 52, borderRadius: 26, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke }, txInfo: { flex: 1 }, txName: obj13, txNote: obj14, txAmount: obj15, deleteHint: obj16 };
obj3 = { paddingHorizontal: 20, paddingVertical: 12, backgroundColor: module_1389.COLORS.background, borderBottomWidth: module_1389.BORDER.width, borderBottomColor: module_1389.COLORS.uiStroke };
const create = StyleSheet.create;
const merged = Object.assign(module_1389.SHADOWS.sticker);
obj4 = { color: module_1389.COLORS.primary, textAlign: "center" };
const merged1 = Object.assign(module_1389.FONTS.headlineLgMobile);
obj5 = { paddingHorizontal: 14, paddingVertical: 8, borderRadius: module_1389.BORDER.radius.full, backgroundColor: module_1389.COLORS.surfaceContainerLowest, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke };
const merged2 = Object.assign(module_1389.SHADOWS.stickerSm);
obj6 = { color: module_1389.COLORS.onSurface };
const merged3 = Object.assign(module_1389.FONTS.labelLg);
obj7 = { color: module_1389.COLORS.outline };
const merged4 = Object.assign(module_1389.FONTS.bodyMd);
obj8 = { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", borderBottomWidth: 2, borderBottomColor: `${tmp4.COLORS.uiStroke}33`, paddingBottom: 8, marginBottom: 10 };
obj9 = { color: module_1389.COLORS.onSurface };
const merged5 = Object.assign(module_1389.FONTS.headlineSm);
obj10 = { color: module_1389.COLORS.onSurfaceVariant };
const merged6 = Object.assign(module_1389.FONTS.labelSm);
obj11 = {};
const merged7 = Object.assign(module_1389.FONTS.labelLg);
obj12 = { flexDirection: "row", alignItems: "center", gap: 12, backgroundColor: module_1389.COLORS.surfaceContainerLowest, borderRadius: module_1389.BORDER.radius.xl, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke, padding: 12, marginBottom: 8 };
const merged8 = Object.assign(module_1389.SHADOWS.stickerSm);
obj13 = { color: module_1389.COLORS.onSurface };
const merged9 = Object.assign(module_1389.FONTS.labelLg);
obj14 = { color: module_1389.COLORS.outline, marginTop: 2 };
const merged10 = Object.assign(module_1389.FONTS.labelSm);
obj15 = {};
const merged11 = Object.assign(module_1389.FONTS.labelLg);
obj16 = { color: module_1389.COLORS.outline, textAlign: "center", marginTop: 8 };
const merged12 = Object.assign(module_1389.FONTS.labelSm);
let closure_9 = create(obj2);

export default HistoryScreen;
