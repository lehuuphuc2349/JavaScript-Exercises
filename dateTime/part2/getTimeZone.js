function seconds_with_leading_zeros(dt) {
  return /\((.*)\)/.exec(new Date().toString())[1];
}
var dt = new Date();
console.log(seconds_with_leading_zeros(dt));
