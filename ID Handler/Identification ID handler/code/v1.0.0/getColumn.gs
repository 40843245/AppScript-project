function getColumn(array,nthIndex){
  const nthColumn = array.reduce((acc, row) => {
    acc.push(row[nthIndex]);
    return acc;
  }, []);
  return nthColumn;
}

function testGetColumn(){
  const array2D = [
    [
      1,2,3,
    ],
    [
      4,5,6,
    ]
  ];

  Logger.log(getColumn(array2D,1));
}
