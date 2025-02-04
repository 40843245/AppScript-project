function readValues() {
  let sheet = SpreadsheetApp.getActive().getActiveSheet();
  let activeRange = sheet.getActiveRange();
  let activeValues = activeRange.getValues();
  return activeValues;
}
