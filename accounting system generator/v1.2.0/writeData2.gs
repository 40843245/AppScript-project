function writeData2(writtenRange,itemsDetailedObject) {
  const entries = Object.entries(itemsDetailedObject);
  const entriesLength = entries.length;

  let itemIndex = 0;
  for(let i=0;i<entriesLength;i++){
    const entry = entries[i];
    const [key,value] = entry;
    const itemCell = writtenRange.getCell(i+1,1);
    const borrowsAmount = value['borrow'];
    const lendsAmount = value['lend'];


    let isNonNull = false;
    if(borrowsAmount != null){
      isNonNull = true;
      const borrowsAmountLength = borrowsAmount.length;
      for(let j=0;j<borrowsAmountLength;j++){
        const amount = borrowsAmount[j];
        const amountCell = writtenRange.getCell(itemIndex+1,3);
        amountCell.setValue(amount);
        itemIndex++;
      }
    }

    if(lendsAmount != null){
      isNonNull = true;
      const lendsAmountLength = lendsAmount.length;
      for(let j=0;j<lendsAmountLength;j++){
        const amount = lendsAmount[j];
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
