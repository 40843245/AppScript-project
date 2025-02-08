function getCell(rowIndex,columnIndex) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  return sheet.getRange(rowIndex,columnIndex);
}
