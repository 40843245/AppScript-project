function getStockId() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const range = sheet.getRange(1,2,1,1);
  const stockId = range.getValues();
  return stockId;
}
