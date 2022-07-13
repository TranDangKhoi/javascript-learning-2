const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".navigation-hamburger");
const hamburgerContainer = document.querySelector("navigation");
hamburger.addEventListener("click", function (e) {
  e.target.classList.add("is-show");
  e.target.classList.toggle("fa-times");
  e.target.classList.toggle("fa-bars");
  menu.classList.toggle("is-show");
});

// selector.contains: Kiểm tra xem element này có chứa element khác không
function handleClickOutMenu(e) {
  // nếu menu
  if (e.target.contains(menu) && !e.target.matches(".navigation-hamburger")) {
    menu.classList.remove("is-show");
    hamburger.classList.remove("fa-times");
    hamburger.classList.add("fa-bars");
    hamburger.classList.remove("is-show");
  }
}

document.addEventListener("click", handleClickOutMenu);
