//1. Sự khác nhau giữa i++ và ++i
let i = 1;
let j = i++;
console.log(i, j); // 2 1

// -> gán giá trì là 1 cho thằng j trước sau đó mới tăng thằng i lên

// 2. Lưu ý khi return function
function total(x, y) {
  return x + y;
}
