class ItemHandler{
  constructor(form,questionInfo){
    // ...
    this.updateVideo();
  } 

  // ...
  itemIsVideo(){
    if(isEmpty(this.item) == true){
      return false;
    }

    const itemType = this.item.getType();
    
    if(itemType === FormApp.ItemType.VIDEO){
      return true;
    }

    return false;
  }
  // ...
  canUpdateVideo(){
    if(this.itemIsVideo() == false){
      return false;
    }

    const questionVideoTitle = this.questionInfo['questionVideoTitle'];
    const questionVideoUrl = this.questionInfo['questionVideoUrl'];
    
    return questionVideoTitle.trim() !== '' && questionVideoUrl.trim() !== '';
  }
  // ...

  //// factory methods: to create a new item (then assign it into this.item)

  build(){
    // ...
    // add video item when question type is `VIDEO`.
    else if(questionType === 'VIDEO'){
      item = this.form.addVideoItem();
    }
    // ...
  }
  // ... 
  updateVideo(){
    if(this.canUpdateVideo() == false){
      return undefined;
    }

    const questionVideoTitle = this.questionInfo['questionVideoTitle'];
    const questionVideoHelpText = this.questionInfo['questionVideoHelpText'];
    const questionVideoUrl = this.questionInfo['questionVideoUrl'];

    this.item.setVideoUrl(questionVideoUrl).setTitle(questionVideoTitle);

    if(questionVideoHelpText.trim() !== ''){
      this.item.setHelpText(questionVideoHelpText);
    }
  }
}
