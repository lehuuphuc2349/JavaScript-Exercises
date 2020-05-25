const nonGetArray = (array, number) => {
  let lastElements = array[array.length - 1];
  let result = array.slice(Math.max(array.length - number, 0));
  console.log(`last Element: ${lastElements}`);
  console.log(`String Replace: ${result}`);
};
nonGetArray([1, 23, 5, 24, 2], 3);
