function createAccountingData(){
  let activeValues = readValues();
  let borrowItemsArray = getColumn(activeValues,1);
  let lendItemsArray = getColumn(activeValues,2);
  let borrowAmountsArray = getColumn(activeValues,3);
  let lendAmountsArray = getColumn(activeValues,4);
  let { itemsObject , itemsDetailedObject } = recordItems(borrowItemsArray,lendItemsArray,borrowAmountsArray,lendAmountsArray);
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const activeRange = sheet.getActiveRange();
  const activeFirstRow = activeRange.getRow();
  const activeLastColumn = activeRange.getLastColumn();
  const firstWrittenColumn = activeLastColumn + 1 + 1;
  const firstWrittenRow = activeFirstRow;
  const numOfWrittenRow = activeRange.getNumRows();
  let writtenRange = sheet.getRange(firstWrittenRow,firstWrittenColumn,numOfWrittenRow,4);
  writeData2(writtenRange,itemsDetailedObject);
}

function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Custom Menu')
      .addItem('createAccountingData', 'createAccountingData')
      .addSeparator()
      .addToUi();
}
