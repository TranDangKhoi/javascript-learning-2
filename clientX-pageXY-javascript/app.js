// pageX , pageY, clientX, clientY
document.addEventListener("mousemove", function (e) {
  // Client là viewport của người dùng còn Page là của cả trang web
  // dùng tọa độ X thì page và client lúc nào cũng giống y hệt nhau trừ khi có scroll ngang
  console.log(`PageX : ${e.pageX}`);
  console.log(`ClientX : ${e.clientX}`);
  // dùng tọa độ Y thì khi scroll xuống sẽ thấy rõ sự khác biệt
  // pageY là chiều cao của page hiện tại sau khi scroll xuống (chiều cao của document)
  // clientY là chiều cao của viewport khi người dùng rê chuột vào
  console.log(`PageX : ${e.pageY}`);
  console.log(`ClientX : ${e.clientY}`);
});
