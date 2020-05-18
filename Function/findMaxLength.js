const findMAXlength = (string) =>
  string.split(" ").filter((v, i) => (v[0].length > v[i].length ? v[0] : v[i]));
console.log(findMAXlength("Phuc Dep Trai"));

const findmaxlength = (string) =>
  string
    .split(" ")
    .filter((v, i) => (v[i].length > v[i + 1].length ? v[i] : v[i + 1]));
console.log(findmaxlength("Phuc Dep Trai"));

const findMaxElements = (string) => {
  let array = string.split(" ");
  let count = 0;
  let max = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > max) {
      max = array[i];
      count++;
    }
  }
  return max;
};
console.log(findMaxElements("Phucc Dep Trai"));
