"use strict";


function gregorianCalendar(year) {
  if (year % 4 == 0 ) {
    console.log(`The year ${year} was a leap year!`);
  } else {
    console.log(`The year ${year} was NOT a leap year!`);
  }
}

gregorianCalendar(2001);
