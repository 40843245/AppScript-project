function throwExceptionNotSameLength(array1,array2) {
  if(notSameLength(array1,array2)){
    throw Error("Two arrays must have same length.");
  }
}
