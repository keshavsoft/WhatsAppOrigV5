import { StartFunc as StartFuncFromCheckWA } from "./CheckWA/entryFile.js";

let StartFunc = () => {
    StartFuncFromCheckWA();

    let jVarLocalRefreshBSTableId = document.querySelector(`.RefreshBSTableClass`);

    jVarLocalRefreshBSTableId.click();
};

export { StartFunc };