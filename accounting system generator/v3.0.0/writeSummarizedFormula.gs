/*
$H3=IF(ISNUMBER($I3),$I3,0)-IF(ISNUMBER($J3),$J3,0)
*/
function writeSummarizedFormula(cell) {
  const rightOneCell = cell.offset(0,1);
  const rightTwoCell = cell.offset(0,2);
  Logger.log(rightOneCell.getA1Notation());
  Logger.log(rightTwoCell.getA1Notation());
  const rightOneCellA1Notation = '$'+ rightOneCell.getA1Notation();
  const rightTwoCellA1Notation = '$'+rightTwoCell.getA1Notation();
  Logger.log(rightOneCellA1Notation);
  Logger.log(rightTwoCellA1Notation);
  const formulaText = '='+'IF(ISNUMBER('+rightOneCellA1Notation+'),'+rightOneCellA1Notation+',0)'+'-'+'IF(ISNUMBER('+rightTwoCellA1Notation+'),'+rightTwoCellA1Notation+',0)';
  Logger.log(formulaText);
  cell.setFormula(formulaText);
}
