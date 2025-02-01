function recordItems(
  borrowItemsArray,
  lendItemsArray,
  borrowAmountsArray,
  lendAmountsArray
){
  const negatedLendAmountsArray = negateArray(lendAmountsArray);
  let itemsObject = Object.create({});
  itemsObject = recordOneColumn(borrowItemsArray,borrowAmountsArray,itemsObject);  
  itemsObject = recordOneColumn(lendItemsArray,negatedLendAmountsArray,itemsObject);  
  return itemsObject;
}

function recordOneColumn(
  itemsArray,
  amountsArray,
  oldObject
){
  const itemsArrayLength = itemsArray.length;
  throwExceptionNotSameLength(itemsArray,amountsArray);

  for(let itemIndex = 0; itemIndex < itemsArrayLength;itemIndex++){
    const item = itemsArray[itemIndex];
    const amount = amountsArray[itemIndex];
    if(isNotEmpty(item)){
      if(!Object.hasOwn(oldObject,item)){
        oldObject[item] = amount;
      }else{
        oldObject[item] += amount;
      }
    }
  }
  return oldObject;
}
