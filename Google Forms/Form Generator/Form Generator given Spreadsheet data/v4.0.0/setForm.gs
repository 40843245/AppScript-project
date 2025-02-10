function setForm(form){
  // ...
  const formCollectEmail = getCell(FormSettingsEnum.FORM_SETTINGS_LINE,13).getValue();
  const formLimitOneResponsePerUser = getCell(FormSettingsEnum.FORM_SETTINGS_LINE,14).getValue();
  const formShuffleQuestions = getCell(FormSettingsEnum.FORM_SETTINGS_LINE,15).getValue();

  const formSettings = Object.create({
    // ...
    'formCollectEmail':formCollectEmail,
    'formLimitOneResponsePerUser':formLimitOneResponsePerUser,
    'formShuffleQuestions':formShuffleQuestions,
  });
  // ...
}
