// 1. offsetWidth, offsetHeight, offsetLeft, offsetParent, offsetTop
// offsetWidth -> trả về độ rộng của phần tử
const box = document.querySelector(".boxed");
function log(value) {
  console.log(value);
}

log(box.offsetWidth); // trả về độ rộng của box

// offsetHeight -> trả về chiều cao của phần tử
log(box.offsetHeight); // trả về độ cao của box
log(box.offsetLeft); // trả về chiều dài của nó so với bên trái
log(box.offsetTop); // trả về chiều dài của nó so với bên trên
log(box.offsetParent); // trả về phần tử cha để lấy giá trị của phần tử cha

// clientWidth, clientHeight, clientLeft, clientTop
log(box.clientWidth); // lấy độ rộng phần tử, trừ đi border
log(box.clientHeight); // lấy độ cao phần tử, trừ đi border
log(box.clientLeft); // Vị trí của nó so với bên trái ngoài cùng của chính nó (cụ thể là lấy kích thước thằng border bên trái)
log(box.clientTop); // Vị trí của nó so với bên trên ngoài cùng của chính nó (cụ thể là lấy kích thước thằng border bên trên)

// 3. window.innerWidth, window.outerWidth, window.innerHeight, window.outerHeight
log(window.innerHeight); // lấy cả chiều cao của viewport bên trong website
log(window.outerHeight); /// lấy cả chiều cao của từ đỉnh trình duyệt xuống dưới cùng của trình duyệt
log(window.innerWidth); // lấy chiều rộng hiện tại của website trong viewport bên trong web
log(window.outerWidth); // lấy chiều rộng của cả màn hình

// GETBOUNDINGCLIRENTRECT()
// 4. selector.getBoundingClientRect() -> lấy ra tọa độ, kích thước, vị trí của selector

log(box.getBoundingClientRect());
// bottom: 236 -> tính từ cạnh bên dưới ngoài cùng của cái box lên trên cùng của viewport (box có chiều cao 200px + h3 nằm trên cùng, cao 36px)
// bottom = height + top

// height: 200 -> chiều cao của box (code  trong css)
// left: 50 -> tính từ bên trái của viewport cho tới cái box

// right: 250 -> tính từ bên phải ngoài cùng của cái box cho tới bên trái của viewport
// right = width + left

// top: 36 -> tính từ bên trên cùng của viewport cho tới cạnh trên cùng của box
// width: 200 -> chiều rộng của box
// x: 50 -> bằng với left
// y: 36 -> bằng với top

// SỰ KHÁC NHAU GIỮA NODELIST VÀ HTMLCOLLECTION
