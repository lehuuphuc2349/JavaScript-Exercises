function miCroBit(number) {
  return parseInt(
    number
      .toString(2)
      .split("")
      .reverse()
      .join(""),
    2
  );
}
console.log(miCroBit(56));
console.log(miCroBit(234));
