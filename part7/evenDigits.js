function evenDigits(number) {
  var even_digtis = 0;
  var arrayNumber = ("" + number).split("");
  for (var i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] % 2 === 0) {
      even_digtis++;
    }
  }
  return even_digtis;
}
console.log(evenDigits(123));
console.log(evenDigits(1000));

function digitEvenNumber(number) {
  var ctr = 0;
  while (number) {
    ctr += number % 2 === 0;
    number = Math.floor(number / 10);
  }
  return ctr;
}
console.log(digitEvenNumber(1200));
console.log(digitEvenNumber(NaN));
