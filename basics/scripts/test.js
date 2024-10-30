// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";


const myImage = document.querySelector("img");
console.log('myImage', myImage)

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  console.log('mySrc', mySrc)
  if (mySrc === "./Images/profile.png") {
    console.log("wefwef")
    myImage.setAttribute("src", "./Images/profile2.png");
  } else {
    console.log("Dfwds")
    myImage.setAttribute("src", "./Images/profile.png");
  }
};


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Hello ${myName}`;
    }
  }
  
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hello ${storedName}`;
  }

  
  myButton.onclick = () => {
    setUserName();
  };
  