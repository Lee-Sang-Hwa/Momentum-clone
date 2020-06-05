const clockContainer = document.querySelector(".js-clock");
const eventDay = new Date("2020-12-25T00:00:00");
clockTitle = clockContainer.querySelector("h2");

//local time
const NINE_HOURS_MILLISECONDS = 32400000;

function getTime() {
  let ktcTime = new Date();
  const utcTime = ktcTime.getTimezoneOffset();
  let todayTime =
    ktcTime.getTime() + utcTime * 60 * 1000 + NINE_HOURS_MILLISECONDS;
  const dDay = eventDay.getTime() - todayTime;
  const day = Math.ceil(dDay / (1000 * 60 * 60 * 24)) - 1;
  const hours = Math.ceil(dDay / (1000 * 60 * 60) - day * 24) - 1;
  const minutes =
    Math.ceil(dDay / (1000 * 60) - day * 24 * 60 - hours * 60) - 1;
  const seconds = Math.ceil(
    dDay / 1000 - day * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60
  );
  clockTitle.innerText = `${day}d ${hours < 10 ? `0${hours}` : hours}h ${
    minutes < 10 ? `0${minutes}` : minutes
  }m ${seconds < 10 ? `0${seconds}` : seconds}s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
