let currentResult = 0;
function transformInputToNumber() {
  return parseInt(userInput.value);
}
function outPutWithSign(userNumber, result, sign) {
  if (userNumber < 0) {
    outputResult(result, `${currentResult} ${sign} (${userNumber})`);
  } else outputResult(result, `${currentResult} ${sign} ${userNumber}`);
}
function add() {
  const userNumber = transformInputToNumber();
  const result = currentResult + userNumber;
  outPutWithSign(userNumber, result, "+");
  currentResult = result;
}
function sub() {
  const userNumber = transformInputToNumber();
  const result = currentResult - userNumber;
  outPutWithSign(userNumber, result, "-");
  currentResult = result;
}
function mul() {
  const userNumber = transformInputToNumber();
  const result = currentResult * userNumber;
  outPutWithSign(userNumber, result, "*");
  currentResult = result;
}
function div() {
  const userNumber = transformInputToNumber();
  const result = currentResult / userNumber;
  outPutWithSign(userNumber, result, "/");
  currentResult = result;
}
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", sub);
multiplyBtn.addEventListener("click", mul);
divideBtn.addEventListener("click", div);
