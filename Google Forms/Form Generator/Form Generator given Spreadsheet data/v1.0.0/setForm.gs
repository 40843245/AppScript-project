function setForm(form) {
  const formIsQuiz = getCell(FormSettingsEnum.FORM_SETTINGS_LINE,5).getValue();
  const formTitle = getCell(FormSettingsEnum.FORM_SETTINGS_LINE,3).getValue();
  const formSettings = Object.create({
    'formIsQuiz':formIsQuiz,
    'formTitle':formTitle,
  });

  const formHandler = new FormHandler(form,formSettings);

  const questionInfoArray = [];

  for(let i=QuestionLineEnum.MIN_LINE;i<=QuestionLineEnum.MAX_LINE;i++){
    
    const questionType = getCell(i,1).getValue();
    const questionRequired = getCell(i,2).getValue();
    const questionTitle = getCell(i,3).getValue();
    const questionChoices = getCell(i,4).getValue();
    const questionRowOfGrids = getCell(i,5).getValue();
    const questionColumnOfGrids = getCell(i,6).getValue();
    const questionShowOtherOptions = getCell(i,7).getValue();
    const questionHelpText = getCell(i,8).getValue();
    const questionPoints = getCell(i,9).getValue();

    const questionInfo = Object.create({
      'questionType':questionType,
      'questionRequired':questionRequired,
      'questionTitle':questionTitle,
      'questionChoices':questionChoices,
      'questionRowOfGrids':questionRowOfGrids,
      'questionColumnOfGrids':questionColumnOfGrids,
      'questionShowOtherOptions':questionShowOtherOptions,
      'questionHelpText':questionHelpText,
      'questionPoints':questionPoints,
      'questionBounds':questionBounds,
    });

    questionInfoArray.push(questionInfo);
  }

  createQuestions(form,questionInfoArray);
}
