function writeTShapeItems(firstWrittenPosition,itemsDetailedObject){
  Logger.log('writeTShapeItems');
  Logger.log(JSON.stringify(itemsDetailedObject,'=','->'));
  const {firstWrittenRow,firstWrittenColumn} = firstWrittenPosition;
  const currentWrittenColumn = firstWrittenColumn;
  let currentWrittenRow = firstWrittenRow;

  Logger.log(JSON.stringify(Object.entries(itemsDetailedObject).length,'=','->'));
  Object.entries(itemsDetailedObject).map(function(entry){
      const [keys,values] = entry;
      const currentWrittenPosition = { currentWrittenRow, currentWrittenColumn};
      const lastWrittenRow = writeTShapeItem(currentWrittenPosition,keys,values);
      currentWrittenRow = lastWrittenRow;
  });
}
