class FormHandler{
  constructor(form,formSettings){
    // ...
    this.updateShowProgressBar();
    this.updateCustomClosedFormMessage();
    this.updatePublishingSummary();
    this.updateShowLinkToResponseAgain();
  }

  // ... 
  canUpdateConfirmMessage(){
    if(this.formIsEmpty() == false){
      return false;
    }

    /// change variable name in this method.
    const formConfirmationMessage = this.formSettings['formConfirmationMessage'];
    return formConfirmationMessage.trim() !== '';
  }
  
  // ...
  canUpdateShowProgressBar(){
    if(this.formIsEmpty() == true){
      return false;
    }

    const formShowProgressBar = this.formSettings['formShowProgressBar'];
    if(Boolean.isBool(formShowProgressBar) == true){
      return true;
    }

    return false;
  }

  canUpdateCustomClosedFormMessage(){
    if(this.formIsEmpty() == true){
      return false;
    }

    const formCustomClosedFormMessage = this.formSettings['formCustomClosedFormMessage'];
    if(formCustomClosedFormMessage.trim() !== ''){
      return true;
    }

    return false;
  }

  canUpdatePublishingSummary(){
    if(this.formIsEmpty() == true){
      return false;
    }

    const formPublishingSummary = this.formSettings['formPublishingSummary'];
    if(Boolean.isBool(formPublishingSummary) == true){
      return true;
    }

    return false;
  }

  canUpdateShowLinkToResponseAgain(){
    if(this.formIsEmpty() == true){
      return false;
    }

    const formShowLinkToResponseAgain = this.formSettings['formShowLinkToResponseAgain'];
    if(Boolean.isBool(formShowLinkToResponseAgain) == true){
      return true;
    }

    return false;
  }

  // ...
  
  updateShowProgressBar(){
    if(this.canUpdateShowProgressBar() == false){
      return false;
    }

    const formShowProgressBar = this.formSettings['formShowProgressBar'];
    this.form.setProgressBar(String.toBool(formShowProgressBar));
  }

  updateCustomClosedFormMessage(){
    if(this.canUpdateCustomClosedFormMessage() == false){
      return false;
    }

    const formCustomClosedFormMessage = this.formSettings['formCustomClosedFormMessage'];
    this.form.setCustomClosedFormMessage(formCustomClosedFormMessage);
  }

  updatePublishingSummary(){
    if(this.canUpdatePublishingSummary() == false){
      return false;
    }

    const formPublishingSummary = this.formSettings['formPublishingSummary'];
    this.form.setPublishingSummary(String.toBool(formPublishingSummary));
  }

  updateShowLinkToResponseAgain(){
    if(this.canUpdateShowLinkToResponseAgain() == false){
      return false;
    }

    const formShowLinkToResponseAgain = this.formSettings['formShowLinkToResponseAgain'];
    this.form.setShowLinkToRespondAgain(String.toBool(formShowLinkToResponseAgain));
  }

  // ...
}
