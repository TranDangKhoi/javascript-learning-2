// 1. parentNode, parentElement, removeChild
// parentNode vs parentElement

// console.log(document.querySelector(".span").parentNode);
const span = document.querySelector(".span");
console.log(span.parentNode.parentNode);
console.log(span.parentElement.parentElement);

// removeChild -> selector.parentNode hoặc selector.parentElement.removeChild(selector)
// const h3 = document.querySelector("h3");

// span.parentNode.removeChild(span);
// hoặc là viết hẳn luôn là
// h3.removeChild(span);

// 2.nextElementSibling and previousElementSibling // sibling là để nói tới thằng cùng cấp với mình đứng liền kề trước/sau
// (giống như trong một gia đình sibling là người anh/chị/em trai, em gái của mình cùng tuổi, cùng đẳng cấp với mình)

const nextSpanSibling = span.nextElementSibling;
console.log(nextSpanSibling);
const previousSpanSibling = span.previousElementSibling;
console.log(previousSpanSibling);

// 3. childNode vs children
// childNode: trả về NodeList chứa hết tất cả các node bên trong bao gồm cả textNode (những đoạn văn bản và những đoạn xuống dòng)
// VD:
// children: chỉ trả về một HTMLCollection chứa các tên tag không bao gồm textNodes

console.log(previousSpanSibling.childNodes);
console.log(previousSpanSibling.children); // In ra phần tử con có index là 1 (index bắt đầu từ 0)

// 4. firstChild vs firstElementChild
// firstChild: lấy phần tử con đầu tiên bao gồm cả textNode
// firstElementChild:

console.log(previousSpanSibling.firstChild);
console.log(previousSpanSibling.firstElementChild);

// 5. lastChild vs lastElementChild
// tương tự như firstChild và firstElementChild

// 5. nextSibling và previousSibling
console.log(span.nextSibling);
console.log(span.previousSibling);

// 6. nextElementSibling sau đó lại tới thằng nextElementSibling của thằng trước

console.log(span.nextElementSibling.nextElementSibling);
// trỏ tới thằng tiếp theo của thằng span2
