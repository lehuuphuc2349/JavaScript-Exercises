function findGivenNumber(array1, array2) {
  var sameNumber = 0;
  for (var i = 0; i < array1.length; i++) {
    for (j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        sameNumber++;
      }
    }
  }
  return sameNumber;
}
console.log(findGivenNumber([1, 2, 3], [1, 2, 3]));
