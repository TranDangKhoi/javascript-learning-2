// document.addEventListener("DOMContentLoaded")
// -> Khi HTML đã load xong rồi (chưa cần CSS và JS load)
document.addEventListener("DOMContentLoaded", function (e) {
  console.log("DOM Content Loaded");
});

// window.addEventListener("load")
// -> Khi website đã fully loaded
window.addEventListener("load", function () {
  console.log("Website loaded");
});
