function splitURL(data_url) {
  var data = data_url.split("://");
  var protocol = data[0];
  data = data[1].split(".com");
  var domain = data[1].split("/");
  if (data[1]) {
    return [protocol, domain, data[1]];
  }
  return [protocol, domain];
}
var url_add = "https://www.w3resource.com/javascript-exercises/";
var url_add1 = "https://www.facebook.com/";
console.log(splitURL(url_add));
console.log(splitURL(url_add1));
