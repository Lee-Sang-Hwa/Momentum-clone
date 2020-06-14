const form = document.querySelector(".js-select");
const selectCountry = "selected";
const currentValue = document.querySelector(".js-select [key=selected]");

function saveCountry(currentValue) {
  localStorage.setItem(selectCountry, currentValue);
}

function handleChange() {
  form.addEventListener("change", saveCountry);
}
function init() {
  handleChange();
}

init();
