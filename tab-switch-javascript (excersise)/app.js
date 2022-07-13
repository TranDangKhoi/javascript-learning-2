// Phân tích bài tập:
// Khi click vào tab thì thêm class active vào tab(làm tab chuyển màu) sau đó loại bỏ class active ở tab trước đó đi
// Thay đổi nội dung bên dưới (post-title) bằng cách addClass active vô

const tabs = document.querySelectorAll(".tab-item");
const tabsContent = document.querySelectorAll(".tab-content");
[...tabs].forEach((item) =>
  item.addEventListener("click", function (e) {
    [...tabs].forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
    const tabIndex = e.target.dataset.tab;
    [...tabsContent].forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("data-tab") === tabIndex) {
        item.classList.add("active");
      }
    });
  })
);
