// Store references to DOM elements
let myHeading = document.querySelector("h1");
let myButton = document.querySelector("button");
let myImage = document.querySelector("img");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    myHeading.textContent = `Arn't Daisies Just Beautiful?, ${myName}`;
  }
}

// Ask for name when page loads
setUserName();

// Image click toggle
function setupImageClick() {
  myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/daisy.png") {
      myImage.setAttribute("src", "images/daisybw.png");
    } else {
      myImage.setAttribute("src", "images/daisy.png");
    }
  });
}

setupImageClick();

// Button to change user
myButton.addEventListener("click", () => {
  setUserName();
});


/*
  SUMMARY:
  This file does two things:
  1. When you click on the picture it should switch between a color and black & white version of the daisy image.
  2. When you first load the page (or click the button) it prompts you for your name and updates the heading to include your name.
​
  The key pattern I learned: event listeners and DOM manipulation.
*/