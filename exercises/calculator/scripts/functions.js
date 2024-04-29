"use strict"

window.onload = init;

function init(){
  const addButton = document.getElementById("addButton");
  const subtractButton = document.getElementById("subtractButton");
  const multiplyButton = document.getElementById("multiplyButton");
  const divideButton = document.getElementById("divideButton");

  addButton.addEventListener("click", addNumbers);
  subtractButton.addEventListener("click", subtractNumbers);
  multiplyButton.addEventListener("click", multiplyNumbers);
  divideButton.addEventListener("click", divideNumbers);
}
