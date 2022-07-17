const dropdownSelect = document.querySelector(".dropdown-select");
const dropdownItems = document.querySelectorAll(".dropdown-item");
const dropdownSelected = document.querySelector(".dropdown-selected");
const dropdownList = document.querySelector(".dropdown-list");
const dropdown = document.querySelector(".dropdown");
dropdownSelect.addEventListener("click", function (e) {
  dropdownList.classList.toggle("show");
  const arrow = e.target.querySelector(".arrow");
  arrow.classList.toggle("fa-angle-up");
  arrow.classList.toggle("fa-angle-down");
});

dropdownItems.forEach((item) =>
  item.addEventListener("click", function (e) {
    const dropdownItemTextContent =
      e.target.querySelector(".dropdown-text").textContent;
    dropdownSelected.textContent = dropdownItemTextContent;
    dropdownList.classList.remove("show");
  })
);

document.addEventListener("click", function (e) {
  if (!dropdownSelect.contains(e.target)) {
    dropdownList.classList.remove("show");
  }
});
