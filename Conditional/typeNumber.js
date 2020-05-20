const typeNumber = () => {
  var type = ["even", "odd"];
  for (var i = 0; i <= 15; i++) {
    var outputType = "";
    if (i % 2 === 0) {
      outputType = type[0];
    } else outputType = type[1];
    console.log(`${i} is a ${outputType}`);
  }
};
typeNumber();
