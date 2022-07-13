const button = document.querySelector(".button");
const span = document.querySelector("button span");
const handleClick = (e) => {
  console.log(e.target); // target vào phần tử nằm bên trong của phần tử mình vừa click
  console.log(e.currentTarget); // target vào phần tử mình click (ở đây là mình click vào button -> chính là thằng mình query tới)
  console.log("Hello World");
};

button.addEventListener("click", handleClick);

const link = document.querySelector(".link");
const handleDirect = (e) => {
  e.preventDefault();
  e.target.style.color = "red";
  console.log(e.target.style);
};
link.addEventListener("click", handleDirect);
