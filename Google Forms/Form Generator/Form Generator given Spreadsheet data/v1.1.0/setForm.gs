function setForm(form) {
  /// remove this part from previous version and add this part
  const formTitle = getCell(FormSettingsEnum.FORM_SETTINGS_LINE,3).getValue();
  const formDescription = getCell(FormSettingsEnum.FORM_SETTINGS_LINE,4).getValue();
  const formImageTitle = getCell(FormSettingsEnum.FORM_SETTINGS_LINE,5).getValue();
  const formImageHelpText = getCell(FormSettingsEnum.FORM_SETTINGS_LINE,6).getValue();
  const formImageUrl = getCell(FormSettingsEnum.FORM_SETTINGS_LINE,7).getValue();
  const formIsQuiz = getCell(FormSettingsEnum.FORM_SETTINGS_LINE,8).getValue();
  const formSettings = Object.create({
    'formTitle':formTitle,
    'formDescription':formDescription,
    'formImageTitle':formImageTitle,
    'formImageHelpText':formImageHelpText,
    'formImageUrl':formImageUrl,
    'formIsQuiz':formIsQuiz,
  });

  // ...
}
