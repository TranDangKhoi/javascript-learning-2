// click vào accordion header thì sẽ addClass is-active vào accordion content
const accordionHeader = document.querySelectorAll(".accordion-header");
[...accordionHeader].forEach((item) =>
  item.addEventListener("click", function (e) {
    const accordionContent = e.target.nextElementSibling;
    accordionContent.classList.toggle("is-active");
    // scrollHeight là chiều cao của content bao gồm padding
    accordionContent.style.height = `${accordionContent.scrollHeight}px`;
    if (!accordionContent.classList.contains("is-active")) {
      accordionContent.style.height = `0px`;
    }
    const caret = e.target.querySelector(".caret");
    caret.classList.toggle("fa-angle-up");
    caret.classList.toggle("fa-angle-down");
  })
);
