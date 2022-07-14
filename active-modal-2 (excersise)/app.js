const button = document.querySelector("button");

button.addEventListener("click", function (e) {
  e.target.nextElementSibling.classList.add("active");
  const closeButton = document.querySelector(".modal-close");
  closeButton.addEventListener("click", function (e) {
    console.log(e.target.parentNode.parentNode.classList.remove("active"));
  });
});
