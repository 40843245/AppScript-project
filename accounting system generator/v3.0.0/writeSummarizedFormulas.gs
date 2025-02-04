function writeSummarizedFormulas(writtenRange) {
  const numRows = writtenRange.getNumRows();
  for(let i=1;i<=numRows;i++){
      const formulaCell = writtenRange.getCell(i,2);
      writeSummarizedFormula(formulaCell);
  }
}
