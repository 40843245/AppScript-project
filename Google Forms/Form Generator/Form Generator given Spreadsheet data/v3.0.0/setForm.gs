function setForm(form) {
  // ... 
  for(let i=QuestionLineEnum.MIN_LINE;i<=QuestionLineEnum.MAX_LINE;i++){
    // ...
    const questionCorrectAnswerFeedback = getCell(i,13).getValue();
    const questionIncorrectAnswerFeedback = getCell(i,14).getValue();
    // ...

    const questionInfo = Object.create({
      // ...
      'questionCorrectAnswerFeedback':questionCorrectAnswerFeedback,
      'questionIncorrectAnswerFeedback':questionIncorrectAnswerFeedback,
      // ...
    });
    // ...
  }
  // ...
}
