/* 
request favourite fruit from user. 
if it is Peach, Apple or Banana show message that it is your favourite food, 
if it is Pear or Grapefruit show message that you hate it 
otherwise show message that you have not tried this fruit
*/

const userFruit = prompt("what is your favourite fruit?").toLowerCase().trim();

if (userFruit === "peach" || userFruit === "apple" || userFruit === "banana") {
  console.log(`${userFruit} is my favourite food!`);
} else if (userFruit === "pear" || userFruit === "grapefruit") {
  console.error(`i hate ${userFruit}..`);
} else {
  console.error(`i have not tried ${userFruit} yet`);
}
