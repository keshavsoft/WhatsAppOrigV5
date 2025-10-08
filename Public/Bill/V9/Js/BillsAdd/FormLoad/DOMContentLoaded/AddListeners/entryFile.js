import { StartFunc as StartFuncRefreshBSTableClass } from "./RefreshBSTableClass/entryFile.js";
import { StartFunc as StartFuncFromRefreshBSTableYesterdayClass } from "./RefreshBSTableYesterdayClass/entryFile.js";

let StartFunc = () => {
  StartFuncRefreshBSTableClass();
  StartFuncFromRefreshBSTableYesterdayClass();
};

export { StartFunc };
