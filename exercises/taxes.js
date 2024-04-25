"use strict";

//define your inputs (variables)
var monthlySalary = 50000;
var taxRate = 23 / 100;

//do the calculation and save the result to a variable
var taxAmount = monthlySalary * taxRate;

//print the results
console.log("You owe $" + taxAmount.toFixed(2) + " in taxes.");
