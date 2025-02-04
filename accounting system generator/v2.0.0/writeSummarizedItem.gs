function writeSummarizedItem(writtenRange,itemDetailedObject) {
  Logger.log(itemDetailedObject);
  const entries = Object.entries(itemDetailedObject);
  const entriesLength = entries.length;
  let itemIndex = 0;
  for(let i=0;i<entriesLength;i++){
    const entry = entries[i];
    const [key,value] = entry;
    const itemCell = writtenRange.getCell(itemIndex+1,1);
    const borrowItems = value['borrow'];
    const lendItems = value['lend'];
    let isNonNull = false;
    if(borrowItems != null){
      isNonNull = true;
      const borrowItemsLength = borrowItems.length;
      for(let j=0;j<borrowItemsLength;j++){
        const item = borrowItems[j];
        const amount = item['amount'];
        const amountCell = writtenRange.getCell(itemIndex+1,3);
        amountCell.setValue(amount);
        itemIndex++;
      }
    }

    if(lendItems != null){
      isNonNull = true;
      const lendItemsLength = lendItems.length;
      for(let j=0;j<lendItemsLength;j++){
        const item = lendItems[j];
        const amount = item['amount'];
        const amountCell = writtenRange.getCell(itemIndex+1,4);
        amountCell.setValue(amount);
        itemIndex++;
      }
    }

    if(isNonNull == true){
      itemCell.setValue(key);
    }
  }
}
