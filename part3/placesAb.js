function placesAB(string) {
  return /a...b/.test(string) || /b...a/.test(string);
}
console.log(placesAB("aphucb"));
console.log(placesAB("alllb"));
