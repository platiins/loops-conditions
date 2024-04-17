// Request two numbers and find only their largest common divisor.

const firstNum = Number(prompt("enter first number:"));
const secondNum = Number(prompt("enter first number:"));

let result;

for (let i = 1; i <= firstNum; i++) {
  if (firstNum % i === 0 && secondNum % i === 0) {
    result = i;
  }
}

console.log(`largest common divisor: ${result}`);
