// Request a number and display all the divisors of it.

const userNum = parseInt(
  prompt("enter the number to display its all divisors:")
);

for (let i = 1; i <= userNum; i++) {
  if (userNum % i === 0) {
    console.log(i);
  }
}
