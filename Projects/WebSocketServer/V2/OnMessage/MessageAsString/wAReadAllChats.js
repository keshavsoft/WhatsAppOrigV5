import { StartFunc as StartFuncFromWA } from "../../../../WaV4/readAllChats.js";

let StartFunc = ({ inws }) => {
    StartFuncFromWA().then();
    inws.send("WAReadAllChats");
};

export { StartFunc };