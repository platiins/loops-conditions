/* 
Request 10 numbers from a user 
and count, how many are positive, negative, or zero. 

Also, count odd and even. 
Display the statistics.

There's only one variable (not 10) needed for input by a user.
*/

let positiveValue = 0;
let negativeValue = 0;
let zeroValue = 0;
let oddValue = 0;
let evenValue = 0;

for (i = 0; i < 10; i++) {
  let userNum = Number(prompt(`please enter the number: ${i + 1}`));

  userNum % 2 === 0 ? evenValue++ : oddValue++;

  userNum > 0 ? positiveValue++ : userNum < 0 ? negativeValue++ : zeroValue++;
}

console.warn("ODD / EVEN?");
console.log(`you have entered even numbers x${evenValue} times`);
console.log(`you have entered odd numbers x${oddValue} times`);

console.warn("POSITIVE / NEGATIVE / ZERO?");
console.log(`you have entered positive numbers x${positiveValue} times`);
console.log(`you have entered negative numbers x${negativeValue} times`);
console.log(`you have entered zero x${zeroValue} times`);
