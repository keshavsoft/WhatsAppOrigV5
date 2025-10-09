let StartFunc = () => {
  let jVarLocalRefreshBSTableId =
    document.querySelector(`.RefreshBSTableClass`);
  jVarLocalRefreshBSTableId.click();

  jFLocalRunYesterday();
};

const jFLocalRunYesterday = () => {
  let jVarLocalRefreshBSTableId = document.querySelector(
    `.RefreshBSTableYesterdayClass`,
  );
  jVarLocalRefreshBSTableId.click();
};

export { StartFunc };
