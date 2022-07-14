const accordionHeader = document.querySelectorAll(".accordion-header");

[...accordionHeader].forEach((item) => {
  item.addEventListener("click", function (e) {
    const accordionContent = e.target.nextElementSibling;
    accordionContent.classList.toggle("active");
    // scrollHeight lấy ra chiều cao của content bao gồm cả padding
    accordionContent.style.height = `${accordionContent.scrollHeight}px`;
    if (!accordionContent.classList.contains("active")) {
      accordionContent.style.height = `0px`;
    }
  });
});
