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

​const question = "Will I finish my homework today?";


const answers = [
  "Yes - definitely.",
  "It is decidedly so.",
  "Without a doubt.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful."
];


const randomNumber = Math.floor(Math.random() * answers.length);
const answer = answers[randomNumber];


console.log(`Question:     ${question}`);
console.log(`Magic 8 Ball: ${answer}`);
​
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

const player = 2; 

const computer = Math.floor(Math.random() * 3);

function choiceName(choice) {
  if (choice === 0) return "Rock";
  if (choice === 1) return "Paper";
  return "Scissors";
}

console.log(`Player picked:      ${choiceName(player)}`);
console.log(`Computer picked:    ${choiceName(computer)}`);

if (player === computer) {
  console.log("It's a tie!");
} else if (
  (player === 0 && computer === 2) ||
  (player === 1 && computer === 0) ||
  (player === 2 && computer === 1)
) {
  console.log("The player won!");
} else {
  console.log("The computer won!");
}