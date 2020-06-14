const select = document.querySelector(".js-select");
const selectCountry = "selected";
//const currentValue = document.querySelector(".js-select select);

function saveCountry(text) {
  localStorage.setItem(selectCountry, text);
}

function handleChange(event) {
  event.preventDefault();
  const currentValue = select.value;
}

function selectCountry() {
  select.addEventListener("change", saveCountry);
}

/*
function loadCountry() {
  if (selected !== null) {
    select.classList.remove(selectCountry);
  }
}
*/

// selectCountry 호출
function init() {
  selectCountry();
}
init();
