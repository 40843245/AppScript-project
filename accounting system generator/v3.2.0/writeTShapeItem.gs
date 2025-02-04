function writeTShapeItem(currentWrittenPosition,itemName,itemDescriptions) {
  const {currentWrittenRow,currentWrittenColumn} = currentWrittenPosition;
  const currentWrittenCell = getCell(currentWrittenRow,currentWrittenColumn);
  const itemCell = getCell(currentWrittenRow,currentWrittenColumn+1);
  const rightOneCell = itemCell.offset(0,1);
  const rightTwoCell = itemCell.offset(0,2);

  currentWrittenCell.setValue('項目');
  itemCell.setValue(itemName);

  currentWrittenCell.setBorder(false,false,true,false,null,null,'black', SpreadsheetApp.BorderStyle.SOLID_MEDIUM); 
  itemCell.setBorder(false,false,true,false,null,null,'black', SpreadsheetApp.BorderStyle.SOLID_MEDIUM);  
  
  rightOneCell.setBorder(false,false,true,false,null,null,'black', SpreadsheetApp.BorderStyle.SOLID_MEDIUM); 
  rightTwoCell.setBorder(false,false,true,false,null,null,'black', SpreadsheetApp.BorderStyle.SOLID_MEDIUM);  

  let lendDescriptionsLength = 0;
  let borrowDescriptionsLength = 0;
  
  if(itemDescriptions != null && itemDescriptions != undefined){
    if(Object.hasOwn(itemDescriptions,'borrow')){
      const borrowDescriptions = itemDescriptions['borrow'];
      borrowDescriptionsLength = borrowDescriptions.length;
      for(let i=0;i<borrowDescriptionsLength;i++){
        const item = borrowDescriptions[i];
        const date = item['date'];
        const amount = item['amount'];
        const itemWrittenRow = currentWrittenRow+i+1;
        const itemWrittenColumn = currentWrittenColumn;
        const dateCell = getCell(itemWrittenRow,itemWrittenColumn);
        const amountCell = getCell(itemWrittenRow,itemWrittenColumn+1);
        dateCell.clearFormat();
        dateCell.setValue(date);
      
        amountCell.setNumberFormat('General');
        amountCell.setValue(amount);

        amountCell.setBorder(null,null,null,true,null,null,'black', SpreadsheetApp.BorderStyle.SOLID_MEDIUM); 
      }
    }

    if(Object.hasOwn(itemDescriptions,'lend')){
      const lendDescriptions = itemDescriptions['lend'];
      lendDescriptionsLength = lendDescriptions.length;
      lendDescriptionsLength = 1;
      for(let i=0;i<lendDescriptionsLength;i++){
        const item = lendDescriptions[i];
        const date = item['date'];
        const amount = item['amount'];
        const itemWrittenRow = currentWrittenRow+i+1;
        const itemWrittenColumn = currentWrittenColumn+2;
        const dateCell = getCell(itemWrittenRow,itemWrittenColumn);
        const amountCell = getCell(itemWrittenRow,itemWrittenColumn+1);
        dateCell.clearFormat();
        dateCell.setValue(date);
        
        amountCell.setNumberFormat('General');
        amountCell.setValue(amount);

        dateCell.setBorder(null,true,null,null,null,null,'black', SpreadsheetApp.BorderStyle.SOLID_MEDIUM); 
      }
    }
  }
  const maxLength = Math.max(lendDescriptionsLength,borrowDescriptionsLength);
  const lastWrittenRow = currentWrittenRow + maxLength;
  return lastWrittenRow + 1 + 1;
}
