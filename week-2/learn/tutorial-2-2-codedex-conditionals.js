// ============================================
// TUTORIAL 2-2: CODEDEX CONDITIONALS
// Student: [Brittany Wallace]
// Date: [1/23/2026]
// ============================================
​
// --------------------------------------------
// EXERCISE 11: COIN FLIP
// Simulate a coin toss using Math.random()
// Output "Heads" or "Tails"
// --------------------------------------------


​let num = Math.random();

if (num > 0.5) {
  console.log("Heads");
} else {
  console.log("Tails");
}
​
​
// --------------------------------------------
// EXERCISE 12: GOOD MORNING
// Check if hour < 12
// If true, print morning greeting with routines
// --------------------------------------------
​

​hour = 10;

if (hour < 12) {
  console.log("Good morning!");
}
​
​
// --------------------------------------------
// EXERCISE 13: GOOD AFTERNOON
// Add else clause to Exercise 12
// If hour < 12: morning greeting
// Else: afternoon greeting
// --------------------------------------------
​

​hour = 13;

if (hour < 12) {
  console.log("Good morning!");
}
  else {
    console.log("Good afternoon!");
  }
​
​
// --------------------------------------------
// EXERCISE 14: pH LEVELS
// Check if pH is basic, acidic, or neutral
// Use else if for multiple conditions
// --------------------------------------------
​

​let ph = 8;

if (ph > 7 ) {
  console.log("Basic");
} else if (ph < 7) {
  console.log("Acidic");
} else {
  console.log("Neutral");
}
​
​
// --------------------------------------------
// EXERCISE 15: MAGIC 8 BALL
// Generate random number 0-8
// Return different responses based on number
// Format: Question / Magic 8 Ball Answer
// --------------------------------------------
​


let question = prompt("Ask the Magic 8 Ball a yes or no question:");

let randomNumber = Math.floor(Math.random() * 5) + 1;

let answer;


if (randomNumber === 1) {
  answer = "Yes, definitely.";
} else if (randomNumber === 2) {
  answer = "No way.";
} else if (randomNumber === 3) {
  answer = "Maybe... try again.";
} else if (randomNumber === 4) {
  answer = "It is certain.";
} else {
  answer = "I don't think so.";
}

console.log("You asked: " + question);
console.log("Magic 8 Ball says: " + answer);
​

// --------------------------------------------
// EXERCISE 16: AIR QUALITY INDEX
// Check AQI ranges using logical operators
// 0-50: Good, 51-100: Moderate, etc.
// --------------------------------------------
​

​const aqi = 25;

if (aqi >= 0 && aqi <= 50) {
  console.log("Good");
} else if (aqi >= 51 && aqi <= 100) {
  console.log("Moderate");
} else if (aqi >= 101 && aqi <= 150) {
  console.log("Unhealthy (Sensitive Groups)");
} else if (aqi >= 151 && aqi <= 200) {
  console.log("Unhealthy");
} else if (aqi >= 201 && aqi <= 300) {
  console.log("Very Unhealthy");
} else {
  console.log("Hazardous");
}
​
​
// --------------------------------------------
// EXERCISE 17: ROCK PAPER SCISSORS
// Player picks 0, 1, or 2
// Computer picks random 0-2
// Determine winner using conditionals
// --------------------------------------------
​


let userChoice = prompt("Choose rock, paper, or scissors:");


userChoice = userChoice.toLowerCase();


let rNumber = Math.floor(Math.random() * 3) + 1;

let computerChoice;

if (rNumber === 1) {
  computerChoice = "rock";
} else if (rNumber === 2) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}

let result;


if (userChoice === computerChoice) {
  result = "It's a tie!";
} 
else if (
  (userChoice === "rock" && computerChoice === "scissors") ||
  (userChoice === "paper" && computerChoice === "rock") ||
  (userChoice === "scissors" && computerChoice === "paper")
) {
  result = "You win!";
} 
else if (
  userChoice === "rock" ||
  userChoice === "paper" ||
  userChoice === "scissors"
) {
  result = "You lose!";
} 
else {
  result = "That is not a valid choice.";
}


console.log("You chose: " + userChoice);
console.log("Computer chose: " + computerChoice);
console.log(result);