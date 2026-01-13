// Store references to DOM elements
let myHeading = document.querySelector("h1");
let myButton = document.querySelector("button");
const myImage = document.querySelector("img");

// Update the text content of the <h1>
myHeading.textContent = "Hello world!";

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/daisybw.png");
  } else {
    myImage.setAttribute("src", "images/daisy.png");
  }
});

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Arn't Daisies Just Beautiful?, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Arn't Daisies Just Beautiful?, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});