function getFormName() {
  const cell = getCell(FormSettingsEnum.FORM_SETTINGS_LINE,2);
  return cell.getValue();
}
