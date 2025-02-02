function recordItems(
  borrowItemsArray,
  lendItemsArray,
  borrowAmountsArray,
  lendAmountsArray
){
  const negatedLendAmountsArray = negateArray(lendAmountsArray);

  Logger.log(borrowItemsArray);
  Logger.log(lendItemsArray);
  Logger.log(borrowAmountsArray);
  Logger.log(lendAmountsArray);
  Logger.log(negatedLendAmountsArray);

  let itemsObject = Object.create({});
  let itemsDetailedObject = Object.create({});

  itemsObject = recordOneColumn(borrowItemsArray,borrowAmountsArray,itemsObject);  
  itemsObject = recordOneColumn(lendItemsArray,negatedLendAmountsArray,itemsObject);  

  itemsDetailedObject = recordWithDetail(borrowItemsArray,borrowAmountsArray,lendItemsArray,lendAmountsArray,itemsDetailedObject);

  return { itemsObject , itemsDetailedObject };
}

function recordOneColumn(
  itemsArray,
  amountsArray,
  oldObject,
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


function recordWithDetail(
  borrowItemsArray,
  borrowAmountsArray,
  lendItemsArray,
  lendAmountsArray,
  oldDetailedObject
){
  const borrowItemsArrayLength = borrowItemsArray.length;

  throwExceptionNotSameLength(borrowItemsArray,borrowAmountsArray);

  for(let itemIndex = 0; itemIndex < borrowItemsArrayLength;itemIndex++){
    const item = borrowItemsArray[itemIndex];
    const amount = borrowAmountsArray[itemIndex];
    if(isNotEmpty(item)){
      if(!Object.hasOwn(oldDetailedObject,item)){
        oldDetailedObject[item] = {'borrow': [amount]};
      }else{
        oldDetailedObject[item]['borrow'].push(amount);
      }
    }
  }

  const lendItemsArrayLength = lendItemsArray.length;

  throwExceptionNotSameLength(lendItemsArray,lendAmountsArray);

  for(let itemIndex = 0; itemIndex < lendItemsArrayLength;itemIndex++){
    const item = lendItemsArray[itemIndex];
    const amount = lendAmountsArray[itemIndex];
    if(isNotEmpty(item)){
      if(!Object.hasOwn(oldDetailedObject,item)){
        oldDetailedObject[item] = {'lend': [amount]};
      }else{
        oldDetailedObject[item]['lend'].push(amount);
      }
    }
  }
  return oldDetailedObject;
}
