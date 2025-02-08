function isEmpty(elem) {
  return !isNotEmpty(elem);
}

//// test function

function testIsNotEmpty(){
  Logger.log(isEmpty(null));
  Logger.log(isEmpty(undefined));
  Logger.log(isEmpty(''));
  Logger.log(isEmpty(new Date()));
  Logger.log(isEmpty([]));
  Logger.log(isEmpty(""));
  Logger.log(isEmpty(null));
  Logger.log(isEmpty(" "));
}
