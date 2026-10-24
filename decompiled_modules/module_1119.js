// Module ID: 1119
// Function ID: 1121
// Dependencies: [52, 1120, 1242, 1356, 5, 1078, 1389, 1390, 1425, 1426, 1427, 1428, 1429, 233]

// Module 1119
import react from "react" /* 52 */;
import module_1120 from "module_1120" /* 1120 */;
import module_1242 from "module_1242" /* 1242 */;
import module_1356 from "module_1356" /* 1356 */;
import react_native from "react-native" /* 5 */;
import module_1078 from "module_1078" /* 1078 */;
import module_1389 from "module_1389" /* 1389 */;
import module_1390_mod from "module_1390" /* 1390 */;
import module_1425_mod from "module_1425" /* 1425 */;
import module_1426_mod from "module_1426" /* 1426 */;
import module_1427_mod from "module_1427" /* 1427 */;
import module_1428_mod from "module_1428" /* 1428 */;
import module_1429_mod from "module_1429" /* 1429 */;
import Fragment from "Fragment" /* 233 */;

let items;
let items1;
let obj9;
let size;
let tmp11;
let tmp13;
let tmp15;
let tmp17;
let tmp7;
let tmp9;
function MainTabs() {
  let items;
  const bottom = module_1078.useSafeAreaInsets().bottom;
  const obj2 = { headerShown: false, tabBarStyle: items, tabBarShowLabel: false };
  items = [closure_16.tabBar, ];
  const jsxs = Fragment.jsxs;
  Navigator = Navigator.Navigator;
  items[1] = { paddingBottom: Math.max(8, bottom), height: 72 + bottom };
  const items1 = [, , , , ];
  ({ paddingBottom: Math.max(8, bottom), height: 72 + bottom });
  items1[0] = <closure_10.Screen name="Home" component={module_1390.default} options={{
    tabBarIcon(focused) {
      return <TabIcon label="Home" icon="🏠" focused={arg0.focused} />;
    }
  }} />;
  items1[1] = <closure_10.Screen name="History" component={module_1425.default} options={{
    tabBarIcon(focused) {
      return <TabIcon label="Riwayat" icon="📋" focused={arg0.focused} />;
    }
  }} />;
  items1[2] = <closure_10.Screen name="Add" component={module_1426.default} options={{
    tabBarIcon(focused) {
      return <AddTabIcon focused={arg0.focused} />;
    }
  }} />;
  items1[3] = <closure_10.Screen name="Budget" component={module_1427.default} options={{
    tabBarIcon(focused) {
      return <TabIcon label="Budget" icon="👛" focused={arg0.focused} />;
    }
  }} />;
  items1[4] = <closure_10.Screen name="Report" component={module_1428.default} options={{
    tabBarIcon(focused) {
      return <TabIcon label="Laporan" icon="📊" focused={arg0.focused} />;
    }
  }} />;
  return <Navigator screenOptions={obj2}>{items1}</Navigator>;
}
function AppNavigator() {
  const jsx = Fragment.jsx;
  const NavigationContainer = module_1120.NavigationContainer;
  const jsxs = Fragment.jsxs;
  Navigator = Navigator2.Navigator;
  const items = [, ];
  items[0] = <closure_11.Screen name="Main" component={MainTabs} />;
  items[1] = <closure_11.Screen name="Settings" component={module_1429.default} />;
  return <NavigationContainer>{null}</NavigationContainer>;
}
let module_1390 = module_1390_mod;
if (!module_1390) {
  let obj2 = { default: module_1390 };
  tmp7 = obj2;
} else {
  tmp7 = module_1390;
}
module_1390 = tmp7;
let module_1425 = module_1425_mod;
if (!module_1425) {
  const obj3 = { default: module_1425 };
  tmp9 = obj3;
} else {
  tmp9 = module_1425;
}
module_1425 = tmp9;
let module_1426 = module_1426_mod;
if (!module_1426) {
  tmp11 = { default: module_1426 };
  const obj4 = { default: module_1426 };
} else {
  tmp11 = module_1426;
}
module_1426 = tmp11;
let module_1427 = module_1427_mod;
if (!module_1427) {
  tmp13 = { default: module_1427 };
  const obj5 = { default: module_1427 };
} else {
  tmp13 = module_1427;
}
module_1427 = tmp13;
let module_1428 = module_1428_mod;
if (!module_1428) {
  tmp15 = { default: module_1428 };
  const obj6 = { default: module_1428 };
} else {
  tmp15 = module_1428;
}
module_1428 = tmp15;
let module_1429 = module_1429_mod;
if (!module_1429) {
  tmp17 = { default: module_1429 };
  const obj7 = { default: module_1429 };
} else {
  tmp17 = module_1429;
}
module_1429 = tmp17;
let Navigator = module_1242.createBottomTabNavigator();
const Navigator2 = module_1356.createStackNavigator();
function TabIcon(icon) {
  let focused;
  let label;
  ({ label, focused } = icon);
  const items = [closure_16.tabItem, ];
  let tabItemActive = focused;
  icon = icon.icon;
  const jsxs = Fragment.jsxs;
  const View = react_native.View;
  if (focused) {
    tabItemActive = tmp2.tabItemActive;
  }
  items[1] = tabItemActive;
  const items1 = [closure_16.tabIcon, ];
  let tabIconActive = focused;
  const jsx = obj.jsx;
  const Text = tmp.Text;
  if (focused) {
    tabIconActive = tmp2.tabIconActive;
  }
  items1[1] = tabIconActive;
  const items2 = [<Text style={items1}>{icon}</Text>, , ];
  const jsxResult = !focused && <tmp.Text style={closure_16.tabLabel}>{label}</tmp.Text>;
  items2[1] = jsxResult;
  if (focused) {
    const items3 = [, ];
    ({ tabLabel: arr4[0], tabLabelActive: arr4[1] } = closure_16);
    focused = <tmp.Text style={items3}>{label}</tmp.Text>;
  }
  items2[2] = focused;
  return <View style={items}>{items2}</View>;
}
function AddTabIcon(arg0) {
  const jsx = Fragment.jsx;
  const View = react_native.View;
  return <View style={closure_16.addButton}>{null}</View>;
}
const StyleSheet = react_native.StyleSheet;
const obj8 = { tabBar: { height: 72, backgroundColor: module_1389.COLORS.surface, borderTopWidth: module_1389.BORDER.width, borderTopColor: module_1389.COLORS.uiStroke, paddingBottom: 8, paddingTop: 4, shadowColor: module_1389.COLORS.uiStroke, shadowOffset: { width: 0, height: -4 }, shadowOpacity: 0.5, shadowRadius: 0, elevation: 8 }, tabItem: { alignItems: "center", justifyContent: "center", width: 56, height: 56, borderRadius: 12, gap: 2 }, tabItemActive: obj9, tabIcon: { fontSize: 20 }, tabIconActive: { fontSize: 20 }, tabLabel: { fontSize: 10, fontWeight: "600", color: module_1389.COLORS.onSurfaceVariant }, tabLabelActive: { color: module_1389.COLORS.onPrimaryContainer }, addButton: size, addButtonText: { fontSize: 28, color: module_1389.COLORS.onPrimaryContainer, fontWeight: "700", lineHeight: 32 } };
obj9 = { backgroundColor: module_1389.COLORS.primaryContainer, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke, transform: items };
items = [{ translateY: -6 }];
const create = StyleSheet.create;
const merged = Object.assign(module_1389.SHADOWS.stickerSm);
size = { width: 56, height: 56, borderRadius: 28, backgroundColor: module_1389.COLORS.primaryContainer, borderWidth: module_1389.BORDER.width, borderColor: module_1389.COLORS.uiStroke, alignItems: "center", justifyContent: "center", transform: items1 };
items1 = [{ translateY: -12 }];
const merged1 = Object.assign(module_1389.SHADOWS.sticker);
let closure_16 = create(obj8);

export default AppNavigator;
