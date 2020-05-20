const stringLongest = (string) => {
  var stringTemp = string.split(" ");
  var max = Math.max(...stringTemp.map((element) => element.length));
  var result = stringTemp.filter((x) => x.length == max);
  return result;
};
console.log(stringLongest("PHUC DEP TRAIII"));

const part2 = (string) => {
  return string.reduce(function (name, country) {
    return name.length > country.length ? name : country;
  }, "");
};
console.log(part2(["phuc", "dep", "traaiiii"]));
