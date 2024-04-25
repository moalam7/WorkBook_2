"use strict";

var grossPay;

function payRules(payRate, hoursWorked) {
  if (hoursWorked < 0) {
    console.error("Error: Hours worked cannot be less than 0.");
    return;
  } else if (hoursWorked <= 40) {
    grossPay = hoursWorked * payRate;
  } else {
    grossPay = (40 * payRate) + ((hoursWorked - 40) * (payRate * 1.5));
  }

  console.log(`Your gross pay is $${grossPay} for ${hoursWorked} hours worked with a pay rate of $${payRate} per hour.`);
}

payRules(12.50,20);
payRules(25.00,40);
payRules(17.30, 45);

// var payRate = 17.30;
// var hoursWorked = 45;
// var pay;
// // under 40 hourse
// if (hoursWorked <= 40)
//  {
//     pay = hoursWorked * payRate;
// }
// // exactly 40 hourse
// else if (hoursWorked == 40) {
//     pay = hoursWorked * payRate;
// }
// // over 40 hours
// else {
//     pay =(40 * payRate) + (payRate * 1.5 * (hoursWorked - 40));
// }
// console.log(pay);
