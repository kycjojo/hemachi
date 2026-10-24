// Module ID: 1075
// Function ID: 1077
// Dependencies: [52, 1076, 1, 1078, 5, 1087, 1119, 1430, 1391, 1401, 1389, 1431, 1432, 233]

// Module 1075
import react_mod from "react" /* 52 */;
import StatusBar from "StatusBar" /* 1076 */;
import module_1 from "module_1" /* 1 */;
import module_1078 from "module_1078" /* 1078 */;
import react_native from "react-native" /* 5 */;
import module_1087 from "module_1087" /* 1087 */;
import module_1119_mod from "module_1119" /* 1119 */;
import migrateDatabase from "migrateDatabase" /* 1430 */;
import module_1391 from "module_1391" /* 1391 */;
import module_1401 from "module_1401" /* 1401 */;
import module_1389 from "module_1389" /* 1389 */;
import react_mod2 from "react" /* 1431 */;
import module_1432_mod from "module_1432" /* 1432 */;
import Fragment from "Fragment" /* 233 */;

let tmp5;
let tmp8;
function LoadingScreen() {
  const jsx = Fragment.jsx;
  const View = react_native.View;
  return <View style={closure_17.loading}>{null}</View>;
}
function NativeDbInitializer(children) {
  children = children.children;
  const sQLiteContext = module_1087.useSQLiteContext();
  let closure_1 = module_1391.useTransactionStore((setDb) => setDb.setDb);
  let closure_2 = module_1401.useBudgetStore((setDb) => setDb.setDb);
  const items = [sQLiteContext];
  const effect = react.useEffect(() => {
    closure_1(sQLiteContext);
    closure_2(sQLiteContext);
  }, items);
  return <>{children}</>;
}
function App() {
  let SQLiteProvider;
  let jsx3;
  let needsUpdate;
  let obj4;
  let updateMessage;
  let updateUrl;
  const forceUpdate = react.useForceUpdate();
  ({ needsUpdate, updateUrl, updateMessage } = forceUpdate);
  const jsx = Fragment.jsx;
  const SafeAreaProvider = module_1078.SafeAreaProvider;
  const jsxs = Fragment.jsxs;
  const items = [, , ];
  items[0] = <StatusBar.StatusBar style="dark" />;
  items[1] = <module_1432.default visible={needsUpdate} updateUrl={updateUrl} message={updateMessage} />;
  const jsx2 = Fragment.jsx;
  const Suspense = react.Suspense;
  const obj3 = { fallback: <LoadingScreen />, children: jsx3(SQLiteProvider, obj4) };
  jsx3 = Fragment.jsx;
  SQLiteProvider = module_1087.SQLiteProvider;
  obj4 = { databaseName: "playful_pocket.db", onInit: migrateDatabase.migrateDatabase, useSuspense: true, children: null };
  items[2] = jsx2(Suspense, obj3);
  return <SafeAreaProvider>{null}</SafeAreaProvider>;
}
let react = react_mod2;
let module_1119 = module_1119_mod;
if (!module_1119) {
  const obj2 = { default: module_1119 };
  tmp5 = obj2;
} else {
  tmp5 = module_1119;
}
module_1119 = tmp5;
react = react_mod2;
let module_1432 = module_1432_mod;
if (!module_1432) {
  let obj3 = { default: module_1432 };
  tmp8 = obj3;
} else {
  tmp8 = module_1432;
}
module_1432 = tmp8;
const StyleSheet = react_native.StyleSheet;
let obj4 = { root: { flex: 1 }, loading: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: module_1389.COLORS.background } };
const styles = StyleSheet.create(obj4);

export default App;
