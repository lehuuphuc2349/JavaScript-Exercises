const removeString = (string) => {
  string === null || string === "" ? false : string.toString();
  return string.replace(/[^\x20-\x7E]/g, "");
};
console.log(removeString("äÄçÇéÉêPHP-MySQLöÖÐþúÚ"));
