function clearTShapeItems() {
  const activeRange = getActiveRange();
  const activeFirstRow = activeRange.getRow();
  const activeLastColumn = activeRange.getLastColumn();
  const firstWrittenColumn = activeLastColumn + 1 + 4 + 1 + 1;
  const firstWrittenRow = activeFirstRow;
  const numOfWrittenRow = 1000;
  
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  let writtenRange = sheet.getRange(firstWrittenRow,firstWrittenColumn,numOfWrittenRow,4); 
  writtenRange.clear();
}
