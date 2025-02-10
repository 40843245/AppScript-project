class FormHandler{
  constructor(form,formSettings){
    this.form = form;
    this.formSettings = formSettings;

    this.updateTitle();
    this.updateDescription();
    this.updateImage();
    this.updateIsQuiz();
    this.updateConfirmMessage();
    this.updateAllowResponseEdits();
    this.updateAcceptingResponse();
    this.updateCollectEmail();
    this.updateLimitOneResponsePerUser();
    this.updateShuffleQuestions();
  }

  formIsEmpty(){
    return isEmpty(this.form);
  }

  canUpdateTitle(){
    if(this.formIsEmpty() == true){
      return false;
    }
    const formTitle = this.formSettings['formTitle'];
    return formTitle.trim() !== '';
  }

  canUpdateImage(){
    if(this.formIsEmpty() == true){
      return false;
    }

    const formImageUrl = this.formSettings['formImageUrl'];
    return formImageUrl.trim() !== '';
  }

  canUpdateConfirmMessage(){
    if(this.formIsEmpty() == false){
      return false;
    }

    const formConfirmMessage = this.formSettings['formConfirmMessage'];
    return formConfirmMessage.trim() !== '';
  }

  canUpdateAllowResponseEdits(){
    if(this.formIsEmpty() == false){
      return false;
    }

    const formAllowResponseEdits = this.formSettings['formAllowResponseEdits'];
    if(Boolean.isBool(formAllowResponseEdits)){
      return true;
    }
    return false;
  }

  canUpdateAcceptingResponse(){
    if(this.formIsEmpty() == true){
      return false;
    }

    const formAcceptingResponse = this.formSettings['formAcceptingResponse'];
    if(Boolean.isBool(formAcceptingResponse) == true){
      return true;
    }
    return false;
  }

  canUpdateCollectEmail(){
    if(this.formIsEmpty() == true){
      return false;
    }

    const formCollectEmail = this.formSettings['formCollectEmail'];
    if(Boolean.isBool(formCollectEmail) == true){
      return true;
    }

    return false;
  }

  canUpdateLimitOneResponsePerUser(){
    if(this.formIsEmpty() == true){
      return false;
    }

    const formLimitOneResponsePerUser = this.formSettings['formLimitOneResponsePerUser'];
    if(Boolean.isBool(formLimitOneResponsePerUser) == true){
      return true;
    }

    return false;
  }

  canUpdateShuffleQuestions(){
    if(this.formIsEmpty() == true){
      return false;
    }

    const formShuffleQuestions = this.formSettings['formShuffleQuestions'];
    if(Boolean.isBool(formShuffleQuestions) == true){
      return true;
    }

    return false;
  }

  updateTitle(){
    if(this.canUpdateTitle() == false){
      return undefined;
    }

    const formTitle = this.formSettings['formTitle'];
    this.form.setTitle(formTitle);
  }

  updateDescription(){
    if(this.formIsEmpty() == true){
      return undefined;
    }

    const formDescription = this.formSettings['formDescription'];
    this.form.setDescription(formDescription);
  }

  updateImage(){
    if(this.canUpdateImage() === false){
      return undefined;
    }
    
    const formImageUrl = this.formSettings['formImageUrl'];
    const formImageTitle = this.formSettings['formImageTitle'];
    const formImageHelpText = this.formSettings['formImageHelpText'];

    try{
      const image = UrlFetchApp.fetch(formImageUrl);
      this.form.addImageItem()
              .setTitle(formImageTitle)
              .setHelpText(formImageHelpText)
              .setImage(image); 
    }catch(e){
      throw new Error("Error during fetching image and adding image.\nUrl:" +formImageUrl+".\n"+"Detailed error message:"+e);
    }
  }

  updateIsQuiz(){
    if(this.formIsEmpty() == true){
      return undefined;
    }

    const formIsQuiz = this.formSettings['formIsQuiz'];
    if(formIsQuiz === YesNoEnum.YES){
      this.form.setIsQuiz(true);
    }else if(formIsQuiz === YesNoEnum.NO){
      this.form.setIsQuiz(false);
    }
  }

  updateConfirmMessage(){
    if(this.canUpdateConfirmMessage() == false){
      return undefined;
    }
    Logger.log('updateConfirmMessage was called.');
    const formConfirmMessage = this.formSettings['formConfirmMessage'];
    this.form.setConfirmMessage(formConfirmMessage);
  }

  updateAllowResponseEdits(){
    if(this.canUpdateAllowResponseEdits() == false){
      return undefined;
    }

    Logger.log('updateAllowResponseEdits was called.');
    const formAllowResponseEdits = this.formSettings['formAllowResponseEdits'];
    this.form.setAllowResponseEdits(String.toBool(formAllowResponseEdits));
  }

  updateAcceptingResponse(){
    if(this.canUpdateAcceptingResponse() == false){
      return undefined;
    }

    Logger.log('updateAcceptingResponse was called.');
    const formAcceptingResponse = this.formSettings['formAcceptingResponse'];
    this.form.setAcceptingResponses(String.toBool(formAcceptingResponse));
  }

  updateCollectEmail(){
    if(this.canUpdateCollectEmail() == false){
      return undefined;
    }

    const formCollectEmail = this.formSettings['formCollectEmail'];
    this.form.setCollectEmail(String.toBool(formCollectEmail));
  }
  
  updateLimitOneResponsePerUser(){
    if(this.canUpdateLimitOneResponsePerUser() == false){
      return undefined;
    }

    const formLimitOneResponsePerUser = this.formSettings['formLimitOneResponsePerUser'];
    this.form.setLimitOneResponsePerUser(String.toBool(formLimitOneResponsePerUser));
  }
  
  updateShuffleQuestions(){
    if(this.canUpdateShuffleQuestions() == false){
      return undefined;
    }

    const formShuffleQuestions = this.formSettings['formShuffleQuestions'];
    this.form.setShuffleQuestions(String.toBool(formShuffleQuestions));
  }
}
