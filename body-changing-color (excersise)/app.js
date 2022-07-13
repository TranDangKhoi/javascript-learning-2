const button = document.querySelector(".change");
button.addEventListener("click", handleChangeColor);
const colors = [
  "#ffa400",
  "00aefd",
  "#07a787",
  "#ffb86c",
  "#2979ff",
  "#e74c3c",
  "#6a55cs",
  "#a811cc",
  "#f821cc",
  "#ea14c3",
];
function handleChangeColor() {
  const body = document.body;
  const randomColors = colors[Math.floor(Math.random() * colors.length)];
  body.style.background = randomColors;
  console.log(randomColors);
}
