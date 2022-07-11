// document.title
console.log(document.title);
document.title = "Javascript with Khoi";
// document.head
console.log(document.head);
const metaResponsive = document.createElement("meta");
metaResponsive.setAttribute("name", "viewport");
metaResponsive.setAttribute("content", "width=device-width, initial-scale=1.0");
// document.head.appendChild(metaResponsive);

/* <meta name="viewport" content="width=device-width, initial-scale=1.0"> */

const head = document.getElementsByTagName("head");
head[0].appendChild(metaResponsive);
console.log(head);
