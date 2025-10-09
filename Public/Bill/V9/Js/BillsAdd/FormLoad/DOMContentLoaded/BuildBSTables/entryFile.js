import { StartFunc as StartFuncFromHtmlTable } from "./HtmlTable/EntryFile.js";
import { StartFunc as StartFuncFromHtmlTableForYesterday } from "./HtmlTableForYesterday/EntryFile.js";

const StartFunc = () => {
  StartFuncFromHtmlTable();
  StartFuncFromHtmlTableForYesterday();
};

export { StartFunc };
