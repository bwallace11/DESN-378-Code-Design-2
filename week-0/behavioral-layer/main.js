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