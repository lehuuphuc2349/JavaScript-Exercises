const currenCy = (dolar1, dolar2, calulator) => {
  if (dolar1.length === 0 || dolar2.length === 0) return -1;
  let result = "";
  let temp1 = dolar1.split("$");
  let temp2 = dolar2.split("$");

  if (calulator === "add") {
    result += `$ ${temp1[1]} + ${temp2[2]}`;
  }
  if (calulator === "sub") {
    if (temp1[1] >= temp2[1]) {
      result += `$ ${temp1[1]} - ${temp2[2]}`;
    } else {
      result += `$ ${temp1[2]} - ${temp2[1]}`;
    }
  }
  if (calulator === "div") {
    if (temp1[1] >= temp2[1]) {
      result += `$ ${temp1[1]} / ${temp2[2]}`;
    } else {
      result += `$ ${temp1[2]} / ${temp2[1]}`;
    }
  }
  if (calulator === "mul") {
    result += `$ ${temp1[1]} / ${temp2[2]}`;
  }
  return result;
};
console.log(currenCy(("$20.2", "$21.2", "sub")));

// var dolar = "$20";
// var temp = dolar.split("$");
// console.log(temp[1]);

var n1 = "$40.24";
var n2 = "$21.57";
var regp = /[^0-9.-]+/g;

console.log(
  parseFloat(n1.replace(regp, "")) + parseFloat(n2.replace(regp, ""))
);

console.log(
  parseFloat(n1.replace(regp, "")) - parseFloat(n2.replace(regp, ""))
);

console.log(
  parseFloat(n1.replace(regp, "")) * parseFloat(n2.replace(regp, ""))
);

console.log(
  parseFloat(n1.replace(regp, "")) / parseFloat(n2.replace(regp, ""))
);
