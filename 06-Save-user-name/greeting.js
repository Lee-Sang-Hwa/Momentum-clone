// html document 내부의 class=js-form 에 관한 속성
const form = document.querySelector(".js-form"),
  // form 내부의 input 에 관한 속성
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");
// 명령어를 변수에 숨김
const USER_LS = "currentUser",
  SHOWING_CN = "showing";

//입력받은 text를 "currentUser"의 key의 value 값으로 저장
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

//submit 명령은 기존의 디폴트값을 사용하지 않고,
//입력값을 currentValue에 저장하고, 이를 paintGreeting 함수의 text로 실행하고,
//saveName 함수의 text로 실행
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

// 만약 "currentUser" 값이 null이면, .js-form에 "showing" class 추가
// -> js-form form showing
// form은 submit 명령에 동작함
function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}
//.js-form의 "showing" class 삭제하고,
// greeting에 "showing" 추가하고, Hello ${text} 입력
function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}
// currentUser는 USER_LS("currentUser")의 값을 가져오는 변수이고,
// 만약 "currentUser" 값이 null이면, .js-form에 "showing" class 추가
// "currentUser" 값이 존재한다면, 그 값을 가져옴
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

//loadName 호출 함수
function init() {
  loadName();
}
init();
