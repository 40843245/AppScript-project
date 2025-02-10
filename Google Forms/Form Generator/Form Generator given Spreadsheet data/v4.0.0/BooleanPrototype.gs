Boolean.isBool = function(elem){
  if(elem == true){
    return true;
  }
  if(elem == false){
    return true;
  }
  if(elem === 'true'){
    return true
  }
  if(elem === 'false'){
    return true;
  }
  if(elem === 'TRUE'){
    return true
  }
  if(elem === 'FALSE'){
    return true;
  }

  return false;
}

function testPrototypeIsSafeBool(){
  Logger.log(Boolean.isBool(true));
  Logger.log(Boolean.isBool(false));
  Logger.log(Boolean.isBool('true'));
  Logger.log(Boolean.isBool('false'));
  Logger.log(Boolean.isBool('TRUE'));
  Logger.log(Boolean.isBool('FALSE'));
}
