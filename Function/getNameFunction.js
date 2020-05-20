function getFunctionName() {
  console.log(arguments.callee.name);
}
getFunctionName();
