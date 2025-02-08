class FormHandler{
  constructor(form,formSettings){
    // ...
    this.updateImage();
    // ...
  }

  // ...

  updateImage(){
    if(this.formIsEmpty() == true){
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

  // ...
}
