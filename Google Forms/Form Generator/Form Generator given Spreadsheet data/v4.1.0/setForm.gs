function setForm(form) {
  // change this variable and object to following.
  const formTitle = getCell(FormSettingsEnum.FORM_SETTINGS_LINE,3).getValue();
  const formDescription = getCell(FormSettingsEnum.FORM_SETTINGS_LINE,4).getValue();
  const formImageTitle = getCell(FormSettingsEnum.FORM_SETTINGS_LINE,5).getValue();
  const formImageHelpText = getCell(FormSettingsEnum.FORM_SETTINGS_LINE,6).getValue();
  const formImageUrl = getCell(FormSettingsEnum.FORM_SETTINGS_LINE,7).getValue();
  const formIsQuiz = getCell(FormSettingsEnum.FORM_SETTINGS_LINE,8).getValue();
  const formConfirmationMessage = getCell(FormSettingsEnum.FORM_SETTINGS_LINE,9).getValue();
  const formAllowResponseEdits = getCell(FormSettingsEnum.FORM_SETTINGS_LINE,10).getValue();
  const formAcceptingResponse = getCell(FormSettingsEnum.FORM_SETTINGS_LINE,11).getValue();
  const formCollectEmail = getCell(FormSettingsEnum.FORM_SETTINGS_LINE,12).getValue();
  const formLimitOneResponsePerUser = getCell(FormSettingsEnum.FORM_SETTINGS_LINE,13).getValue();
  const formShuffleQuestions = getCell(FormSettingsEnum.FORM_SETTINGS_LINE,14).getValue();
  const formShowProgressBar = getCell(FormSettingsEnum.FORM_SETTINGS_LINE,15).getValue();
  const formCustomClosedFormMessage = getCell(FormSettingsEnum.FORM_SETTINGS_LINE,16).getValue();
  const formPublishingSummary = getCell(FormSettingsEnum.FORM_SETTINGS_LINE,17).getValue();
  const formShowLinkToResponseAgain = getCell(FormSettingsEnum.FORM_SETTINGS_LINE,18).getValue();

  const formSettings = Object.create({
    'formTitle':formTitle,
    'formDescription':formDescription,
    'formImageTitle':formImageTitle,
    'formImageHelpText':formImageHelpText,
    'formImageUrl':formImageUrl,
    'formIsQuiz':formIsQuiz,
    'formConfirmationMessage':formConfirmationMessage,
    'formAllowResponseEdits':formAllowResponseEdits,
    'formAcceptingResponse':formAcceptingResponse, 
    'formCollectEmail':formCollectEmail,
    'formLimitOneResponsePerUser':formLimitOneResponsePerUser,
    'formShuffleQuestions':formShuffleQuestions,
    'formShowProgressBar':formShowProgressBar,
    'formCustomClosedFormMessage':formCustomClosedFormMessage,
    'formPublishingSummary':formPublishingSummary,
    'formShowLinkToResponseAgain':formShowLinkToResponseAgain,
  });

  // ...
}
