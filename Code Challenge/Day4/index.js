function resize() {
  const windowSize = window.innerWidth;
  if (windowSize > 1500) {
    document.body.style.backgroundColor = "gold";
  } else if (windowSize < 1000) {
    document.body.style.backgroundColor = "lightblue";
  } else {
    document.body.style.backgroundColor = "purple";
  }
}
window.addEventListener("resize", resize);
