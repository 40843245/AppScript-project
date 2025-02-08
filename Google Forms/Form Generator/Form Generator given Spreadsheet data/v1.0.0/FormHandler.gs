class FormHandler{
  constructor(form,formSettings){
    this.form = form;
    this.formSettings = formSettings;

    this.updateTitle();
    this.updateIsQuiz();
  }

  formIsEmpty(){
    return isEmpty(this.form);
  }

  updateTitle(){
    const formTitle = this.formSettings['formTitle'];
    this.form.setTitle(formTitle);
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
