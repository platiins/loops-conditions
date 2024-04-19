// Request a number and check if the number is odd, even or zero. Use switch.

const userNum = Number(prompt("please enter a number"));

switch (true) {
  case userNum % 2 === 0 && userNum > 0:
    console.log("your number is even");
    break;
  case userNum % 2 === 1:
    console.log("your number is odd");
    break;
  case userNum === 0:
    console.log("your number is 0");
    break;
  default:
    console.log("unable to identify");
}
