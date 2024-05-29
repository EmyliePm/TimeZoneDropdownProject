function showSelectedCity(event) {
  console.log(event.target.value);
  if (event.target.value === "tokyo") {
    alert("Tokyo");
  }
}
let citiesSelect = document.querySelector("#cities");
citiesSelect.addEventListener("change", showSelectedCity);
