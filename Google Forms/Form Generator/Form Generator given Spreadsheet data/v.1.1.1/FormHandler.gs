class FormHandler{
  // ...
  canUpdateImage(){
    const formImageUrl = this.formSettings['formImageUrl'];
    return formImageUrl.trim() !== '';
  }
  // ...
  updateImage(){
    // ...
    if(this.canUpdateImage() === false){
      return undefined;
    }
    // ...
  }
  // ...
}
