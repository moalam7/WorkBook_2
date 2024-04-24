function convertToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

var tempCelsius = 100;
var tempFahrenheit = 212;

var convertedTempToF = convertToFahrenheit(tempCelsius);
var convertedTempToC = convertToCelsius(tempFahrenheit);

console.log(tempCelsius + "°C is " + convertedTempToF + "°F");
console.log(tempFahrenheit + "°F is " + convertedTempToC + "°C");
