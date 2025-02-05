function createStockPrice() {
  const stockPrice = getStockprice(stockId);
  const numRow = stockPrice.length;
  const numColumn = stockPrice[0].length;
  const writtenRange = getRange(numRow,numColumn);
  writeStockPrice(writtenRange,stockPrice);
}
