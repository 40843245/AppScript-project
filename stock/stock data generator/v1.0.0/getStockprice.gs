function getStockprice(ticker)  {
  let url = 'https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=202412&stockNo='+ticker;
  let response = UrlFetchApp.fetch(url);
  Logger.log(response.getContentText())
  let data = JSON.parse(response.getContentText());

  Logger.log(data);
  Logger.log(data['data']);
  return data['data']
}

function testGetStockPrice(){
  Logger.log(getStockprice(2330));
}
