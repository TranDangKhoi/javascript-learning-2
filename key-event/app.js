window.addEventListener("load", function () {
  const input = document.querySelector(".input-text");
  input.addEventListener("keypress", function (e) {
    console.log(e.key);
    // if (e.key === "Enter") {
    //   e.preventDefault();
    // }
  });
});
