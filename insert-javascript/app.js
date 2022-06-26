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
document.body.insertAdjacentHTML("beforeend", template);
// parse template sang HTML
