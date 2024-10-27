let operand1 = 10;
let operand2 = 5;
const prompt = require('prompt-sync')();
let sign = prompt('Введите знак арифметической операции (+, -, *, /): ');

let result;

switch (sign) {
    case '+':
        result = operand1 + operand2;
        break;
    case '-':
        result = operand1 - operand2;
        break;
    case '*':
        result = operand1 * operand2;
        break;
    case '/':
}

if (result !== undefined) {
    console.log(`Результат: ${result}`);
}