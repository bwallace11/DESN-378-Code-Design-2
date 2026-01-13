// Store references to DOM elements
let myHeading = document.querySelector("h1");
let myButton = document.querySelector("button");
const myImage = document.querySelector("img");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Arn't Daisies Just Beautiful?, ${myName}`;
  }
}

// Ask for name first when page loads
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Arn't Daisies Just Beautiful?, ${storedName}`;
}

// Image click toggle
myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/daisy.png") {
    myImage.setAttribute("src", "images/daisybw.png");
  } else {
    myImage.setAttribute("src", "images/daisy.png");
  }
});

// Button to change user
myButton.addEventListener("click", () => {
  setUserName();
});