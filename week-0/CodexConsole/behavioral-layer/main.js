const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

const myImage = document.querySelector("img");
const myButton = document.querySelector("button");

// Image click handler
myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/daisy.png") {
    myImage.setAttribute("src", "images/daisybw.png");
  } else {
    myImage.setAttribute("src", "images/daisy.png");
  }
});

// Set user name function
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Arn't Daisies Just Beautiful?, ${myName}`;
  }
}

// Check for stored name on load
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Arn't Daisies Just Beautiful? ${storedName}`;
}

// Button click handler
myButton.addEventListener("click", () => {
  setUserName();
});