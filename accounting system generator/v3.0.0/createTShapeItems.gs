function createTShapeItems() {
  let activeValues = readValues();
  let datesArray = getColumn(activeValues,0);
  let borrowItemsArray = getColumn(activeValues,1);
  let lendItemsArray = getColumn(activeValues,2);
  let borrowAmountsArray = getColumn(activeValues,3);
  let lendAmountsArray = getColumn(activeValues,4);
  const activeRange = getActiveRange();
  const firstWrittenColumn = activeRange.getLastColumn() + 1 + 1 + 4 + 1;
  const firstWrittenRow = activeRange.getRow();
  const firstWrittenPosition = {firstWrittenRow,firstWrittenColumn};
  
  datesArray = fillOddElems(datesArray);
  const itemsDetailedObject = recordWithDateWithDetail(
                                                borrowItemsArray,
                                                borrowAmountsArray,
                                                lendItemsArray,
                                                lendAmountsArray,
                                                datesArray
                                                );
  const {borrowItemsDetailedObject,lendItemsDetailedObject} = itemsDetailedObject;
  const mergedObject = Object.mergeByExtendingProperty(borrowItemsDetailedObject,lendItemsDetailedObject);
  writeTShapeItems(firstWrittenPosition,mergedObject);
}
