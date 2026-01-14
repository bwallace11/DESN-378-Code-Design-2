// ============================================
// TUTORIAL 1-0: CODEDEX VARIABLES
// Student: [Brittany Wallace]
// Date: [01/13/2026]
// ============================================
​
// --------------------------------------------
// EXERCISE 6: LET & CONST
// Create 4 variables for a user profile:
// - Two const variables 
// - Two let variables 
// Print them all, then reassign one let variable
// --------------------------------------------

​const firstName = "Brittany "
const favoriteColor = "Purple"

let currentLocation = "Spokane";
currentLocation = "Spokane Washington";
let mood = "Happiness";
mood = "Joy";

console.log(firstName);
console.log(favoriteColor );
console.log(mood );
console.log(currentLocation );
​


// --------------------------------------------
// EXERCISE 7: DATA TYPES
// Create variables for your favorite company:
// 
// Print them all
// --------------------------------------------

​let companyName = "Torrid";
let foundingYear = 2001;
let isActive = true;
let fundingAmount = undefined;

console.log("Company Name:", companyName );
console.log("Founding Year:", foundingYear );
console.log("Is Active:", isActive );
console.log("Funding Amount:", fundingAmount );
​
​
​
// --------------------------------------------
// EXERCISE 8: TEMPERATURE
// Convert Spokane's temperature from °F to °C
// Formula: (fahrenheit - 32) / 1.8
// --------------------------------------------
​
let fahrenheit = 38;
let celsius = (fahrenheit - 32) / 1.8;

console.log(`Temperature in Spokane, WA:`);
console.log(`${fahrenheit}°F = ${celsius.toFixed(1)}°C`);
​
​
// --------------------------------------------
// EXERCISE 9: TIP CALCULATOR
// Calculate tip and total from a bill
// - billAmount, tipPercent
// - tipAmount = billAmount * (tipPercent / 100)
// - total = billAmount + tipAmount
// --------------------------------------------
​

let billAmount = 115.32;
let tipPercent = 15;
let tipAmount = billAmount * (tipPercent / 100);
let total = billAmount + tipAmount;


console.log("Receipt");
console.log("--------");
console.log("Bill Amount: $" + billAmount.toFixed(2));
console.log("Tip (" + tipPercent + "%): $" + tipAmount.toFixed(2));
console.log("Total: $" + total.toFixed(2));
​
​
// --------------------------------------------
// EXERCISE 10: PLAYLIST DURATION
// Calculate total playlist length
// - numberOfSongs, avgSongLength (in minutes)
// - totalMinutes, hours, remainingMinutes
// Format the output nicely
// --------------------------------------------

let numberOfSongs = 164;
let averageSongLength = 3.5;
let totalMinutes = numberOfSongs * averageSongLength;

let hours = Math.floor(totalMinutes / 60);
let minutes = Math.round(totalMinutes % 60);


console.log("Playlist Summary");
console.log("----------------");
console.log("Songs: " + numberOfSongs);
console.log("Average Length: " + averageSongLength + " minutes");
console.log("Total Duration: " + hours + " hours " + minutes + " minutes");
