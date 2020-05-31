const timeConvert = (minutes) => {
  return `${Math.floor(minutes / 60)}hours and ${Math.floor(
    minutes % 60
  )} minutes`;
};
console.log(timeConvert(200));
