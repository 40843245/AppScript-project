function onOpen() {
  const ui = SpreadsheetApp.getUi();
  const createSubMenu = ui.createMenu('Generate Data')
                          .addItem('create accounting data','createAccountingData')
                          .addItem('create summarized items','createSummarizedItems')
                          .addItem('create T-Account','createTShapeItems');
  const clearSubMenu = ui.createMenu('Clear Data')
                         .addItem('clear summarized items','clearSummarizedItems')
                         .addItem('clear T-Account','clearTShapeItems');
  ui.createMenu('Custom Menu')
      .addSubMenu(createSubMenu)
      .addSeparator()
      .addSubMenu(clearSubMenu)
      .addToUi();
}
