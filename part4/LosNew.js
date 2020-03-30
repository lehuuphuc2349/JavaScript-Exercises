function LosNewCheck(cityName) {
  if (cityName.substring(0, 3) == "Los" || cityName.substring(0, 3) == "New") {
    return cityName;
  } else return " ";
}
console.log(LosNewCheck("New York"));
console.log(LosNewCheck("Los Angeles"));
console.log(LosNewCheck("Da Nang"));
