// Module ID: 1429
// Function ID: 1431
// Dependencies: [52, 5, 1078, 1120, 1389, 233]

// Module 1429
import react from "react" /* 52 */;
import react_native from "react-native" /* 5 */;
import module_1078 from "module_1078" /* 1078 */;
import module_1120 from "module_1120" /* 1120 */;
import module_1389 from "module_1389" /* 1389 */;
import Fragment from "Fragment" /* 233 */;

let RN;

let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
function SettingsScreen() {
  let handleMenu;
  let items1;
  let items3;
  let items4;
  const top = handleMenu.useSafeAreaInsets().top;
  RN = module_1120.useNavigation();
  handleMenu = function handleMenu(arg0) {

  };
  const obj2 = { style: items, children: items1 };
  items = [menuIcon.header, ];
  const obj3 = { paddingTop: 12 + top };
  items[1] = obj3;
  let jsxs = Fragment.jsxs;
  let View = RN.View;
  const jsxs2 = Fragment.jsxs;
  const View2 = RN.View;
  let jsx = Fragment.jsx;
  let TouchableOpacity = RN.TouchableOpacity;
  items1 = [
    <TouchableOpacity style={closure_6.backBtn} onPress={function onPress() {
      return RN.goBack();
    }}>{null}</TouchableOpacity>,
  ,

  ];
  items1[1] = <RN.Text style={closure_6.headerTitle}>{"Pengaturan"}</RN.Text>;
  items1[2] = <RN.View style={closure_6.placeholder} />;
  const items2 = [jsxs2(View2, obj2), ];
  const jsxs3 = Fragment.jsxs;
  const ScrollView = RN.ScrollView;
  const obj8 = { showsVerticalScrollIndicator: false, contentContainerStyle: menuIcon.scroll, children: items3 };
  items3 = [
    items.map((uri) => {
      RN = uri;
      items = [menuIcon.menuIcon, { backgroundColor: uri.bgColor }];
      const jsxs = React.jsxs;
      const TouchableOpacity = RN.TouchableOpacity;
      const jsx = React.jsx;
      const View = RN.View;
      const items1 = [<View style={items}>{null}</View>, , ];
      items1[1] = <RN.Text style={closure_1_6.menuLabel}>{arg0.label}</RN.Text>;
      items1[2] = <RN.Text style={closure_1_6.chevron}>{"\u203A"}</RN.Text>;
      return <TouchableOpacity key={arg0.id} style={closure_1_6.menuItem} onPress={function onPress() {
        if (typeof handleMenu === "function") {
          const Alert = uri.Alert;
          const _HermesInternal = HermesInternal;
          Alert.alert("Segera hadir!", "Fitur \"" + tmp + "\" akan tersedia di versi berikutnya.");
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }} activeOpacity={0.8}>{items1}</TouchableOpacity>;
    }),

  ];
  const jsxs4 = Fragment.jsxs;
  const TouchableOpacity2 = RN.TouchableOpacity;
  const jsx2 = Fragment.jsx;
  const View3 = RN.View;
  const obj10 = { style: menuIcon.resetIcon, children: null };
  const obj9 = {
    style: menuIcon.resetItem,
    onPress: function handleReset() {
      let Alert = RN.Alert;
      items = [
        { text: "Batal", style: "cancel" },
        {
          text: "Reset",
          style: "destructive",
          onPress() {
            Alert = Alert.Alert;
            return Alert.alert("Data berhasil direset");
          }
        }
      ];
      Alert.alert("Reset Data", "Semua data transaksi dan budget akan dihapus. Lanjutkan?", items);
    },
    activeOpacity: 0.8,
    children: items4
  };
  items4 = [jsx2(View3, obj10), ];
  items4[1] = <RN.Text style={closure_6.resetLabel}>{"Reset Data"}</RN.Text>;
  items3[1] = jsxs4(TouchableOpacity2, obj9);
  items2[1] = jsxs3(ScrollView, obj8);
  return <View style={closure_6.container}>{items2}</View>;
}
let obj2 = { id: "kategori", label: "Kelola Kategori Custom", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7Wx5AoJ1pxBvopcTW8GCB-3_TqUOi83aXgl5vAhGSPnqAMhfAHXfUgUxSBqCVzgk0M_zaXUvLRq-j9JN7usH8vJWuzr135Lx5mWNobAZYOR857ILuh44qjRB723O4wZnuPUWdbW7CSU236EpCcrhoW_kO5YICg2iTyx2jYwR-QoJm2MaLz_q6JT3MlmzUsDqYGyyKBhRug6XJ-AqyXOAAo1GuodCA78mWYsTPhVs37gtg8zHWQe8z", bgColor: module_1389.COLORS.groupCampus };
let items = [obj2, { id: "pengingat", label: "Pengingat Tagihan", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkWSNBcKzrNFTl5pBSeXk7jaylxA-51Ki1yKd3Tud8xUXQn7r9T6kAfA5HAdq4OHxjtyWd08UwEwP6uOw8yLrPhBG_I619BN1qYSLQyICk6VT146dW6FKeNvD3EaDZ15VQkEUX0IUgjs4r10QUOw-jxK9BDNi_1MsEbwmJBLn_ef__fhrOV4qTtMy3hsvGVf1QTg353rxgQ_o9yNlZE1N4jtBp0RmhMJLXObCAbJgElVzKRgAZBLg-", bgColor: module_1389.COLORS.groupFood }, { id: "tabungan", label: "Target Tabungan", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyMLL5hgesVzaZvhtM0EHAk02aYryrp553Jop1TMWpAVg0UEThOBzfFdogoA-d4K22RUHGKxCZxi3CKJjrUU_fun_Reniq5o52_mDA9dURUP5jog50VtVZI_r46bs7K0N8mYlQyh7xEF-eEhEq5EU0NsmYu6ROWFU4V2q8uLGFkb6lYXfmYlhz9hb16i1Bn_XJLglur9LY-Q5Es2JQw6iOHkcHT_qK9eZb2DCvjsqeClP3KpR1HkEv", bgColor: module_1389.COLORS.groupBoarding }, { id: "notifikasi", label: "Notifikasi", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLaTmzLiKSA0UhsD-j-IW7BQnZeExUbpZBtZk1gBcEEx2HOjRCouzzMBFI2uM9nwcndjlhEBpCnHfn2K5GQyD-HECKP8i73wsxkrpvp76yZ5VKFBb3u-2zGKGSLVTPo-5HzuAp_ioI5Lb1pZ-Buizog16jI43neiDn9zQUAae7bvJzsxxPe7f2Ngu2kZyU-58KaDRKs36-HfEG9R3oDHL3kouCHiQrTIGX5c5z0CEJEgGs0rHTDz9L", bgColor: module_1389.COLORS.groupPersonal }, { id: "export", label: "Export Data", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhBr9wnMfjV2E-7q3dT-kFxs92tsxaVzazDnh9NrXhCi1mwaJ_HjdyGMwCvVb5mrrqqeue8cjJw62UnNPGus4g4-rYDAXART7X3Emmm6AyPzdkH0qAe6c7MSypqoB2enedttAfd-Msrny6AsQ45NvBuO-92JyfBd49lJWRPcJC613UgqiCjO3gnQMtqlokT5GyBm59UxzTD_cQTWeEsnC9JAXGFZowEC0SIT9_o9UylQokctY-HCLA", bgColor: module_1389.COLORS.statusIncome }];
const StyleSheet = react_native.StyleSheet;
let obj3 = { container: { flex: 1, backgroundColor: module_1389.COLORS.background }, header: obj4, backBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: module_1389.COLORS.surfaceContainerHigh, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke, alignItems: "center", justifyContent: "center" }, backIcon: { fontSize: 20, color: module_1389.COLORS.onSurface }, headerTitle: obj5, placeholder: { width: 40 }, scroll: { padding: 20, gap: 12, paddingBottom: 40 }, menuItem: obj6, menuIcon: { width: 48, height: 48, borderRadius: 24, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke, overflow: "hidden" }, menuImage: { width: "100%", height: "100%" }, menuLabel: obj7, chevron: { fontSize: 20, color: module_1389.COLORS.onSurfaceVariant }, resetItem: obj8, resetIcon: { width: 48, height: 48, borderRadius: 24, backgroundColor: module_1389.COLORS.error, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke, alignItems: "center", justifyContent: "center" }, resetIconText: { fontSize: 22 }, resetLabel: obj9 };
const create = StyleSheet.create;
obj4 = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, paddingVertical: 12, backgroundColor: module_1389.COLORS.background, borderBottomWidth: module_1389.BORDER.width, borderBottomColor: module_1389.COLORS.uiStroke };
const merged = Object.assign(module_1389.SHADOWS.sticker);
obj5 = { color: module_1389.COLORS.primary };
const merged1 = Object.assign(module_1389.FONTS.headlineLgMobile);
obj6 = { flexDirection: "row", alignItems: "center", gap: 14, backgroundColor: module_1389.COLORS.surface, borderRadius: module_1389.BORDER.radius.xl, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke, padding: 14 };
const merged2 = Object.assign(module_1389.SHADOWS.sticker);
obj7 = { color: module_1389.COLORS.onSurface, flex: 1 };
const merged3 = Object.assign(module_1389.FONTS.labelLg);
obj8 = { flexDirection: "row", alignItems: "center", gap: 14, backgroundColor: module_1389.COLORS.errorContainer, borderRadius: module_1389.BORDER.radius.xl, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke, padding: 14, marginTop: 8 };
const merged4 = Object.assign(module_1389.SHADOWS.sticker);
obj9 = { color: module_1389.COLORS.error, flex: 1 };
const merged5 = Object.assign(module_1389.FONTS.labelLg);
let closure_6 = create(obj3);

export default SettingsScreen;
