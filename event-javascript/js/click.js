// Tìm hiểu về sự kiện và các event.method() như e.preventDefault,e.stopPropagation,...
const button = document.querySelector(".button");
const span = document.querySelector("button span");
const handleClick = (e) => {
  console.log(e.target); // target vào phần tử nằm bên trong của phần tử mình vừa click
  console.log(e.currentTarget); // target vào phần tử mình click (ở đây là mình click vào button -> chính là thằng mình query tới)
  console.log("Hello World");
};

// Lỗi sai cần tránh khi dùng function vào eventListener
// Sai
// button.addEventListener("click", handleClick());
// Đúng
// event: e
button.addEventListener("click", handleClick);
// Bubbling trong click event (nổi bọt)
// Bubbling là sao ?? -> Sự kiện click chạy từ trong ra ngoài
// Làm sao để ngăn chặn ?? -> Ta sẽ ngăn chặn chúng bằng cách sử dụng e.stopPropagation
// span.addEventListener("click", function (e) {
//   e.stopPropagation(); // ngăn chặn hiệu ứng nổi bọt -> khi click vào thg span thì chỉ thực thi function của thằng span thôi, các thằng khác không quan tâm
//   // e.stopImmediatePropagation(); // ngăn chặn cả hiệu ứng nổi bọt và cả hiệu ứng capturing
//   console.log("Hello Span");
// });
// span.addEventListener("click", function () {
//   console.log("Hello second span");
// });
// Capture là một option bên trong addEventListener -> nó sẽ đảo ngược thứ tự default khi event được thực thi
// Bình thường khi click thì nó sẽ gọi từ thằng con ra thằng cha
// Khi capture true thì nó sẽ thực thi event của thằng cha trước rồi mới tới thằng con
// e.preventDefault
const link = document.querySelector(".link");
const handleDirect = (e) => {
  e.preventDefault();
  console.log("This is a link but doesn't direct to any website");
};
link.addEventListener("click", handleDirect);
