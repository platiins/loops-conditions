/* 
write a program that requests a number from a user 
and finds the summation of every number from 1 to num
*/

const userNum = parseInt(prompt("please enter the number:"));

let sum = 0;

for (let i = 1; i <= userNum; i++) {
  sum += i;
}

console.log(`the summation of every number is ${sum}`);
