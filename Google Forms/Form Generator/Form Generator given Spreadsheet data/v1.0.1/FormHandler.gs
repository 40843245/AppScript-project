class FormHandler{
  constructor(form,formSettings){
    this.form = form;
    this.formSettings = formSettings;

    this.updateTitle();
    this.updateDescription();
    this.updateIsQuiz();
  }

  formIsEmpty(){
    return isEmpty(this.form);
  }

  updateTitle(){
    if(this.formIsEmpty() == true){
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
}
