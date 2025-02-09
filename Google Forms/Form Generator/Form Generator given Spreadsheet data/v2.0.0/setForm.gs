function setForm(form) {
  // ...
  for(let i=QuestionLineEnum.MIN_LINE;i<=QuestionLineEnum.MAX_LINE;i++){
   // ...
    const questionImageTitle = getCell(i,16).getValue();
    const questionImageHelpText = getCell(i,17).getValue();
    const questionImageUrl = getCell(i,18).getValue();

    const questionInfo = Object.create({
      // ...
      'questionImageTitle':questionImageTitle,
      'questionImageHelpText':questionImageHelpText,
      'questionImageUrl':questionImageUrl,
    };
    // ...
    }
    // ...
  }
