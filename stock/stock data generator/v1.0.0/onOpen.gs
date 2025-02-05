function onOpen() {
  const ui = SpreadsheetApp.getUi();
  const subMenu1 = ui.createMenu('pop up')
                      .addItem('pop up window','popup');
  const subMenu2 = ui.createMenu('fetch data')
                      .addItem('fetch stock price','createStockPrice')
  ui.createMenu('Custom Menu')
    .addSubMenu(subMenu1)
    .addSeparator()
    .addSubMenu(subMenu2)
    .addToUi();
}
