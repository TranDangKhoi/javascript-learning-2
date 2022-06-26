// thêm sửa xóa node trong Javascript
// 1. Tạo ra element trong javascript -> document.createElement("element")

const el = document.createElement("div");
// 2. selector.appendChild

// document.body -> thẻ body

// document.querySelector("body")

const body = document.body;
// body.appendChild(el);
// el.className = "card";
// const cardImage = document.createElement("img");
// cardImage.setAttribute(
//   "src",
//   "https://images.unsplash.com/photo-1656105544415-39cf9fabbad3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
// );
// cardImage.setAttribute("class", "card-image");
// el.appendChild(cardImage);
// 3. document.createTextNode
const h1 = document.createElement("h1");
body.appendChild(h1);
const text = document.createTextNode("Hello my name is Khoi");
h1.appendChild(text);
// 4. element.cloneNode(boolean);

const h1Clone = h1.cloneNode(true);
body.appendChild(h1Clone);

// 5. element.hasChildNodes() -> Kiểm tra có phần tử con bên trong hay không -> có thì trả về true không thì trả về false

const h2 = document.createElement("h2");
body.appendChild(h2);
h2.innerHTML = `<p>I'm your father</p>`;
if (h2.hasChildNodes()) {
  console.log(h2.innerHTML);
}
