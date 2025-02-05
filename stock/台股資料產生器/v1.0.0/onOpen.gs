function onOpen() {
  const ui=SpreadsheetApp.getUi();
  const create = ui.createMenu('generate')
                    .addItem('generate 台股 data','createStockPrice');
  ui.createMenu('Custom Menu')
    .addSubMenu(create)
    .addToUi();
}
