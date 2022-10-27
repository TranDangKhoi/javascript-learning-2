// Email Validation
// abc@gmail.com abc@yahoo.com : valid
// abcdk ktois123 : invalid
const emailInput = document.querySelector(".input-email");
emailInput.addEventListener("input", function (e) {
  const value = e.target.value;
  //   console.log(value);
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailRegex.test(value.trim())) {
    e.target.classList.add("valid");
    e.target.classList.remove("invalid");
  } else {
    e.target.classList.add("invalid");
    e.target.classList.remove("valid");
  }

  if (!value) {
    e.target.classList.remove("invalid");
    e.target.classList.remove("valid");
  }
});
