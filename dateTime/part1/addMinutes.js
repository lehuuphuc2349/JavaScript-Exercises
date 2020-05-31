const addMinutes = (date, minutes) => {
  return new Date(date.getTime() + minutes * 60000);
};
console.log(addMinutes(new Date(2020, 3, 23), 30).toString());
