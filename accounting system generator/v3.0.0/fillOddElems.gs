/*
  fill elem to odd index from even index given an array.
  consider an array with fourth elems (note that index start at 0)
  It will fill 0th elem to 1th elem then 2th to 3th in Array in JS
  
  use cases:
  use case1:
  [1,null,3,null] => [1,1,3,3]
*/
function fillOddElems(array1) {
  const array1Length = array1.length;
  for(let i=0;i<array1Length;i+=2){
    array1[i+1] = array1[i];
  }
  return array1;
}

function testFillOddElems(){
  Logger.log(fillOddElems([1,null,3,null]));
  Logger.log(fillOddElems([1,null,3,2]));
  Logger.log(fillOddElems([,null,3,null]));
  Logger.log(fillOddElems([1,null,3,]));
  Logger.log(fillOddElems([1,null,,]));
}
