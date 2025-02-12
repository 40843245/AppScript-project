class CityMapper{
  constructor(){
    this.cityMap = undefined;
    this.build();
  }

  build(){
    let cityMap = undefined;
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SpreadsheetEnum.CITY_MAPPING);
    if(spreadsheet != null){
      cityMap = getRanges(spreadsheet,1,1,26,2).getValues();
    }
    this.cityMap = cityMap;
  }

  getCityNo(id){
    const cityMapLength = this.cityMap.length;
    for(let i=0;i<cityMapLength;i++){
      const key = this.cityMap[i][0];
      const value = this.cityMap[i][1];
      if(key == id){
        return value;
      }
    }
    return -1;
  }
}

function testClassCityMapper(){
  const cityMapper = new CityMapper();
  Logger.log(cityMapper.getCityNo('A'));
}
