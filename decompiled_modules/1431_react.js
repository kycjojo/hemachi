// Module ID: 1431
// Function ID: 1433
// Name: react
// Dependencies: [52]
// Exports: useForceUpdate

// Module 1431 (react)
import react from "react" /* 52 */;

let c4, c5;

function compareVersions(str, str2) {
  str = str.replace(/-(beta|alpha|rc)\d*/i, "");
  const parts = str.split(".");
  const mapped = parts.map(Number);
  str2 = str2.replace(/-(beta|alpha|rc)\d*/i, "");
  const parts1 = str2.split(".");
  const mapped1 = parts1.map(Number);
  let num = 0;
  if (0 < Math.max(mapped.length, mapped1.length)) {
    while (true) {
      let num2 = mapped[num];
      if (num2 == null) {
        num2 = 0;
      }
      let num3 = mapped1[num];
      if (num3 == null) {
        num3 = 0;
      }
      if (num2 > num3) {
        break;
      } else if (num2 < num3) {
        return -1;
      } else {
        num = num + 1;
        let _Math = Math;
      }
    }
    return 1;
  }
  return 0;
}
let c1 = "https://gist.githubusercontent.com/kycjojo/bad78d48962d0f36f81710e566d70c5e/raw/version-config.json";
let c2 = "1.0.0";
if ("1.0.0".includes("beta")) {
  let str2 = "beta";
} else {
  const includes = "1.0.0".includes;
  let str = "alpha";
  str2 = "production";
}

export function useForceUpdate() {
  let tmp2;
  let tmp4;
  let tmp6;
  let tmp8;
  let obj = react;
  const state = react.useState(false);
  [tmp2, ] = state;
  const state1 = obj.useState("");
  [tmp4, ] = state1;
  const state2 = obj.useState("");
  [tmp6, ] = state2;
  const state3 = obj.useState(true);
  [tmp8, ] = state3;
  const effect = obj.useEffect(() => {
    async function checkVersion(arg0, value) {
      if (c5 === 2) {
        c5 = 3;
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
        let tmp58;
        let c3;
        try {
          let closure_0;
          let closure_1;
          c5 = 2;
          if (0 === c4) {
            closure_0 = undefined;
            closure_1 = undefined;
            tmp58 = undefined;
            c3 = 2;
            const _fetch = fetch;
            const _Date = Date;
            const _HermesInternal2 = HermesInternal;
            const obj3 = { cache: "no-store", headers: { "Cache-Control": "no-cache" } };
            c4 = 3;
            c5 = 1;
            const obj4 = { value: fetch("" + closure_1 + "?t=" + Date.now(), obj3), done: false };
            return obj4;
          } else if (1 === c4) {
            c3 = 0;
            closure_129_3(false);
            throw tmp58;
          } else {
            if (2 === c4) {
              c3 = 1;
              let closure_3 = tmp58;
              const _console = console;
              const _HermesInternal = HermesInternal;
              console.log("[ForceUpdate][" + c3 + "] Version check skipped:", closure_3);
            } else if (3 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                closure_129_3(false);
                c5 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                closure_0 = value;
                if (closure_0.ok) {
                  c4 = 4;
                  c5 = 1;
                  const obj6 = { value: closure_0.json(), done: false };
                  return obj6;
                } else {
                  closure_129_3(false);
                  c3 = 0;
                  closure_129_3(false);
                  c5 = 3;
                  return { value: "writable", done: "BounceInDown" };
                }
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_3(false);
              c5 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              closure_1 = value;
              tmp58 = closure_1[c3];
              const tmp69 = tmp58;
              if (tmp69) {
                if (c4(tmp58, tmp58.minVersion) < 0) {
                  closure_129_1(tmp58.updateUrl);
                  closure_129_2(tmp58.updateMessage);
                  closure_129_0(true);
                }
                c3 = 1;
              } else {
                closure_129_3(false);
                c3 = 0;
                closure_129_3(false);
                c5 = 3;
                return { value: "writable", done: "BounceInDown" };
              }
            }
            c3 = 0;
            closure_129_3(false);
            c5 = 3;
            return { value: "writable", done: "BounceInDown" };
          }
        } catch (tmp58) {
          if (0 === c3) {
            c5 = 3;
            throw tmp58;
          } else if (1 === tmp60) {
            c4 = 1;
          } else {
            c4 = 2;
          }
        }
      }
    }
    const tmp = checkVersion();
  }, []);
  let obj2 = { needsUpdate: tmp2, updateUrl: tmp4, updateMessage: tmp6, checking: tmp8, channel: str2 };
  return obj2;
}
