function log(value) {
  console.log(value);
}

const li = document.getElementsByTagName("li"); // HTMLCollection
const li2 = document.querySelectorAll("li"); // NodeList
log(li);
log(li2);

// Điểm giống: Có thể truy cập bằng index, và có độ dài (.length)
// Điểm khác:
// HTMLColleciton: không sử dụng được forEach (nhưng nếu dùng vòng lặp for và lặp = index thì sẽ được)
// NodeList: sử dụng được forEach

// Hướng dẫn convert NodeList, HTMLCollection thành Array
Array.from(HTMLCollection);
// Spread operator
// [...HTMLCollection], [...NodeList]
const HTMlArr = [...li].map((item) => item);
console.log(HTMlArr);
