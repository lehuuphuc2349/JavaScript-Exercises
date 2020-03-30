function checkContainer(array) {
  if (array.indexOf(1) == -1 || array.indexOf(3) == -1) {
    return true;
  } else return false;
}
console.log(checkContainer([1, 2, 3]));
console.log(checkContainer([4, 5, 6]));
