function check1and3(array) {
  if (array.indexOf(1) != -1 || array.indexOf(3) != -1) {
    return true;
  } else return false;
}
console.log(check1and3([1, 0, 3]));
console.log(check1and3([32, 13, 3]));
