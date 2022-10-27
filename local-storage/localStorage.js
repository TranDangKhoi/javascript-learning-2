// 1. localStorage.setItem("key","value")
localStorage.setItem("name", "Khoi");
// 2. localStorage.getItem("key")
console.log(localStorage.getItem("name"));
// 3. localStorage.removeItem("key")
// localStorage.removeItem("name");
// 4. localStorage.clear();
// localStorage.clear();
// Ví dụ về 1 mảng
let arr = [1, 2, 3, 4, 5];
// Muốn lưu vào storage?
// Sử dụng JSON.stringify
localStorage.setItem("list", JSON.stringify(arr));
let newArr = localStorage.getItem("list");
console.log(newArr);
console.log(typeof newArr); // Nó đang ở dưới dạng string do mình JSON.stringify
// Vậy để js hiểu newArr là array thì phải viết như nào ?
newArr = JSON.parse(localStorage.getItem("list"));
console.log(newArr); // quay trở lại dạng Array
console.log(typeof newArr); // typeof newArr là Object (Array trong JS được tính là object)
