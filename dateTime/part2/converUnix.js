const unixTimestamp = (time) => {
  var date = new Date(time * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var second = "0" + date.getSeconds();
  return `${hours}: ${minutes.substr(-2)}: ${second.substr(-2)} `;
};
console.log(unixTimestamp(1412743274));
