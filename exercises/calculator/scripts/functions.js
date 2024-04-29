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

function addNumbers() {
  const num1 = document.getElementById("numberOneField").value;
  const num2 = document.getElementById("numberTwoField").value;
  const sum = num1 + num2;
  document.getElementById("answerField").value = sum;
}

function subtractNumbers() {
  const num1 = document.getElementById("numberOneField").value;
  const num2 = document.getElementById("numberTwoField").value;
  const difference = num1 - num2;
  document.getElementById("answerField").value = difference;
}

function multiplyNumbers() {
  const num1 = document.getElementById("numberOneField").value;
  const num2 = document.getElementById("numberTwoField").value;
  const product = num1 * num2;
  document.getElementById("answerField").value = product;
}

function divideNumbers() {
  const num1 = document.getElementById("numberOneField").value;
  const num2 = document.getElementById("numberTwoField").value;

  if (num2 !== 0) {
    const quotient = num1 / num2;
    document.getElementById("answerField").value = quotient;
  } else {
    alert("Null");
  }
}
