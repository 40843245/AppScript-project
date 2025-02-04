function recordWithDateWithDetail(
  borrowItemsArray,
  borrowAmountsArray,
  lendItemsArray,
  lendAmountsArray,
  datesArray
){
  const borrowItemsDetailedObject = Object.create({});
  const borrowItemsArrayLength = borrowItemsArray.length;

  throwExceptionNotSameLength(borrowItemsArray,borrowAmountsArray);

  for(let itemIndex = 0; itemIndex < borrowItemsArrayLength;itemIndex++){
    const item = borrowItemsArray[itemIndex];
    const amount = borrowAmountsArray[itemIndex];
    const date = datesArray[itemIndex];
    if(isNotEmpty(item)){
      const tempItem = {
        'amount':amount,
        'date':date,
      }
      if(!Object.hasOwn(borrowItemsDetailedObject,item)){
        borrowItemsDetailedObject[item] = {'borrow': [tempItem]};
      }else{
        borrowItemsDetailedObject[item]['borrow'].push(tempItem);
      }
    }
  }

  const lendItemsDetailedObject = Object.create({});
  const lendItemsArrayLength = lendItemsArray.length;

  throwExceptionNotSameLength(lendItemsArray,lendAmountsArray);

  for(let itemIndex = 0; itemIndex < lendItemsArrayLength;itemIndex++){
    const item = lendItemsArray[itemIndex];
    const amount = lendAmountsArray[itemIndex];
    const date = datesArray[itemIndex];
    if(isNotEmpty(item)){
      const tempItem = {
        'amount':amount,
        'date':date,
      }
      if(!Object.hasOwn(lendItemsDetailedObject,item)){
        lendItemsDetailedObject[item] = {'lend': [tempItem]};
      }else{
        lendItemsDetailedObject[item]['lend'].push(tempItem);
      }
    }
  }
  Logger.log('-------------------+++++++++++++++++++++++++++++++++++++++++++++---------------------------');
  Logger.log(JSON.stringify(borrowItemsDetailedObject,'=','->'));
  Logger.log(JSON.stringify(lendItemsDetailedObject,'=','->'));
  Logger.log('-------------------+++++++++++++++++++++++++++++++++++++++++++++---------------------------');
  return {borrowItemsDetailedObject ,lendItemsDetailedObject};
}
