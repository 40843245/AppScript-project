function writeSummarizedItems(writtenRange,itemsDetailedObject){
  const { borrowItemsDetailedObject , lendItemsDetailedObject } = itemsDetailedObject;
  const mergedObjects = Object.mergeByExtendingProperty(borrowItemsDetailedObject,lendItemsDetailedObject);
  writeSummarizedItem(writtenRange,borrowItemsDetailedObject);  
}
