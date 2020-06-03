/*
function sayHello(name, age) {
  console.log("Hello"+name+"you are"+age+"years old");
}
sayHello("Samhwani", 3);
*/

/*
function sayHello(name, age) {
  console.log(`Hello $(name) you are $(age) years old`);
}
sayHello("Samhwani", 3);
*/

/*
function sayHello(name, age) {
  return `Hello $(name) you are $(age) years old`;
}
const greetSamhwani = sayHello("Samhwani", 3);
console.log(greetSamhwani);
*/
/*
const calculator = {
  plus: function (a, b) {
    return a + b;
  },
};

const plus = calculator.plus(5, 5);
console.log(plus);
*/

/*
const title = document.getElementById("title");
// or const title = document.querySelector("#title");
title.innerHTML = "Hi! From JS";
title.style.color = "red";
console.dir(title);
*/
/*
const title = document.querySelector("#title");
function handleResize() {
  console.log("I have been resized");
}

window.addEventListener("resize", handleResize);
*/
/*
const title = document.querySelector("#title");
function handleResize(event) {
  console.log("I have been resized");
}

window.addEventListener("resize", handleResize(event));
*/

const title = document.querySelector("h1");
function handleClick() {
  title.style.color = "red";
}

window.addEventListener("click", handleClick);
