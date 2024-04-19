// Define the number of digits in a requested number. For example, there are 4 digits in the number 6834.

const userNum = Number(
  prompt("enter the number to define the number of digits:")
);

const NumToStringLength = String(userNum).length;

for (let i = 1; i <= NumToStringLength; i++) {
  console.log(`your number has ${NumToStringLength} digits`);
}
