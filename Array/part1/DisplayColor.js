var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
var o = ["st", "nd", "rd", "th"];

for (var i = 0; i < color.length; i++) {
  if (o[i] === undefined) {
    o[i] = "th";
  }
  var count = i + 1;
  var output = `${count}${o[i]} choice is ${color[i]}`;
  console.log(output);
}
