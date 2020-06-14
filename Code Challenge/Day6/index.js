const form = document.querySelector(".js-select");
const SELECT = "selected";


const selectElement = document.querySelector(".ice-cream");

form.addEventListener("change", function () {
  localStorage.setItem(USER_LS, text);
  }
}


/*
const selectedCountry = document.querySelector(
  "select option[select=selected]"
);
let currentValue = form.value.innerText;
function saveCountry() {
  localStorage.setItem(SELECT, currentValue);
}
function handleSelect() {
  currentValue = form.value.innerText;
  form.addEventListener("change", select.value;
}

/*
function handleSelect(event) {
  event.preventDefault();
  option.classList.toggle(SELECT_CN);
}
*/
/*
function handleSelect() {
  const selected = select.value;
  localStorage.setItem("country", selected);
}

/*

  const selected = select.classList.contains(SELECT_CN);
  if (selected) {
    option.selectList.add(SELECT_CN);
  } else {
    option.selectList.remove(SELECT_CN);
  }
 

function saveCountry(text) {
  localStorage.setItem(COUNTRY_LS, text);
}

function userCountry() {
  const currentUser = localStorage.getItem(form);
  if (selected) {
    const option = document.querySelector(`option[value="${selected}"]`);
    option.selected = true;
  }
}
*/
