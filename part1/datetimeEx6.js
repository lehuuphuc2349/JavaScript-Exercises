const today = new Date();
const day = today.getDay();
const daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday"
];
console.log(`Today is: ${daylist[day]}`);
let hours = today.getHours();
const minutes = today.getMinutes();
const second = today.getSeconds();
let prepand = hours >= 12 ? "PM" : "AM";
hours = hours >= 12 ? hours - 12 : hours;
if (hours === 0 && prepand === "PM") {
  if (second === 0 && minute === 0) {
    hours = 12;
    prepand = "Noon";
  } else {
    hours = 12;
    hours = "PM";
  }
}
if (hours === 0 && prepand === "AM") {
  if (second === 0 && minute === 0) {
    hours = 12;
    prepand = "Midnight";
  } else {
    hours = 12;
    prepand = "AM";
  }
}
console.log(`Curent time: ${hours}${prepand} : ${minutes} : ${second}`);
