function createSummarizedItems() {
  let activeValues = readValues();
  let datesArray = getColumn(activeValues,0);
  let borrowItemsArray = getColumn(activeValues,1);
  let lendItemsArray = getColumn(activeValues,2);
  let borrowAmountsArray = getColumn(activeValues,3);
  let lendAmountsArray = getColumn(activeValues,4);
  let itemsDetailedObject = getSummarizedData(
    borrowItemsArray,
    lendItemsArray,
    borrowAmountsArray,
    lendAmountsArray,
    datesArray
  );

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const activeRange = getActiveRange();
  const activeFirstRow = activeRange.getRow();
  const activeLastColumn = activeRange.getLastColumn();
  const firstWrittenColumn = activeLastColumn + 1 + 1;
  const firstWrittenRow = activeFirstRow;
  const numOfWrittenRow = activeRange.getNumRows();
  let writtenRange = sheet.getRange(firstWrittenRow,firstWrittenColumn,numOfWrittenRow,4);
  writeSummarizedItems(writtenRange,itemsDetailedObject);
}
