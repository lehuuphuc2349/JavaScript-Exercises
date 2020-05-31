const yesterday = (date1) => {
  let date = new Date(date1);
  return new Date(date.setDate(date.getDate() - 1)).toString();
};
console.log(yesterday("May 31, 2020"));
