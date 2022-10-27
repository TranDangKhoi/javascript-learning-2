window.addEventListener("load", function (e) {
  const passwordInput = document.querySelector(".input-password");
  passwordInput.addEventListener("input", function (e) {
    const value = e.target.value;
    const checkLengthClass = e.target.parentNode.querySelector(".check-length");
    const checkUpperClass = e.target.parentNode.querySelector(".check-upper");
    const checkNumberClass = e.target.parentNode.querySelector(".check-number");
    const checkSpecialClass =
      e.target.parentNode.querySelector(".check-special");
    const checkItems = e.target.parentNode.querySelectorAll(".check-item");
    // console.log(value);
    if (!value) {
      [...checkItems].forEach((item) => {
        item.classList.remove("active");
      });
      return;
    }

    if (value.length <= 8) {
      checkLengthClass.classList.remove("active");
    } else {
      checkLengthClass.classList.add("active");
    }

    if (!/[A-Z]/.test(value)) {
      checkUpperClass.classList.remove("active");
    } else {
      checkUpperClass.classList.add("active");
    }

    if (!/[0-9]/.test(value)) {
      checkNumberClass.classList.remove("active");
    } else {
      checkNumberClass.classList.add("active");
    }

    if (!/[\!@#$%^&*()~_`]/.test(value)) {
      checkSpecialClass.classList.remove("active");
    } else {
      checkSpecialClass.classList.add("active");
    }
  });
});
