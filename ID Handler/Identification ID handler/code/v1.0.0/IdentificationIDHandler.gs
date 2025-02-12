class IdentificationIDHandler{

  static getWeightArray(){
    const weightArray = [
      1,9,8,7,6,5,4,3,2,1,1,
    ];
    return weightArray;
  }

  static isGender(id){
    if(isEmpty(id) == true){
      return false;
    }
    return id[1] === '1' 
        || id[1] === '2';
  }

  
  static isFormatValid(id){
    if(isEmpty(id) == true){
      return false;
    }

    if(String.isAlpha(id[0]) == false){
      return false;
    }

    const idLength = id.length;
    if(idLength != 10){
      return false;
    }

    if(String.isAlpha(id[0]) == false){
      return false;
    }

    if(IdentificationIDHandler.isGender(id) == false){
      return false;
    }

    const substr = id.substring(1);
    if(String.isNumber(substr) == false){
      return false;
    }

    return true;
  }

  static isIdentificationIDValid(id){
    if(isEmpty(id) == true){
      return false;
    }

    const idLength = id.length;
    const cityId = id[0];
    const cityMapper = new CityMapper();
    const cityNo = cityMapper.getCityNo(cityId);    
    const weightArray = IdentificationIDHandler.getWeightArray();

    if(IdentificationIDHandler.isFormatValid(id) == false){
      return false;
    }

    const numberArray = [];
    numberArray.push(Math.floor(cityNo / this.number));
    numberArray.push(Math.floor(cityNo % this.number));
    for(let i=1;i<idLength;i++){
      numberArray.push(parseInt(id[i]));
    }

    const mathArrayHandler = new MathArrayHandler(weightArray,numberArray);
    const crossProductResult = mathArrayHandler.getCrossProduct();

    if(crossProductResult % IdentificationCardEnum.MOD == 0 ){
      return true;
    }

    return false;
  } 
}

function testClassIdentificationIDHandler(){
  const idArray = [
    'A163922922',
    'N126537175',
  ];
  const idArrayLength = idArray.length;
  for(let i=0;i<idArrayLength;i++){
    const id=idArray[i];
    Logger.log(id);
    Logger.log(IdentificationIDHandler.isFormatValid(id));
  }
}
