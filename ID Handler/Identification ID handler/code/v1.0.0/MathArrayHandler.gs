class MathArrayHandler{
  constructor(array1,array2){
    this.array1 = array1;
    this.array2 = array2;
  }

  hasSameLength(){
    return this.array1.length == this.array2.length;
  }

  canDoCrossProduct(){
    return this.hasSameLength();
  }

  getCrossProduct(){
    if(this.canDoCrossProduct() == false){
      throw new Error('Can not do cross product for array1 and array2');
    }

    let total = 0;
    const array1Length = this.array1.length;
    
    for(let i=0;i<array1Length;i++){
      const array1Elem = this.array1[i];
      const array2Elem = this.array2[i];
      total += array1Elem * array2Elem;
    }

    return total;
  }
}

function testMathArrayHandler(){
  const array1 = [2,4,2,3,8,9,2,7,3,0,7];
  const array2 = [1,9,8,7,6,5,4,3,2,1,1]
  const mathArrayHandler = new MathArrayHandler(array1,array2);
  Logger.log(mathArrayHandler.getCrossProduct());
}
