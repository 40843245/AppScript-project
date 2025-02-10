function setForm(form) {
  // ...
  for(let i=QuestionLineEnum.MIN_LINE;i<=QuestionLineEnum.MAX_LINE;i++){
    // ...
    const questionVideoTitle = getCell(i,21).getValue();
    const questionVideoHelpText = getCell(i,22).getValue();
    const questionVideoUrl = getCell(i,23).getValue();

    const questionInfo = Object.create({
      // ...
      'questionVideoTitle':questionVideoTitle,
      'questionVideoHelpText':questionVideoHelpText,
      'questionVideoUrl':questionVideoUrl,
    });
    // ...
  }  
  // ...
}
