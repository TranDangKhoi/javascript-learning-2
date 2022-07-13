const plus = document.querySelector(".counter-plus");
const number = document.querySelector(".counter-number");
const minus = document.querySelector(".counter-minus");
let numberValue = parseInt(number.textContent);

function handlePlus() {
  numberValue++;
  number.textContent = numberValue;
}

function handleMinus() {
  if (numberValue <= 0) {
    return;
  }
  numberValue--;
  number.textContent = numberValue;
}

plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);
