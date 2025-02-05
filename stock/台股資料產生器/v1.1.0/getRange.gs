function getRange(numRow,numColumn) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const range = sheet.getRange(3,1,numRow,numColumn); // <-- only change this statement to change the range for written data.
  return range;
}

function testGetRange(){
  Logger.log(getRange().getA1Notation());
}
