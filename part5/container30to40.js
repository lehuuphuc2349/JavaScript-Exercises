function container30and40(array) {
  if (array.indexOf(30) != -1 || array.indexOf(40) != -1) {
    return true;
  } else return false;
}
console.log(container30and40([30, 40, 2]));
console.log(container30and40([10, 23, 30]));
console.log(container30and40([23, 24, 40]));
console.log(container30and40([30, 40]));
