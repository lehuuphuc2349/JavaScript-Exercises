function sort(names) {
  string = "";
  ss = "";
  namestring = names.split("");

  for (j = 0; j < namestring.length; j++) {
    for (i = j; i < namestring.length; i++) {
      if (string.includes(namestring[i])) break;
      else string += namestring[i];
    }
    if (ss.length < string.length) ss = string;
    string = "";
  }
  return ss;
}
console.log(sort("google.com"));
