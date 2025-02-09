class ItemHandler{
  constructor(form,questionInfo){
    // ...
    this.updateAnswerFeedBack();
  }
  // ...
  updateAnswerFeedBack(){
    if(this.canUpdateAnswerFeedback() == false){
      return undefined;
    }

    const questionCorrectAnswerFeedback = this.questionInfo['questionCorrectAnswerFeedback'];
    const questionIncorrectAnswerFeedback = this.questionInfo['questionIncorrectAnswerFeedback'];

    const quizCorrectAnswerFeedback = FormApp.createFeedback().setText(questionCorrectAnswerFeedback).build();
    const quizIncorrectAnswerFeedback = FormApp.createFeedback().setText(questionIncorrectAnswerFeedback).build();

    if(isNotEmpty(questionCorrectAnswerFeedback) == true){
      this.item.setFeedbackForCorrect(quizCorrectAnswerFeedback);
    }
    if(isNotEmpty(questionIncorrectAnswerFeedback) == true){
      this.item.setFeedbackForIncorrect(quizIncorrectAnswerFeedback);
    }
  }
}
