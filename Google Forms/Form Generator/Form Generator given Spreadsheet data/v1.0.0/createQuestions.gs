function createQuestions(form,questionInfoArray) {
  const questionInfoArrayLength = questionInfoArray.length;
  for(let i = 0; i<questionInfoArrayLength;i++){
    const questionInfo = questionInfoArray[i];
    const itemHandler = new ItemHandler(form,questionInfo);
  }
}
