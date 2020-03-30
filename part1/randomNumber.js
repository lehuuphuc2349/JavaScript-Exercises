const num = Math.ceil(Math.random() * 10);
console.log(num);
const usersNum = prompt("Guess the number between 1 and 10 inclusive");
if (usersNum == num) {
  console.log("Matched");
} else console.log("Not matched");
