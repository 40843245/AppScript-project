Object.prototype.mergeByExtendingProperty = function(object1,object2){
  const object3 = Object.assign(object1);
  Object.entries(object2).map(function(entry){
      const key = entry[0];
      const value = entry[1];

      if(Object.hasOwn(object3,key)){
        object3[key] = {...object3[key], ...value};
      }else{
        object3[key] = value;
      }
    } 
  );
  return object3;
}

function testFunction2(){
  const object1 = {'應付營業稅':{'borrow':[{'amount':1000.0, 'date':'Wed Jan 01 00:00:00 GMT+08:00 2020'}]}, '辦公費':{'borrow':[{'amount':20000.0, 'date':'Tue Jan 01 00:00:00 GMT+08:00 2019'}]}, '現金':{'borrow':[{'date':'Fri Jan 10 00:00:00 GMT+08:00 2020', 'amount':400000.0}, {'amount':3540000.0, 'date':'Fri Mar 20 00:00:00 GMT+08:00 2020'}]}, '訴訟費':{'borrow':[{'amount':15000.0, 'date':'Wed Jan 15 00:00:00 GMT+08:00 2020'}]}};

  const object2 = {'業主投資':{'lend':[{'amount':400000.0, 'date':null}]}, '現金':{'lend':[{'amount':20000.0, 'date':null}, {'amount':1000.0, 'date':null}, {'date':null, 'amount':15000.0}]}, '訴訟費之收回':{'lend':[{'amount':3540000.0, 'date':null}]}};

  Logger.log(JSON.stringify(object1),'=','->');
  Logger.log(JSON.stringify(object2),'=','->');
  Logger.log(JSON.stringify(Object.mergeByExtendingProperty(object1,object2)),'=','->');
}

