function showSelectedCity(event) {
  let getTokyoTime = moment()
    .tz("Asia/Tokyo")
    .format("dddd, MMMM D, YYYY h:m A");
  let getLondonTime = moment()
    .tz("Europe/London")
    .format("dddd, MMMM D, YYYY h:m A");
  let getParisTime = moment()
    .tz("Europe/Paris")
    .format("dddd, MMMM D, YYYY h:m A");
  if (event.target.value === "tokyo") {
    alert(`It is ${getTokyoTime} in Asia/Tokyo`);
  }
  if (event.target.value === "london") {
    alert(`It is ${getLondonTime} in Europe/London`);
  }
  if (event.target.value === "paris") {
    alert(`It is ${getParisTime} in Europe/Paris`);
  }
}
let citiesSelect = document.querySelector("#cities");
citiesSelect.addEventListener("change", showSelectedCity);
