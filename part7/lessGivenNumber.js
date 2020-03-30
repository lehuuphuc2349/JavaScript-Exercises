function lessGivenNumber(number) {
  while (number % 10) {
    number++;
  }
  return number;
}
console.log(lessGivenNumber(697));
console.log(lessGivenNumber(1998));
