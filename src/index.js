function showSelectedCity(event) {
  console.log(event.target.value);
  if (event.target.value === "tokyo") {
    alert("Tokyo");
  }
  if (event.target.value === "london") {
    alert("London");
  }
  if (event.target.value === "paris") {
    alert("Paris");
  }
}
let citiesSelect = document.querySelector("#cities");
citiesSelect.addEventListener("change", showSelectedCity);
