"use strict";

//init
window.onload = init;

function init() {
  const addButton = document.getElementById("addButton");
  addButton.onclick = add;
  var sunButton = document.getElementById("sunButton");
  sunButton.onclick = sub;
  var mulButton = document.getElementById("mulButton");
  mulButton.onclick = mul;
  var divButton = document.getElementById("divButton");
  divButton.onclick = div;
}

function add() {
  const numberOneInput = document.getElementById("numberOneInput");
  const numberTwoInput = document.getElementById("numberTwoInput");
  const message = document.getElementById("message");

  //get user inputs
  let numberOne = Number(numberOneInput.value);
  let numberTwo = Number(numberTwoInput.value);

  //check to see if user inputs were invalid
  if (isNaN(numberOne) || isNaN(numberTwo)) {
    message.innerHTML = "One or more of your input values are invalid";
    return;
  }

  //display the results
  let result = numberOne + numberTwo;
  const answerField = document.getElementById("answer");
  answer.value = result;

  //clear any previous error message
  message.innerHTML = "";
}

// ...........SUB............
function sub() {
  const numberOneInput = document.getElementById("numberOneInput");
  const numberTwoInput = document.getElementById("numberTwoInput");
  const message = document.getElementById("message");

  //get user inputs
  let numberOne = Number(numberOneInput.value);
  let numberTwo = Number(numberTwoInput.value);

  //check to see if user inputs were invalid
  if (isNaN(numberOne) || isNaN(numberTwo)) {
    message.innerHTML = "One or more of your input values are invalid";
    return;
  }

  //display the results
  let result = numberOne - numberTwo;
  const answerField = document.getElementById("answer");
  answer.value = result;

  //clear any previous error message
  message.innerHTML = "";
}

// .......MULTIPLY.........

function mul() {
  const numberOneInput = document.getElementById("numberOneInput");
  const numberTwoInput = document.getElementById("numberTwoInput");
  const message = document.getElementById("message");

  //get user inputs
  let numberOne = Number(numberOneInput.value);
  let numberTwo = Number(numberTwoInput.value);

  //check to see if user inputs were invalid
  if (isNaN(numberOne) || isNaN(numberTwo)) {
    message.innerHTML = "One or more of your input values are invalid";
    return;
  }

  //display the results
  let result = numberOne * numberTwo;
  const answerField = document.getElementById("answer");
  answer.value = result;

  //clear any previous error message
  message.innerHTML = "";
}

function div() {
  const numberOneInput = document.getElementById("numberOneInput");
  const numberTwoInput = document.getElementById("numberTwoInput");
  const message = document.getElementById("message");

  //get user inputs
  let numberOne = Number(numberOneInput.value);
  let numberTwo = Number(numberTwoInput.value);

  //check to see if user inputs were invalid
  if (isNaN(numberOne) || isNaN(numberTwo)) {
    message.innerHTML = "One or more of your input values are invalid";
    return;
  }

  if (numberTwo == 0) {
    message.innerHTML = "Cannot divide by zero!";
    return;
  }

  //display the results
  let result = numberOne / numberTwo;
  const answerField = document.getElementById("answer");
  answer.value = result;
}
