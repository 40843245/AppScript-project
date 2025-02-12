String.isAlpha = function(text){
  if(isEmpty(text) == true){
      return false;
  }

  let textLength = text.length;
  for(let i=0;i<textLength;i++){
    const code = text.charCodeAt(i);
    if (!(code >= 65 && code <= 90) && !(code >= 97 && code <= 122)) {
        return false;
    }
  }

  return true;
}

String.isNumber = function(text){
  if(isEmpty(text) == true){
    return false;
  }

  let textLength = text.length;
  for(let i=0;i<textLength;i++){
    const code = text.charCodeAt(i);
    if (!(code >= 48 && code <= 57)) {
      return false;
    }
  }

  return true;
}

function testPrototype(){
  const id = 'N126537175';
  Logger.log(String.isAlpha('ASQEQE'));
  Logger.log(String.isNumber(id[1]));
  Logger.log(String.isNumber('12'));
}
