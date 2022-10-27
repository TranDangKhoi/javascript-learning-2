const complexArr = [
  [1, 2, 3],
  [4, 5, 6],
  [
    [6, 8, 9],
    [3, 5],
  ],
];

// Ouput you want to get: [1,2,3,4,5,6,6,8,9,3,5]
// Sử dụng phương thức có sẵn là flat

console.log(complexArr.flat(Infinity));

// Nhưng nhỡ đâu giờ lúc phỏng vấn họ lại bắt mình dùng
// đệ quy thì làm sao ??

function flatComplexArray(arr, deep) {
  const result =
    deep > 0
      ? arr.reduce(
          (a, b) =>
            a.concat(Array.isArray(b) ? flatComplexArray(b, deep - 1) : b),
          []
        )
      : arr.slice();
  return result;
}

// Các giai đoạn của function trên
// 1. Bên trong arr.reduce có một cái gọi là initialValua (giá trị khởi tạo) và ở đây giá trị khởi tạo khi bắt đầu đệ quy là []
// gán [] vào a
// check điều kiện b có phải là một Array hay không, sau đó bắt đầu lấy a (currentValue) concat cho b (nextValue) -> [].concat([1,2,3])
// Nhưng a đã đang concat với b rồi thì không thể nhét vào điều kiện được, thế nên ta sẽ lấy chính thằng function flatComplexArray để đệ quy

console.log(flatComplexArray(complexArr, Infinity));
