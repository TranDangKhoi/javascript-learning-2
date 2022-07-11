// 1. insertAdjacentText
// có 4 vị trí để insert: beforebegin, afterbegin, beforeend, afterend

const h3 = document.querySelector("h3");
h3.insertAdjacentText("beforebegin", "begin");
h3.insertAdjacentText("afterbegin", "afterbegin");

// 2. insertAdjacentElement

const strong = document.createElement("strong");
strong.classList.add("bold");
h3.insertAdjacentElement("afterbegin", strong);

// 3. element.insertAdjacentHTML
/* 

*/

const template = `
<ul class="menu">
<li>1</li>
<li>2</li>
<li>3</li>
</ul>`;

const secondTemplate = `
<ul class="menu2">
<li>3</li>
<li>2</li>
<li>1</li>
</ul>`;
document.body.insertAdjacentHTML("afterbegin", template);
document.body.insertAdjacentHTML("afterbegin", secondTemplate);
// parse template sang HTML

// insertbefore
// parentNode.insertBefore(newNode, existingNode)
const ul = document.querySelector("ul");
document.body.insertBefore(ul, document.querySelector("h3").nextElementSibling);
// -> thẻ span chạy ra đằng trước thằng h3 trong html -> insertBefore dùng để thay đổi vị trí 1 thẻ ra trước một thẻ nào đó khác
// Vậy điều gì khiến cho nó khác biệt so với insertAdjacent ?? Đáp án đó chính là chả có gì khác biệt cả :3

// h3.nextElementSibling.insertAdjacentElement("beforebegin", ul);

// replaceChild
// selector.replaceChild(oldNode, newNode)
const menu1 = document.querySelector(".menu");
const menu2 = document.querySelector(".menu2");
document.body.replaceChild(menu2, menu1);
