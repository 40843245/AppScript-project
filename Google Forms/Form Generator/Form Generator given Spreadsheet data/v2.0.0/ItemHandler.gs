class ItemHandler{
  constructor(form,questionInfo){
    // ...
    this.updateImage();
  }
  // ...
  itemIsImage(){
    const itemType = this.item.getType();
    
    if(itemType === FormApp.ItemType.IMAGE){
      return true;
    }

    return false;
  }
  // ...
  canUpdateImage(){
    if(this.itemIsImage() == false){
      return false;
    }

    const questionImageUrl = this.questionInfo['questionImageUrl'];
    return isNotEmpty(questionImageUrl);
  }
  build(){
    // ...
    else if(questionType === 'IMAGE'){
      item = this.form.addImageItem();
    }
    // ...
  }
  // ...
    updateImage(){
    if(this.canUpdateImage() == false){
      return undefined;
    }

    const questionImageTitle = this.questionInfo['questionImageTitle'];
    const questionImageHelpText = this.questionInfo['questionImageHelpText'];
    const questionImageUrl = this.questionInfo['questionImageUrl'];

    try{
      const image = UrlFetchApp.fetch(questionImageUrl);
      this.item.setTitle(questionImageTitle)
               .setHelpText(questionImageHelpText)
               .setImage(image);
    }catch(e){
        throw new Error("Error during fetching image and adding image.\nUrl:" +questionImageUrl+".\n"+"Detailed error message:"+e);
    }
