function writeData(itemsObject) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const activeRange = sheet.getActiveRange();
  const activeFirstRow = activeRange.getRow();
  const activeLastColumn = activeRange.getLastColumn();
  const firstWrittenColumn = activeLastColumn + 1 + 1;
  const firstWrittenRow = activeFirstRow;
  const itemsObjectLength = Object.keys(itemsObject).length;
  const writtenData = Object.toArray(itemsObject);
  const writtenRange = sheet.getRange(firstWrittenRow,firstWrittenColumn,itemsObjectLength,2);
  writtenRange.setValues(writtenData);
}

function testWriteData(){
  writeData({});
}
