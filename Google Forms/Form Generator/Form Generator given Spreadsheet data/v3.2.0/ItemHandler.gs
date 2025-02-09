class ItemHandler{
  constructor(form,questionInfo){
    // ...  
    this.updateGeneralFeedback();
  }

  itemIsParagraphText(){
    if(isEmpty(this.item) == true){
      return false;
    }

    const itemType = this.item.getType();
    
    if(itemType === FormApp.ItemType.PARAGRAPH_TEXT){
      return true;
    }

    return false;
  }

  itemIsText(){
    if(isEmpty(this.item) == true){
      return false;
    }

    const itemType = this.item.getType();
    
    if(itemType === FormApp.ItemType.TEXT){
      return true;
    }

    return false;
  }

  // ...
  canUpdateGeneralFeedback(){
    return this.itemIsParagraphText() == true
        || this.itemIsText() == true;  
  }
  // ...

  updateGeneralFeedback(){
    if(this.canUpdateGeneralFeedback() == false){
      return undefined;
    }

    const questionGeneralFeedback = this.questionInfo['questionGeneralFeedback'];

    const quizGeneralFeedback = FormApp.createFeedback().setText(questionGeneralFeedback).build();

    if(isNotEmpty(questionGeneralFeedback) == true){
      this.item.setGeneralFeedback(quizGeneralFeedback);
    }
  }
}
