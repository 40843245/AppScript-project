function negateArray(array1) {
  let newArray = [];
  for(item of array1){
    if(isNotEmpty(item) && !Number.isNaN(item)){
      newArray.push(-1*item);
    }else{
      newArray.push(item);
    }
  }
  return newArray;
}

function testNegateArray(){
  const array1 = [];
  const array2 = [1,2,3,4];
  const array3 = ['',2,'34',4];

  Logger.log(negateArray(array1));
  Logger.log(negateArray(array2));
  Logger.log(negateArray(array3));
}
