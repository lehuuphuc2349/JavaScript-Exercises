function cToF(celsius) {
  var fahrenheit = (9 * celsius) / 5 + 32;
  console.log(`${celsius} \xB0C = ${fahrenheit}\xB0F`);
}
function fToC(fahrenheit) {
  var celsius = (5 * (fahrenheit - 32)) / 9;
  console.log(`${fahrenheit}\xB0F = ${celsius}\xB0C`);
}
cToF(60);
fToC(45);
