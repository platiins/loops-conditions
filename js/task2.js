// Request two numbers and find only their largest common divisor.

const firstNum = Number(prompt("enter first number:"));
const secondNum = Number(prompt("enter second number:"));
let result;

for (let i = 1; i <= Math.min(firstNum, secondNum); i++) {
  if (firstNum % i === 0 && secondNum % i === 0) {
    result = i;
  }
}

console.log(`largest common divisor: ${result}`);
