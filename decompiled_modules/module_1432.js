// Module ID: 1432
// Function ID: 1434
// Dependencies: [52, 5, 1389, 233]

// Module 1432
import react_mod from "react" /* 52 */;
import react_native from "react-native" /* 5 */;
import module_1389 from "module_1389" /* 1389 */;
import Fragment from "Fragment" /* 233 */;

let obj10;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let tmp4;
function ForceUpdateModal(visible) {
  let message;
  visible = visible.visible;
  ({ updateUrl: react_native, message } = visible);
  const items = [];
  const _default = visible.default;
  items[0] = visible;
  const effect = _default.useEffect(() => {
    if (visible) {
      const BackHandler = react_native.BackHandler;
      let closure_0 = BackHandler.addEventListener("hardwareBackPress", () => true);
      return () => closure_0.remove();
    }
  }, items);
  const jsx = Fragment.jsx;
  const Modal = react_native.Modal;
  const jsx2 = Fragment.jsx;
  const View = react_native.View;
  const jsxs = Fragment.jsxs;
  const View2 = react_native.View;
  const jsx3 = Fragment.jsx;
  const View3 = react_native.View;
  const obj3 = { style: closure_4.overlay, children: null };
  const obj5 = { style: closure_4.iconWrap, children: null };
  const items1 = [jsx3(View3, obj5), , , , , ];
  items1[1] = <react-native.Text style={closure_4.title}>{"Update Diperlukan!"}</react-native.Text>;
  const jsx4 = Fragment.jsx;
  const Text = react_native.Text;
  const obj8 = { style: closure_4.subtitle, children: message };
  if (!message) {
    message = "Versi baru Playful Pocket sudah tersedia. Update sekarang untuk mendapatkan fitur terbaru dan perbaikan keamanan!";
  }
  function handleUpdate() {
    const Linking = react_native.Linking;
    Linking.openURL(react_native);
  }
  items1[2] = jsx4(Text, obj8);
  const jsx5 = obj.jsx;
  const View4 = tmp2.View;
  const obj9 = { style: closure_4.infoBox, children: null };
  items1[3] = jsx5(View4, obj9);
  const jsx6 = obj.jsx;
  const TouchableOpacity = tmp2.TouchableOpacity;
  const obj11 = { style: closure_4.updateBtn, onPress: handleUpdate, activeOpacity: 0.85, children: null };
  items1[4] = jsx6(TouchableOpacity, obj11);
  items1[5] = <react-native.Text style={closure_4.note}>{"App tidak dapat digunakan sampai update selesai"}</react-native.Text>;
  return <Modal visible={visible} transparent animationType="fade" statusBarTranslucent onRequestClose={function onRequestClose() {

  }}>{jsx2(View, obj3)}</Modal>;
}
let react = react_mod;
if (!react) {
  tmp4 = { default: react };
  const obj2 = { default: react };
} else {
  tmp4 = react;
}
react = tmp4;
const StyleSheet = react_native.StyleSheet;
let obj3 = { overlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.65)", justifyContent: "center", alignItems: "center", padding: 24 }, card: obj4, iconWrap: size, icon: { fontSize: 36 }, title: obj5, subtitle: obj6, infoBox: { backgroundColor: module_1389.COLORS.surfaceContainerLow, borderRadius: module_1389.BORDER.radius.lg, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke, paddingHorizontal: 16, paddingVertical: 10, marginBottom: 20 }, infoText: obj7, updateBtn: obj8, updateBtnText: obj9, note: obj10 };
obj4 = { backgroundColor: module_1389.COLORS.surface, borderRadius: module_1389.BORDER.radius.xl, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke, padding: 28, alignItems: "center", width: "100%" };
const create = StyleSheet.create;
const merged = Object.assign(module_1389.SHADOWS.sticker);
size = { width: 72, height: 72, borderRadius: 36, backgroundColor: module_1389.COLORS.primaryContainer, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke, alignItems: "center", justifyContent: "center", marginBottom: 16 };
const merged1 = Object.assign(module_1389.SHADOWS.stickerSm);
obj5 = { color: module_1389.COLORS.onSurface, textAlign: "center", marginBottom: 8 };
const merged2 = Object.assign(module_1389.FONTS.headlineLgMobile);
obj6 = { color: module_1389.COLORS.onSurfaceVariant, textAlign: "center", lineHeight: 22, marginBottom: 16 };
const merged3 = Object.assign(module_1389.FONTS.bodyMd);
obj7 = { color: module_1389.COLORS.onSurfaceVariant, textAlign: "center" };
const merged4 = Object.assign(module_1389.FONTS.labelSm);
obj8 = { backgroundColor: module_1389.COLORS.primary, borderRadius: module_1389.BORDER.radius.full, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke, paddingVertical: 14, paddingHorizontal: 32, width: "100%", alignItems: "center", marginBottom: 12 };
const merged5 = Object.assign(module_1389.SHADOWS.stickerSm);
obj9 = { color: module_1389.COLORS.onPrimaryContainer, fontSize: 16 };
const merged6 = Object.assign(module_1389.FONTS.labelLg);
obj10 = { color: module_1389.COLORS.outline, textAlign: "center", opacity: 0.8 };
const merged7 = Object.assign(module_1389.FONTS.labelSm);
let closure_4 = create(obj3);

export default ForceUpdateModal;
