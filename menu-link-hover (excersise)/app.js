const links = [...document.querySelectorAll(".navigation-link")];

window.addEventListener("load", function () {
  links.forEach((item) => {
    item.addEventListener("mouseenter", handleHoverLink);
    const line = document.createElement("div");
    line.className = "line-effect";
    document.body.appendChild(line);
    function handleHoverLink(e) {
      console.log(e.target);
    }
  });
});
