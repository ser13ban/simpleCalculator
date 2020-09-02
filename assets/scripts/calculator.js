let currentResult = 0;
function transformInputToNumber(){
    return parseInt(userInput.value);
}
function add () {
    const userNumber = transformInputToNumber();
    const result = currentResult + userNumber;
    outputResult(result,`${currentResult} + ${userNumber}`)
    currentResult  = result;
   
}
function sub () {
    const userNumber = transformInputToNumber();
    const result = currentResult - userNumber;
    outputResult(result,`${currentResult} - ${userNumber}`)
    currentResult  = result;
   
}
function mul () {
    const userNumber = transformInputToNumber();
    const result = currentResult * userNumber;
    outputResult(result,`${currentResult} *  ${userNumber}`)
    currentResult  = result;
   
}
function div () {
    const userNumber = transformInputToNumber();
    const result = currentResult / userNumber;
    outputResult(result,`${currentResult} / ${userNumber}`)
    currentResult  = result;
   
}
addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',sub);
multiplyBtn.addEventListener('click',mul);
divideBtn.addEventListener('click', div);
