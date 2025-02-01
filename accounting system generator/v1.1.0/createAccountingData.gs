function createAccountingData(){
  let activeValues = readValues();
  // let datesArray = getColumn(activeValues,0);
  let borrowItemsArray = getColumn(activeValues,1);
  let lendItemsArray = getColumn(activeValues,2);
  let borrowAmountsArray = getColumn(activeValues,3);
  let lendAmountsArray = getColumn(activeValues,4);
  let itemsObject = recordItems(borrowItemsArray,lendItemsArray,borrowAmountsArray,lendAmountsArray);
  writeData(itemsObject);
}

function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Custom Menu')
      .addItem('createAccountingData', 'createAccountingData')
      .addSeparator()
      .addToUi();
}
