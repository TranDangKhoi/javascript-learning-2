window.addEventListener("load", function () {
  const text = document.querySelector(".text");
  text.addEventListener("mouseenter", function (e) {
    const title = e.target.dataset.tooltip;
    const tooltipDiv = document.createElement("div");
    tooltipDiv.className = "tooltip-text";
    document.body.appendChild(tooltipDiv);
    tooltipDiv.textContent = title;
    text.addEventListener("mouseleave", function (e) {
      e.target.parentNode.removeChild(tooltipDiv);
    });
  });
});
