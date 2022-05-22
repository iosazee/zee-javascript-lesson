let currentCity = "Paris";
let compCity = "Barcelona";
let currentRent = 1200;
let compRent = 940;
let isMoreExpensive = currentRent > compRent;
let comparisonLabel = currentCity + " is more expensive: " + isMoreExpensive;

console.log(comparisonLabel);

let difference = currentRent - compRent;
let differenceLabel = "Rent difference: &euro;" + difference;
console.log(differenceLabel);

document.getElementById("city1").innerHTML = currentCity + ": &euro;" +
  currentRent;
document.getElementById("city2").innerHTML = compCity + ": &euro;" + compRent;
document.getElementById("comparison").innerHTML = comparisonLabel;
document.getElementById("difference").innerHTML = differenceLabel;