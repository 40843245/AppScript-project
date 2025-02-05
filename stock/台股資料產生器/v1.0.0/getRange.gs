function getRange(numRow,numColumn) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const range = sheet.getRange(2,1,numRow,numColumn);
  return range;
}

function testGetRange(){
  Logger.log(getRange().getA1Notation());
}
