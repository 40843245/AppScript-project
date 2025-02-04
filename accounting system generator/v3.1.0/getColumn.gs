function getColumn(array,nthIndex){
  const nthColumn = array.reduce((acc, row) => {
    acc.push(row[nthIndex]);
    return acc;
  }, []);
  return nthColumn;
}
