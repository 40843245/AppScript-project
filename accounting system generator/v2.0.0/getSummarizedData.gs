function getSummarizedData(
  borrowItemsArray,
  lendItemsArray,
  borrowAmountsArray,
  lendAmountsArray,
  datesArray,
){
  let itemsDetailedObject = Object.create({});

  itemsDetailedObject = recordWithDateWithDetail(
    borrowItemsArray,
    borrowAmountsArray,
    lendItemsArray,
    lendAmountsArray,
    datesArray
  )
  return itemsDetailedObject ;
}
