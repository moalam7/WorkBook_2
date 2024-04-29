"use strict";

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
    alert("Cannot divide by zero!");
  }
}
