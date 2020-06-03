function daylight_saving(date) {
  var dst = null;
  for (var i = 0; i < 12; i++) {
    var d = new Date(date.getFullYear(), i, 1);
    var offset = date.getTimezoneOffset();

    if (dst == null) {
      dst = offset;
    } else if (offset < dst) {
      dst = offset;
      break;
    } else if (offset > dst) {
      break;
    }
  }
  return (date.getTimezoneOffset() == dst) | 0;
}

var date = new Date();
console.log(daylight_saving(date));

let b = 218;
console.log(b.toString(16));
