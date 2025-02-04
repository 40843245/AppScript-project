function getCell(row,column) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const cell = sheet.getRange(row,column);
  return cell;
}

function testGetCell(){
  Logger.log(getCell(1,1).getA1Notation());
  Logger.log(getCell(1,2).getA1Notation());
  Logger.log(getCell(2,1).getA1Notation());

}
