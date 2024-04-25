"use strict";

//Test 1
// var hoursWorked = 20;
// var payRate = 12.5;

//Test 2
// var hoursWorked = 40;
// var payRate = 25;

//Test 3
var hoursWorked = 45;
var payRate = 17.3;

var standardHours = 40;
var overtimePayRateMultiplier = 1.5;
var grossPay = 0;

if (hoursWorked <= standardHours) {
  grossPay = payRate * hoursWorked;
} else {
  var overtimeHoursWorked = hoursWorked - standardHours;
  var overtimePayRate = payRate * overtimePayRateMultiplier;
  var standardPay = payRate * standardHours;
  var overtimePay = overtimeHoursWorked * overtimePayRate;
  grossPay = standardPay + overtimePay;
}

console.log(grossPay.toFixed(2));
