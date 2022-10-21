window.addEventListener("load", function () {
  const text = document.querySelector(".text");
  text.addEventListener("mouseenter", function (e) {
    const title = e.target.dataset.tooltip;
    const tooltipDiv = document.createElement("div");
    const coords = e.target.getBoundingClientRect();
    tooltipDiv.className = "tooltip-text";
    document.body.appendChild(tooltipDiv);
    const { left, top, width } = coords;
    tooltipDiv.textContent = title;
    const tooltipHeight = tooltipDiv.offsetHeight;
    tooltipDiv.style.left = `${left + width / 2}px`;
    tooltipDiv.style.top = `${top - tooltipHeight - 10}px`;

    text.addEventListener("mouseleave", function (e) {
      e.target.parentNode.removeChild(tooltipDiv);
    });
  });
});
