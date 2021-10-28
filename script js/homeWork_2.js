
let number = prompt('Send number');
let numberTwo = prompt('Send number');
number = Number(number);
numberTwo = Number(numberTwo);
let result = `Calculations are finished!\nSum: ${number + numberTwo}\nDiff: ${number - numberTwo}\nMult: ${number * numberTwo}\nDiv: ${number / numberTwo}`;
let finishResult = alert(result);
console.log(result);
