class ItemHandler{
  constructor(form,questionInfo){
    this.form = form;
    this.questionInfo = questionInfo;
    this.item = undefined;
    this.isPageBreak = false;

    this.build();
    this.updateRequired();
    this.updateTitle();
    this.updateChoices();
    this.updateHelpText();
    this.updatePoints();
    this.updateRowOfGrids();
    this.updateColumnOfGrids();
    this.updateBounds();
    this.updateLabelsOfBounds();
  }

  //// utility methods

  itemIsUndefined(){
    return this.item === undefined;
  }

  itemIsGrid(){
    if(isEmpty(this.item) == true){
      return false;
    }

    const itemType = this.item.getType();
    
    if(itemType === FormApp.ItemType.GRID){
      return true;
    }
    if(itemType === FormApp.ItemType.CHECKBOX_GRID){
      return true;
    }

    return false;
  }

  itemIsQuestion(){
    if(isEmpty(this.item)){
      return false;
    }

    const itemType = this.item.getType();

    if(itemType === FormApp.ItemType.CHECKBOX){
      return true;
    }
    if(itemType === FormApp.ItemType.MULTIPLE_CHOICE){
      return true;
    }
    if(itemType === FormApp.ItemType.LIST){
      return true;
    }
    if(itemType === FormApp.ItemType.GRID){
      return true;
    }
    if(itemType === FormApp.ItemType.CHECKBOX_GRID){
      return true;
    }
    if(itemType === FormApp.ItemType.PARAGRAPH_TEXT){
      return true;
    }
    if(itemType === FormApp.ItemType.TEXT){
      return true;
    }
    if(itemType === FormApp.ItemType.SCALE){
      return true;
    }
    if(itemType === FormApp.ItemType.RATING){
      return true;
    }
    if(itemType === FormApp.ItemType.DATE){
      return true;
    }
    if(itemType === FormApp.ItemType.TIME){
      return true;
    }
    if(itemType === FormApp.ItemType.DATETIME){
      return true;
    }

    return false;
  }

  itemIsScaleQuestion(){
    if(isEmpty(this.item) == true){
      return false;
    }

    const itemType = this.item.getType();
    
    if(itemType === FormApp.ItemType.SCALE){
      return true;
    }

    return false;
  }

  itemIsRatingQuestion(){
    if(isEmpty(this.item) == true){
      return false;
    }

    const itemType = this.item.getType();
    
    if(itemType === FormApp.ItemType.RATING){
      return true;
    }

    return false;
  }

  itemIsSectionHeader(){
    if(isEmpty(this.item)){
      return false;
    }  

    const itemType = this.item.getType();
    
    if(itemType === FormApp.ItemType.SECTION_HEADER){
      return true;
    }

    return false;
  } 

  itemIsPageBreak(){
    if(isEmpty(this.item)){
      return false;
    }  

    const itemType = this.item.getType();
    
    if(itemType === FormApp.ItemType.PAGE_BREAK){
      return true;
    }

    return false;
  } 

  canSetRequired(){
    return this.itemIsQuestion();
  }

  canSetTitle(){
    if(isEmpty(this.item)){
      return false;
    }

    if(this.itemIsQuestion()){
      return true;
    }

    if(this.itemIsSectionHeader()){
      return true;
    }

    return false;
  }

  canSetChoices(){ 
    if(isEmpty(this.item) == true){
      return false;
    }

    const questionChoices = this.questionInfo['questionChoices'];

    if(isEmpty(questionChoices) == true){
      return false;
    }

    const itemType = this.item.getType();
    
    if(itemType === FormApp.ItemType.CHECKBOX){
      return true;
    }
    if(itemType === FormApp.ItemType.MULTIPLE_CHOICE){
      return true;
    }
    if(itemType === FormApp.ItemType.LIST){
      return true;
    }

    return false;
  }

  canSetPoints(){
    if(isEmpty(this.item) == true){
      return false;
    }

    const itemType = this.item.getType();
    
    if(itemType === FormApp.ItemType.CHECKBOX){
      return true;
    }
    if(itemType === FormApp.ItemType.MULTIPLE_CHOICE){
      return true;
    }
    if(itemType === FormApp.ItemType.LIST){
      return true;
    }
    if(itemType === FormApp.ItemType.PARAGRAPH_TEXT){
      return true;
    }
    if(itemType === FormApp.ItemType.TEXT){
      return true;
    }

    return false;
  }

  canSetRows(){
    if(this.itemIsGrid() == false){
      return false;
    }

    const questionRowOfGrids = this.questionInfo['questionRowOfGrids'];

    if(isEmpty(questionRowOfGrids)){
      return false;
    }

    return true;
  }

  canSetColumns(){
    if(this.itemIsGrid() == false){
      return false;
    }

    const questionColumnOfGrids = this.questionInfo['questionColumnOfGrids'];

    if(isEmpty(questionColumnOfGrids)){
      return false;
    }

    return true;
  }

  canSetHelpText(){
    if(isEmpty(this.item) == true){
      return false;
    }

    if(this.itemIsQuestion()){
      return true;
    }

    if(this.itemIsSectionHeader()){
      return true;
    }

    return false;
  }

  canSetBounds(){
    if(this.itemIsScaleQuestion() == false){
        return false;
    }

    const questionBounds = this.questionInfo['questionBounds'];
    const boundsText = questionBounds.split(SeparatorEnum.CELL_VALUE_SEPARATOR);
    const boundsTextLength = boundsText.length;
    if(boundsTextLength != 2){
      return false;
    }

    const bounds = [];
    for(let i=0;i<boundsTextLength;i++){
      const boundText = boundsText[i];
      if(Number.isSafeInteger(boundText) == false){
        return false;
      }
      bounds.push(parseInt(boundText));
    }

    if(bounds[0] >= bounds[1]){
      return false;
    }

    return true;
  }

  canSetLabelsOfBounds(){
    if(this.itemIsScaleQuestion() == false){
        return false;
    }

    const questionLabelsOfBounds = this.questionInfo['questionLabelsOfBounds'];
    const labelsOfBoundsText = questionLabelsOfBounds.split(SeparatorEnum.CELL_VALUE_SEPARATOR);
    const labelsOfBoundsTextLength = labelsOfBoundsText.length;
    
    if(labelsOfBoundsTextLength != 2){
      return false;
    }

    return true;
  }

  //// factory methods: to create a new item (then assign it into this.item)

  build(){
    const questionType = this.questionInfo['questionType'];
    let item = undefined;
    Logger.log(questionType);
    if(questionType === 'CHECKBOX'){
      item = this.form.addCheckboxItem();
    }else if(questionType === 'MULTIPLE_CHOICE'){
      item = this.form.addMultipleChoiceItem();
    }else if(questionType === 'LIST'){
      item = this.form.addListItem();
    }else if(questionType === 'PARAGRAPH_TEXT'){
      item = this.form.addParagraphTextItem();
    }else if(questionType === 'TEXT'){
      item = this.form.addTextItem();
    }else if(questionType === 'GRID'){
      item = this.form.addGridItem();
    }else if(questionType === 'CHECKBOX_GRID'){
      item = this.form.addCheckboxGridItem();
    }else if(questionType === 'SCALE'){
      item = this.form.addScaleItem();
    }else if(questionType === 'RATING'){
      item = this.form.addRatingItem();
    }else if(questionType === 'DATE'){
      item = this.form.addDateItem();
    }else if(questionType === 'TIME'){
      item = this.form.addTimeItem();
    }else if(questionType === 'DATETIME'){
      item = this.form.addDateTimeItem();
    }else if(questionType === 'SECTION_HEADER'){
      item = this.form.addSectionHeaderItem();
    }
    Logger.log(item.getType());
    this.item = item;
    return this.item;
  }

  //// helper methods: updates this.item.

  updateRequired(){
    if(this.canSetRequired() == false){
      return undefined;
    }

    const questionRequired = this.questionInfo['questionRequired'];
    if(questionRequired === YesNoEnum.YES){
      this.item.setRequired(true);
    }else if(questionRequired === YesNoEnum.NO){
      this.item.setRequired(false);
    }else{
      throw Error('questionRequired field must be one of YES or NO');
    }
  }

  updateTitle(){
    if(this.canSetTitle() == false){
      return undefined;
    }

    const questionTitle = this.questionInfo['questionTitle'];
    this.item.setTitle(questionTitle);
  }

  updateChoices(){
    if(this.canSetChoices() == false){
      return undefined;
    }

    const questionChoices = this.questionInfo['questionChoices'];
    const choices = questionChoices.split(SeparatorEnum.CELL_VALUE_SEPARATOR);
    const choicesLength = choices.length;
    const itemChoices = [];
    for(let i=0;i<choicesLength;i++){
      const choice = choices[i];
      itemChoices.push(this.item.createChoice(choice));
    }
    this.item.setChoices(itemChoices);
  }

  updateShowOtherOptions(){
    if(this.itemIsEmpty() == true){
      return undefined;
    }
    const questionShowOtherOptions = this.questionInfo['questionShowOtherOptions'];

    if(questionShowOtherOptions === YesNoEnum.YES){
      this.item.showOtherOption(true);
    }else if(questionShowOtherOptions === YesNoEnum.NO){
      this.item.showOtherOption(false);
    }
  }

  updateHelpText(){
    if(this.canSetHelpText() == false){
      return undefined;
    }

    const questionHelpText = this.questionInfo['questionHelpText'];
    this.item.setHelpText(questionHelpText);
  }

  updatePoints(){
    if(this.canSetPoints() == false){
      return undefined;
    }

    let questionPoints = 0;
    if(Number.isSafeInteger(this.questionInfo['questionPoints']) == true){
        questionPoints = parseInt(this.questionInfo['questionPoints']);
    }
    this.item.setPoints(questionPoints);
  }

  updateRowOfGrids(){
    if(this.canSetRows() == false){
      return undefined;
    }

    const questionRowOfGrids = this.questionInfo['questionRowOfGrids'];
    const rowOfGrids = questionRowOfGrids.split(',');
    this.item.setRows(rowOfGrids);
  }

  updateColumnOfGrids(){
    if(this.canSetColumns() == false){
      return undefined;
    }
    const questionColumnOfGrids = this.questionInfo['questionColumnOfGrids'];
    const columnOfGrids = questionColumnOfGrids.split(SeparatorEnum.CELL_VALUE_SEPARATOR);
    this.item.setColumns(columnOfGrids);
  }

  updateBounds(){
    if(this.canSetBounds() == false){
      return undefined;
    }

    const questionBounds = this.questionInfo['questionBounds'];
    const boundsText = questionBounds.split(SeparatorEnum.CELL_VALUE_SEPARATOR);
    const boundsTextLength = boundsText.length;
    const bounds = [];
    for(let i=0;i<boundsTextLength;i++){
      const boundText = boundsText[i];
      bounds.push(parseInt(boundText));
    }

    this.item.setBounds(bounds[0],bounds[1]);
  }

  updateLabelsOfBounds(){
    if(this.canSetLabelsOfBounds() == false){
      return undefined;
    }

    const questionLabelsOfBounds = this.questionInfo['questionLabelsOfBounds'];
    const labelsOfBounds = questionLabelsOfBounds.split(SeparatorEnum.CELL_VALUE_SEPARATOR);
    this.item.setLabels(labelsOfBounds[0],labelsOfBounds[1]);
  }
}

//// test function

function testClassItem(){
  Logger.log(new Item({}).questionInfo);
}
