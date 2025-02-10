String.toSafeBool = function(elem){
  if(elem === 'true'){
    return true;
  }
  if(elem === 'false'){
    return false;
  }
  throw new Error("Can not convert a string to boolean safely.");
}

String.toBool = function(elem){
  if(elem == true){
    return true;
  }
  if(elem === 'true'){
    return true;
  }
  if(elem === 'TRUE'){
    return true
  }
  if(elem == false){
    return false;
  }
  if(elem === 'false'){
    return false;
  }
  if(elem === 'FALSE'){
    return false;
  }
  throw new Error("Can not convert a string "+ elem +" to boolean.");
}

function testPrototypeToSafeBool(){
  Logger.log(String.toSafeBool('true'));
  Logger.log(String.toSafeBool('false'));
  Logger.log(String.toSafeBool(''));
}
