function isNotEmpty(elem) {
  return elem != null &&
         elem != undefined &&
         elem != '' &&
         elem != "" &&
         elem != [];      
}

//// test function

function testIsNotEmpty(){
  Logger.log(isNotEmpty(null));
  Logger.log(isNotEmpty(undefined));
  Logger.log(isNotEmpty(''));
  Logger.log(isNotEmpty(new Date()));
  Logger.log(isNotEmpty([]));
  Logger.log(isNotEmpty(""));
  Logger.log(isNotEmpty(null));
  Logger.log(isNotEmpty(" "));
}
