class ItemHandler{
  // ...
  needToSetCorrectAnswer(){
    const questionCorrectAnswers = this.questionInfo['questionCorrectAnswers'];
    if(questionCorrectAnswers.trim() === ''){
      return false;
    }

    return true;
  }
// ...

// change the `updateChoices` method as follows. 
updateChoices(){
    if(this.canSetChoices() == false){
      return undefined;
    }

    if(this.needToSetCorrectAnswer() == true){
      const questionChoices = this.questionInfo['questionChoices'];
      const questionCorrectAnswers = this.questionInfo['questionCorrectAnswers'];
      const choiceArray = questionChoices.split(SeparatorEnum.CELL_VALUE_SEPARATOR);
      const correctAnswerArray = questionCorrectAnswers.split(SeparatorEnum.CELL_VALUE_SEPARATOR);
      const choiceArrayLength = choiceArray.length;
      const correctAnswerArrayLength = correctAnswerArray.length;
      
      const itemChoiceArray = [];
      for(let i=0;i<choiceArrayLength;i++){
        const choice = choiceArray[i];
        let itemChoice = undefined;
        let isCorrect = String.toSafeBool(correctAnswerArray[i].trim());
        if(i<correctAnswerArrayLength){
          itemChoice = this.item.createChoice(choice,isCorrect);
        }else{
          itemChoice = this.item.createChoice(choice);
        }
        itemChoiceArray.push(itemChoice);
      }
      this.item.setChoices(itemChoiceArray);
      return;
    }
}
  
