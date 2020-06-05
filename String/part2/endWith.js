const endWithString = (string, charEnd) => {
  let temp = string.split(" ");
  if (charEnd === "") {
    return false;
  }
  if (temp[temp.length - 1] === charEnd) {
    return true;
  } else {
    false;
  }
};

console.log(endWithString("JS PHP PYTHON", "PYTHON"));
console.log(endWithString("JS PHP PYTHON", ""));
