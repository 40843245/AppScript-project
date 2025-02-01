Object.prototype.toArray = function(targetObject){
  const entries = Object.entries(targetObject);
  return entries;
}

function testFunction(){
  const object1 = new Object();
  const object2 = {
    'key1':1,
    'key2':2
  };
  Logger.log(Object.toArray(object1));
  Logger.log(Object.toArray(object2));
}
