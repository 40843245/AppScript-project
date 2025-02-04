function createAccountingData(){
  createSummarizedItems();
}

function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Custom Menu')
      .addItem('createAccountingData', 'createAccountingData')
      .addSeparator()
      .addToUi();
}
