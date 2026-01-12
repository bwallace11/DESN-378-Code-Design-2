const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/daisybw.png") {
    myImage.setAttribute("src", "/images/daisybw.png");
  } else {
    myImage.setAttribute("src", "/images/daisy.png");
  }
});