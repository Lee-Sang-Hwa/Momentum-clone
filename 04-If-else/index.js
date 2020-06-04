/*
const title = document.querySelector("#title");
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}
function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}

init();
*/

/* 네트워크 연결 or 해제시, 메시지 띄움
const title = document.querySelector("#title");

function handleOffline(){
  console.log("Bye bye");
}
function handleOnline(){
  console.log("Welcome back!");
}
window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
*/

/*
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";
function handleClick() {
  //const currentClass = title.className;
  const hasClass = title.classList.contains(CLICKED_CLASS);

  //if (currentClass !== CLICKED_CLASS)
  if (hasClass) {
    //title.className = "";
    title.classList.remove(CLICKED_CLASS);
  } else {
    //title.className = CLICKED_CLASS;
    title.classList.add(CLICKED_CLASS);
  }
}
function init() {
  title.addEventListener("click", handleClick);
}
init();
*/

//toggle function
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";
function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}
function init() {
  title.addEventListener("click", handleClick);
}
init();
