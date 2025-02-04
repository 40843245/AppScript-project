function isEmpty(elem) {
  return !isNotEmpty(elem);
}

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
