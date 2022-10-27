// Regular expression: Biểu thức chính quy
// 1. 2 cách khai báo với Regex
// I. /.../
const re1 = /hello/;
const re2 = new RegExp("hello");
// hello world
// regex.test(value) -> true/false(boolean)

// console.log(re1.test("hello world"));
// TRUE
// console.log(re1.test("hi world"));
// FALSE

// II. Anchor trong Regex (^ và $)
// ^ string bắt đầu với từ nào đó
// $ string kết thúc với từ nào đó

// const re3 = /hi/;
// re3.test("hi"); // TRUE
console.log(/hi/.test("hi")); // TRUE
// hi$ là kết thúc = hi
console.log(/hi$/.test("you didn't say hi")); // TRUE
console.log(/hi$/.test("you didn't say hello")); // FALSE
// ^hi là bắt đầu = hi
console.log(/^hi/.test("hi, how are you?")); // TRUE
console.log(/^hi/.test("hello, how are you?")); // FALSE
// III. Ranges trong Regex []
// [a-z]: Các kí tự từ a - z
// [A-Z]: Các kí tự từ A - Z
// [0-9]: Các số từ 0-9
// [a-zA-Z0-9]: Các kí tự từ a - z || Các kí tự từ A - Z || Các số từ 0-9
console.log(/[a-z]/.test("a")); // TRUE
console.log(/[a-z]/.test("ajfkb")); // TRUE
console.log(/[a-z]/.test("Ajfkb")); // FALSE
// Kết hợp anchor cùng với range thử xem sao ha ^^
console.log(/[^a-z]/.test("a")); // FALSE
// Ủa chứ không phải là bắt đầu = kí tự là a và chạy đến z hả ?? sao lại false
// No no no, nếu dấu ^ mà nằm trong ngoặc [] thì nó có nghĩa là phủ định -> Tức là đoạn code kia sẽ biến thành là KHÔNG PHẢI TỪ a-z -> /[^a-z]/.test("a") sẽ trả về giá trị false
// IV. Meta characters

// \d: Khớp với số, nó sẽ tương đương với [0-9]
console.log(/\d/.test("1234")); // TRUE

// \D: ngược lại với \d, tương đương với [^0-9]
console.log(/\D/.test("932424")); // FALSE
// \w: Khớp với các kí tự và dấu gạch dưới và số -> tương đương với [a-zA-Z0-9_]
console.log(/\w/.test("cgv_123")); // TRUE
// \W: ngược lại với /w nó sẽ tương đương [^a-zA-Z0-9_]
console.log(/\W/.test("cgv_123")); // FALSE
// \s: Khớp với các kí tự khoảng trắng: spaces, tab, enter
console.log(/\s/.test(" ")); // TRUE
// \S: ngược lại với \s, tương đương với các kí tự không phải khoảng trắng
console.log(/\S/.test(" ")); // FALSE
// \n: Khớp với newline(xuống hàng)
console.log(/\n/.test("\n")); // TRUE
// \t Khớp với tab character
console.log(/\t/.test("\t")); // TRUE
// . : Dùng cho 1 chữ duy nhất, khớp với tất cả ngoại trừ newline(\n)
console.log(/./.test("J")); // TRUE
console.log(/./.test("J\n")); // TRUE
console.log(/./.test("\nJ")); // TRUE
console.log(/./.test("\n")); // FALSE
// [^]: Khớp với tất cả mọi thứ bao gồm newline(\n)
console.log(/[^]/.test("Hi, how it's hanging bro? \n Long time no see!"));

// V. Quantifiers: {n} {n,m} + ? *
// string.match(regex) "abc".match(/\w/) -> []

const str = "Welcome to 2022223525";
// Lấy ra được 4 số trong chuỗi String ở biến str
console.log(str.match(/\d\d\d\d/)[0]); // \d\d\d\d = 2022
// Nhưng mà thế này thì dài và bất tiện quá
// -> Sử dụng quantifier
// {n}: số lượng nhất định
console.log(str.match(/\d{4}/)[0]); // Output: 2022
// {n,m}: số lượng trong khoảng từ n tới m  -> từ 4 tới 6 kí tự
console.log(str.match(/\d{4,6}/)[0]); // Output: 202222
// +: lấy 1 hoặc nhiều kí tự thỏa điều kiện
console.log(str.match(/\d+/)[0]); // Output: 202222

const str2 = "favorite or favourite";
// ?: có thể có hoặc không đều được
console.log(str2.match(/favou?rite/)); // -> chữ u trong từ favourite có thể có hoặc không đều được
// nhưng log biểu thức trên nó chỉ trả về 1 từ favorite duy nhất
// oh no, what can we do??
// Đừng lo đã có flag
// Flag
// g: global
// i: case insensitive
// m: multiple lines
// -> Fix thành:
console.log(str2.match(/favou?rite/g)); // Output: [favorite, favourite]

// *: Không có hoặc là có nhiều
const str3 = "12345";

console.log(str3.match(/\d*/g)); // Output: ["12345",""];

// VI. groups()
console.log("-----GROUP-----");
console.log(/(\d{3})(\w+)/.test("123")); // false
console.log(/(\d{3})?(\w+)/.test("123")); // true

// VII. Escaping \ / [ ] ( ) { } ? + * | . ^ $
// Escaping dùng để nhét các ký tự đặc biệt vào regex mà không lo nó bị biến đổi thành Quantifiers hoặc thứ gì đó khác
console.log(/\?/.test("?")); //TRUE
console.log(/\*/.test("*"));
// VIII. Boudaries \b \B
// \b: Trả về các chuỗi đứng 1 mình
"my name is Khoi".match(/\bKhoi/g); //Ouput: ["Khoi"];
//  \B: Ngược lại với /b, đứng liền tù tì với các từ khác nữa
"my name isKhoi".match(/\BKhoi/); //Ouput: ["Khoi"];
// IX. Replace trong regex
const str4 = "hello, hello, hello!";
console.log(str4.replace("hello", "hi"));
// Ouput: hi, hello, hello
// string,replace(regex, value);
console.log(str4.replace(/hello/g, "hi"));
// Ouput: hi, hi, hi!
const str5 = "Welcome 1234567";
str5.match(/\d+/g);
