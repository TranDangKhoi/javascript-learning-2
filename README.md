### Về Javascript thì thực sự có rất nhiều thứ nếu viết hết, nhưng ở README này mình sẽ tóm lược lại những thứ quan trọng mình đã học nha, và ở repo thứ 2 về javascript này thì mình viết về DOM là chính, các thứ dễ tìm hiểu mình cũng sẽ không đề cập tới

### Khoi's Javascript Doc v1.0

## Các method cơ bản dùng cho class

- Có 4 chức năng cơ bản để dùng cho classList:

* add
* remove
* contains
* toggle
  -> classList là một DOMTokenList chứa danh sách các class của selector mình query tới (có index giống array)

## Ví dụ về các chức năng

- Nếu ta muốn thêm một class vào selector, ta sẽ sử dụng: <br>
  -> selector.classList.add("tên class") <br>

- Ngược lại nếu ta muốn xóa một class khỏi selector, ta sẽ sử dụng: <br>
  -> selector.classList.remove("tên class") <br>

- Nếu ta muốn kiểm tra xem cái selector mình query tới có class nào hay không, ta sẽ sử dụng: <br>
  -> selector.classList.contains("tên class") <br>

- Nếu ta muốn tạo ra một công tắc bật tắt (nếu có rồi thì xóa đi, chưa có thì thêm vào) -> giống như bóng đèn vậy, nếu đèn đang tắt ta gạt công tắc thì đèn sẽ bật, cho tới khi bao giờ muốn tắt ta lại gạt lại là nó sẽ tắt <br>
  -> selector.classList.toggle("tên class") <br>

- Nếu ta muốn lấy ra tên các class của một selector thì ta sẽ sử dụng selector.className -> nó sẽ trả ra chuỗi các class của selector <br>

## Traversing DOM hay nói dễ hiểu là khả năng di chuyển giữa các DOM trong Javascript

- selector.appendChild: Dùng để thêm 1 element vào dưới cùng của selector

- parentNode, parentElement: <br>
  -> Cả 2 đều dùng để trỏ tới thằng cha bao bọc bên ngoài của thằng selector, không có sự khác biệt gì đáng kể <br>

- childNodes và children <br>
  -> childNodes dùng để trỏ tới những thằng con được bao bọc bên trong thằng selector, và bao gồm cả những lần xuống dòng trong html (là một NodeList) <br>
  -> children cũng dùng để trỏ tới những thằng con được bao bọc bên trong thằng selector, nhưng không bao gồm những lần xuống dòng (là một HTMLCollection) <br>

- nextElementSibling: <br>
  -> Trỏ tới thằng cùng cấp tiếp theo của thằng selector <br>

- previousElementSibling: <br>
  -> Trỏ tới thằng cùng cấp đứng trước của thằng selector <br>

- firstChild và firstElementChild:
  -> Trỏ tới thằng đứng đầu tiên được thằng selector bao bọc bên trong HTML (firstChild sẽ trả về #text nếu có xuống dòng, còn firstElementChild sẽ trả về luôn tên element) <br>

- lastChild và lastElementChild cũng tương tự, chỉ khác là nó trỏ tới thằng cuối cùng nằm bên trong thằng selector bao bọc bên ngoài <br>

## setTimeOut và setInterval trong Javascript

1. setTimeOut là gì ? <br>

- Hàm setTimeout() thường được sử dụng nếu bạn muốn hàm của mình thực thi bao nhiêu mili giây kể từ khi gọi method setTimeout() <br>

VD: setTimeout ( expression, timeout ); <br>

- Trong đó: <br>

* expression là đoạn mã JavaScript bạn muốn thực thi sau khi timeout chạy hết số mili giây đã thiết lập. <br>
* timeout là thời gian (mili giây) sau bao lâu bạn muốn thực thi đoạn mã đó. <br>

-> Để theo dõi thời gian chờ, setTimeout() cũng trả về một số id của timeout. Điều này thường được sử dụng trong method clearTimeout(). <br>

2. setInterval là gì ?<br>
   Hàm setInterval() như cái tên của nó, hàm này sẽ thường được sử dụng để thiết lập độ trễ cho các hàm sẽ được thực hiện lặp lại như là hiệu ứng (tức là chỉ khác so với setTimeOut là setInterval thực hiện lặp lại nhiều lần cho tới khi có dòng lệnh dừng hiệu ứng bằng clearInterval)<br>

# Update v1.0.1:

# offset, client, window

- Về **offset** thì mình sẽ không giải thích nhiều, mà đi thẳng luôn vào ví dụ cho dễ hiểu:
- Giả dụ, ta code **HTML, CSS, Javascript** cho ra 1 khối hình vuông màu có viền màu đen như sau **(LƯU Ý: MÌNH SẼ CODE THÊM CẢ CÁC CONTENT KHÁC NỮA ĐỂ CÁC BẠN HIỂU RÕ HƠN)**:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Các thẻ meta -->
    <!-- Reset CSS -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/jgthms/minireset.css@master/minireset.min.css"
    />
    <!-- File CSS để code ra hình vuông có viền đen -->
    <link rel="stylesheet" href="css/style.css" />
  </head>

  <body>
    <h3>
      <a href="#" class="demo">
        <p>Demo anchor</p>
        <strong>Demo children</strong>
      </a>
      <span class="span">
        <strong>Tran Dang Khoi</strong>
      </span>
      <span class="span2">
        <strong>Tofu</strong>
      </span>
      <span class="span3">
        <strong>Tofu</strong>
      </span>
    </h3>
    <div class="boxed"></div>
    <script src="app.js"></script>
  </body>
</html>
```

- File style.css, mình sẽ code đơn giản như sau:

```css
.boxed {
  width: 200px;
  height: 200px;
  padding: 20px;
  border: 5px solid black;
  margin-left: 50px;
}
```

- Còn bên file app.js, mình sẽ code luôn và ta cùng xem hình mà mình code và output ra console nó như thế nào nhá

```js
console.log(box.offsetWidth); // trả về độ rộng của box
// offsetHeight -> trả về chiều cao của phần tử
console.log(box.offsetHeight); // trả về độ cao của box
console.log(box.offsetLeft); // trả về chiều dài của nó so với bên trái
console.log(box.offsetTop); // trả về chiều dài của nó so với bên trên
console.log(box.offsetParent); // trả về phần tử cha để lấy giá trị của phần tử cha
```

- **Kết quả mình nhận được ở trang web**:
  ![Ảnh](https://discloud-storage.herokuapp.com/file/647b7a7bdf9696475fb2e118f666313b/box.png)

- **Kết quả mình nhận được ở console**:
  ![Anh](https://discloud-storage.herokuapp.com/file/2df204b58a2bb618207f080a26f68ba2/box.png)

- Như các bạn thấy, nó đã trả về đúng kết quả, để chứng minh ta cùng nhìn vào hình sau:

  ![asd](https://discloud-storage.herokuapp.com/file/9aa3adc383cf32f37363577808fccee6/box.png)

- Ta sẽ cộng thử tất cả vào với nhau nha 150 + padding của cả 2 bên (20 + 20) + 2 bên viền đen, mỗi bên 5px (5px + 5px). **VÀ CUỐI CÙNG**, sẽ thực sự ra tổng cộng là 200 như trong hình output của console, và đương nhiên các kết quả khác cũng như vậy rồi ^^

- Tương tự, về `client` ta sẽ có:

```js
console.log(box.clientWidth); // lấy độ rộng phần tử, trừ đi border
console.log(box.clientHeight); // lấy độ cao phần tử, trừ đi border
console.log(box.clientLeft); // Vị trí của nó so với bên trái ngoài cùng của chính nó (cụ thể là lấy kích thước thằng border bên trái)
console.log(box.clientTop); // Vị trí của nó so với bên trên ngoài cùng của chính nó (cụ thể là lấy kích thước thằng border bên trên)
```

- Và `window`:

```js
console.log(window.innerHeight); // lấy cả chiều cao của viewport bên trong website
console.log(window.outerHeight); /// lấy cả chiều cao của từ đỉnh trình duyệt xuống dưới cùng của trình duyệt
console.log(window.innerWidth); // lấy chiều rộng hiện tại của website trong viewport bên trong web
console.log(window.outerWidth); // lấy chiều rộng của cả màn hình
```

## NodeList vs HTMLCollection

- Giống nhau:
  - Có thể truy cập bằng `index`
  - Có `length`
- Khác nhau:
  - HTMLCollection: Không sử dụng được phương thức `forEach`
  - NodeList: Sử dụng được phương thức `forEach`

## parentNode và parentElement

- parentNode:không thể null, sẽ lấy hết toàn bộ nội dung của những thằng bọc nó luôn, bao gồm cả comments
- parentElement: có thể null, không lấy comments

## Custom attribute và cách để lấy ra giá trị

- `Custom attribute` là gì, nó là 1 tính chất của 1 thẻ mà ta tự tạo ra, ví dụ con người thì có **đầu** và **thân**, thì khi viết vào `html` ta sẽ viết là

```html
<div id="human" data-head="round" data-body="fit"></div>
```

- Đó như bạn thấy, ở thẻ div có **id** là **human** mình đã tạo cho nó 2 **tính chất** là **data-head** và **data_body**

- Vậy làm thế nào để ta lấy được 2 attribute này trong JS, khá là đơn giản thôi, ta sẽ có **2** cách:

- Cách 1:

```js
// .dataset.head
const human = document.querySelector("#human");
human.addEventListener("click", function (e) {
  const head = e.target.dataset.head;
  console.log(head);
});

// Nếu giả dụ bên HTML bạn có viết là data-head-hair="brown" thì phải làm sao ?
// Cũng vậy thôi nhưng mà viết dưới dạng camelCase

const hair = e.target.dataset.headHair;
console.log(hair);
```

- Cách 2:

```js
const human = document.querySelector("#human");
console.log(human.data("head"));
```

## target và currentTarget

- target: Sẽ chọn chính xác element mà mình đã click vào

VD:

```html
<button className="button">
  <span>Click me</span>
</button>
```

```js
const button = document.querySelector("button");
button.addEventListener("click", function(e)){
  console.log(e.target);
  // e.target: chọn đúng phần tử mà mình click vào
  // Ví dụ bây giờ, mình click vào thẻ span nằm trong thẻ button thì nó sẽ log thằng span ra chứ không phải thằng button
  console.log(e.currentTarget);
  // e.currentTarget: chọn phần tử mà hiện tại đang sử dụng event listener này và đương nhiên ở đây là button
}
```

## pageXY và clientXY

- Demo một đoạn code ngắn cùng với comments do mình lười giải thích :'( :

```js
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
```

- pageXY và clientXY thường được sử dụng để làm hiệu ứng zoom vào ảnh, hiển thị/thay đổi nội dung khi hover vào 1 điểm nào đó, ...

## getBoundingClientRect

- getBoundingClientRect là gì ? Nó là một function được tích hợp sẵn của javascript dùng để lấy ra tọa độ của phần tử tính theo page và viewport

- getBoundingClientRect() sẽ return ra 1 DOMRect (1 object) bao gồm top, left, width, height, x và y

- Ví dụ, nếu phần tử của bạn được **code CSS là left:50%** và **màn hình của bạn có độ phân giải là 1920x1080** thì left sẽ ra = 1920 / 2 = 960

- Đơn giản vậy thui, các phần tử khác thì ý nghĩa cũng giống như tên của nó thôi, top là tính từ trên cùng tới phần tử, width và height là chiều rộng - chiều cao của phần tử, ...

- getBoundingClientRect thường được dùng để code ra tooltip, hover effect, ...

## Sự kiện keypress khác gì keydown

- keypress: Sẽ ignore những phím không phải chữ/số, ví dụ như backspace, shift, pageup, pagedown, ...

- keydown: Chấp nhận tất cả các key hợp lệ có trong bảng ASCII

## Sự kiện change

- Sự kiện change thường được sử dụng cho các loại input (radio, text, password, checkbox, ...) để xác định khi có sự thay đổi

## Sự kiện input

- Bản chất không khác gì keypress, keydown nhưng nó sẽ lấy được value của input khi vừa press xong, còn keypress và keydown chỉ lấy được value của input trước đó 1 bậc

- Ví dụ bạn gõ vào input là: `Tôi tên là Khôi`.

- Thì lúc này nếu bạn sử dụng keydown, keypress, change thì input value vẫn chỉ nhận là `Tôi tên là Khô` nên nó không hoàn toàn đúng

## Debounce là gì ?

- Là một kỹ thuật để bạn hạn chế function được gọi ra quá nhiều lần mà không cần thiết.

- Ví dụ, khi bạn tìm kiếm một sản phẩm có cái tên siêu dài **(VD: Laptop Gaming Asus Rog Strix)**, thì số lần function search được thực hiện sẽ tương đương với số kí tự có trong tên sản phẩm, ví dụ tên sản phẩm có 22 kí tự, function tìm kiếm cũng sẽ phải thực hiện 22 lần, DO **mỗi lần bấm một từ thì phải thực hiện search lại một lần**.
  <br>
  -> Cho nên ta phải sử dụng debounce để hạn chế invoke function search liên tục **VÌ điều đó thực sự không tốt một chút nào**, ảnh hưởng kha khá tới hiệu năng trang web nếu phải hiển thị nhiều sản phẩm mà không có limit số sản phẩm mỗi lần hiển thị.

## offsetWidth và scrollWidth

- Giữa `offsetWidth` và `scrollWidth` có 1 điểm khác nhau mà nếu không để ý, đọc kĩ bạn có thể bỏ qua

- Giả dụ, mình đang code ra **1 khối hình vuông** có **width:200px, height:200px**

```html
<!-- HTML -->
<div class="boxed"></div>
<script src="app.js"></script>
```

```css
/* CSS */
.boxed {
  width: 200px;
  height: 200px;
  background: orange;
  overflow: auto;
}
```

- Lúc này, nếu bạn **thực hiện console.log** ra kết quả của `offsetWidth` và `scrollWidth` của **.boxed** thì chắc chắn sẽ không có gì khác nhau, cả hai đều bằng nhau rồi, nhưng điểm khác nhau của `offsetWidth` và `scrollWidth` đó chính là nếu **BÊN TRONG thằng .boxed mà có bọc một thằng con có width lớn hơn .boxed, sau đó CSS cho boxed overflow: auto** thì kết quả mà ta lấy ra được lúc này chắc chắn sẽ khác nhau:

```html
<div class="boxed">
  <div class="boxed-content"></div>
</div>
<script src="app.js"></script>
```

```css
.boxed {
  width: 200px;
  height: 200px;
  background: orange;
  overflow: auto;
}

.boxed-content {
  width: 600px;
  height: 600px;
}
```

```js
// scrollWidth vs offsetWidth
const boxed = document.querySelector(".boxed");

console.log(boxed.offsetWidth);
// Output: 200px
console.log(boxed.scrollWidth);
// Output: 600px
```

## scrollIntoView là gì?

- Là 1 phương thức trong JS để scroll tới element. Ví dụ, ta có một thanh **Navigation Bar**, và khi click vào một button nào đó, nó sẽ scroll tới đó, thì button đó phải gọi tới phương thức navigationBar.scrollIntoView()

- VD:

```js
const navigationBar = document.querySelector(".navigation-bar");

const scrollUpButton = document.querySelector(".scroll-up-button");

scrollUpButton.addEventListener("click", function () {
  navigationBar.scrollIntoView();
});
```

# onclick và addEventListener("click")

- Trước tiên mình sẽ nói cách viết

```html
<!-- HTML -->
<button class="button">Click me!</button>
```

```js
const button = document.querySelector(".button");

function handleClick() {
  console.log("Clicked");
}

// Sử dụng onclick
button.onclick = handleClick;
// Sử dụng addEventListener("click")
button.addEventListener("click", handleClick);
```

- Khác nhau:

  - Cách viết
  - onClick chỉ add được 1 event handler, trong khi đó addEventListener có thể xử lý nhiều events cùng 1 lúc
  - addEventListener có thể sử dụng capture, bubble và once

- Ví dụ, nếu ta có 2 **functions** trở lên:

```js
const button = document.querySelector(".button");
// First function
function handleClick() {
  console.log("Clicked");
}
// Second function
function handleClick2() {
  console.log("Clicked 2");
}

// Sử dụng onclick
button.onclick = handleClick;
button.onclick = handleClick2;
// Output: Clicked 2
```

- Vì **function handleClick của event onclick thứ nhất** đã bị **function handleClick2 event onclick thứ 2** đè lên, nên chỉ thực thi được **function thứ 2 thôi**

- Còn đối với addEventListener thì sao ?

```js
const button = document.querySelector(".button");
// First function
function handleClick() {
  console.log("Clicked");
}
// Second function
function handleClick2() {
  console.log("Clicked 2");
}

button.addEventListener("click", handleClick);
button.addEventListener("click", handleClick2);

// Output:
// Clicked
// Clicked 2
```

## bubble vs capture vs once

- 3 cái này là option để sử dụng trong function addEventListener():

  - bubble: Chạy từ ngoài vào trong
  - capture: Chạy từ trong ra ngoài
  - once: Chỉ chạy 1 lần duy nhất

## Local Storage là gì ? (Code thì đơn giản nhưng để hiểu sâu thì khá phức tạp :') cry cry)

- Local Storage là kho lưu trữ ở dưới dạng local, lưu bên trong trình duyệt của máy tính và có type là một object
- Một vài điều thú vị và ưu điểm của Local Storage:
  - là Javascript thuần! Thứ gây ức chế nhất về cookies đó là nó cần được tạo bởi web server ! Nếu bạn đang build một static site đơn giản thì việc dùng Local Storage đồng nghĩa với các webpage của bạn có thể chạy độc lập với bất kì server nào -> không cần ngôn ngữ BE nào hay logic nào để lưu data trong browser
  - Một điều nữa về local storage đó là nó không có nhiều size constraint (ràng buộc kích cỡ) như cookies. Local Storage cung cấp ít nhất 5MB data storage qua tất cả các web browser, hơn rất nhiều so với cookies (max 4KB)
    -> Chính 2 điều trên làm cho Local Storage trở nên hữu ích nếu bạn cache một số app data trong browser để dùng sau. Vì với 4KB là không nhiều, local storage là một trong những option thay thế duy nhất
- Đã có ưu điểm thì cũng phải có nhược điểm, vậy local storage có gì những gì không tốt
  - Local Storage cực kì basic, API rất đơn giản:
  * Nó chỉ có thể lưu string data -> Nó trở nên vô dụng khi muốn lưu trữ các loại data phức tạp hơn.
  * Nó có đồng bộ -> đồng nghĩa mỗi local storage operation bạn chạy sẽ chỉ được một lần duy nhất
  * Các web worker không thể dùng nó, nếu bạn muốn build một app tận dụng background process để tăng hiệu suất, các chrome extensions, bạn không thể dùng local storage vì nó không có sẵn cho các web server
  * Nó vẫn giới hạn size của data bạn có thể lưu trữ. Đây là một khoản khá hạn hẹp cho những người build app mà có lượng data lớn hoặc cần phải function offline
  * Tính bảo mật kém bởi các hacker có thể sử dụng Cross Site Scripting (XSS), DNS spoofing attacks... để tấn công.
    <br>
    -> Túm cái váy lại thì, chỉ nên dùng local storage khi cần các info có sẵn mà không quá nhạy cảm, không cần dùng cho các app cao cấp, không quá 5MB và chỉ chứa string data
- CHÚ Ý:
  - Không lưu các JSON Web Tokens(JWT) trong local storage
  - Nếu các link bạn nhúng vào website bị hack thì các hacker có thể dễ dàng lấy hết thông tin trong local storage của người dùng

## Regular Expression hay Regex là gì ? (kiến thức khó học thuộc và khó nhớ)

- Regular expression hay còn có tên gọi là biểu thức chính quy, được dùng để xử lý chuỗi nâng cao thông qua biểu thức riêng -> những biểu thức này sẽ có những nguyên tắc riêng và bạn phải tuân theo nguyên tắc đó thì biểu thức của bạn mới hoạt động được.
- Hầu hết các ngôn ngữ lập trình nào cũng có khái niệm về RegEx (PHP, Javascript, Java, ...) nhưng hôm nay mình sẽ đưa ra ví dụ về Regex trong Javascript (vì mình học khá mỗi nó :'( )
- Có tất cả 9 thứ tiêu biểu bạn cần học về regex trong Javascript:

  - Cách khởi tạo một regex (/.../)
  - Anchor (^, $)
  - Ranges [] [a-z] [A-Z] [0-9] ...
  - Meta sequences (\d, \D, \w, \W, \s, \S, \n, \t, ., [^])
  - Quantifiers ({n}, {n,m} , + , ?, \*)
  - Flag (g,i,m)
  - Groups() : Hợp thể các biểu thức regex vào nhau
  - Boundaries (\b, \B)
  - Last but not least, replace chuỗi string bằng regex trong Javascript <br>

  ```js
    VD:
    const str = "hello, hello, hello!!!";
    str.replace(/hello/g, "hi")
    Output: "hi, hi, hi!!!"

  ```

- Các kí hiệu trên thì bất cứ ai đang đọc tự tìm hiểu nha hê, mình lười không giải nghĩa hết từng cái được

## Async và Defer trong script tag

- Async:
  - Sử dụng async trong trường hợp khi các bạn muốn sử dụng dịch vụ bên thứ 3 (Quảng cáo Google, Facebook, ...) muốn chèn vào trang web của mình -> thì sử dụng async để chạy độc lập, không phụ thuộc vào các script khác, không quan tâm DOM chạy hay chưa
- Defer:
  - Sử dụng khi muốn chạy script theo một thứ tự nhất định để các script có thể kế thừa function của nhau và để DOM load hết rồi mới load script

## i++ và ++i khác nhau thế nào ?

- i++ là gán giá trị cho i trước rồi tăng sau
- ++i là tăng trước rồi gán giá trị cho i sau

## Closure in Loop

## Local Storage và Session Storage

- Local Storage thì khi bạn đóng tab đi mở lại nó vẫn lưu trong storage cho bạn
- Session Storage thì khi đóng tab đi mở lại nó sẽ mất hoàn toàn và không lưu lại gì hết

## Những trường hợp không nên sử dụng arrow function

- Khi làm việc với những event handler function mà cần sử dụng từ khóa this. Bởi khi dùng arrow function thì function sẽ không hiểu this là gì cả

- Khi làm việc với function trong object

```js
  VD:
  const student = {
  mark: 5;
  increment: () => {
  return this.mark++;
    }
  }

  console.log(student.increment()); // NaN
```

## Đệ Quy Aka Recursion ("Nó" gọi lại chính nó)

- Ví dụ một bài toán đếm ngược dưới đây nếu đếm ngược từ 10 ta có thể làm đơn giản = vòng lặp for NHƯNG KHÔNG, mình không thích làm theo cách dơn giản, phải phức tạp một chút

```js
function countDown(number) {
  //  countDown ở đây là "nó"
  console.log(number);
  countDown(number - 1); // "Nó" gọi lại chính "nó - 1"
}
countDown(10);
```

- Nhưng mà viết ở trên nếu ta check màn hình console ta thấy nó chạy hoài tới âm vô cực ==> phải dừng đệ quy lại không thì rất nguy hiểm

- if (condition) stop recursive else run recursive

## Local Storage và Session Storage

- Session Storage nếu tắt tab đi thì nội dung lưu bên trong sẽ biến mất còn Local Storage thì không

## Những trường hợp không nên sử dụng Arrow Function

- Nếu cần sử dụng tới this thì không nên sử dụng arrow function, đặc biệt là trong event handler (addEventListener), object

## this trong javascript - super sida

- this – một từ khóa dễ làm đau đầu các lập trình viên JS.

- Khi bạn vẫn còn ngây thơ, nghĩ rằng this vô cùng dễ hiểu, hiền lành, vô hại, hẳn bạn cũng nhớ từ khóa this dùng để trỏ tới chính **object gọi hàm đó**. ví dụ:

```js
var person = {
  firstName: "Khoi",
  lastName: "Tran",
  showName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

//Ở đây this sẽ là object person
person.showName(); //Khoi Tran.
```

- Một trường hợp khác, khi ta khai báo **biến global và hàm global**, toàn bộ các biến và hàm đó sẽ nằm trong một object có tên là **window**. Lúc này, khi ta gọi hàm showName, chính object **window** là object gọi hàm đó, this trỏ tới chính object **window**. ví dụ:

```js
var firstName = "Khoi",
  lastName = "Tran";
// 2 biến này nằm trong object window

function showName() {
  console.log(this.firstName + " " + this.lastName);
}

window.showName(); // Khoi Tran. this trỏ tới object window
showName(); //Khoi Tran. Object gọi hàm showName vẫn là object window
```

- Cho tới khi bạn đã nhiều kinh nghiệm, bắt đầu học sang những thứ nâng cao thì BÙM, bạn lại gặp phải **this**, sự đáng sợ và khó chịu của this sẽ dần lộ ra qua các ví dụ dưới đây:

#### Rắc rối 1: Hàm được truyền vào như một callback

- Giả sử, ta muốn khi người dùng click vào một button, ta sẽ gọi hàm showName của user. Vô cùng đơn giản, ta chỉ cần truyền hàm showName vào như một callback cho hàm click là xong. **NHỈ** ?

```js
var person = {
  firstName: "Hoang",
  lastName: "Pham",
  showName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

//Ở đây this sẽ là object person
person.showName(); //Hoang Pham.

$("button").click(person.showName); //showName truyền vào như callback
```

- Lúc này chắc hẳn bạn đã hồn nhiên đi check **dev tools của chrome** và **thốt lên "WTF, sao lại không chạy? Sao object this không có trường firstName và lastName ?".** Kiểm tra kĩ chút nữa thì ta thấy **this** ở đây là chính **button ta đã click vào, chứ không còn là object person như ví dụ trên nữa**.

- Trong trường hợp trên, ta có thể sửa lỗi bằng cách sử dụng `anonymous function`, hoặc dùng hàm bind để xác định tham số this cho hàm truyền vào là được.

```js
var person = {
  firstName: "Khoi",
  lastName: "Tran",
  showName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

$("button").click(person.showName); //showName truyền vào như callback, ở đây this chính là button

// Dùng anonymous function
$("button").click(function () {
  person.showName();
});

// Dùng bind
$("button").click(person.showName.bind(person)); //this ở đây vẫn là object person
```

#### Rắc rối 2: Sử dụng this trong anonymous function

- Giả sử, object person có một danh sách bạn bè, bạn muốn viết một function show toàn bộ bạn bè của person đó. Theo lý thuyết, ta sẽ viết như sau:

```js
var person = {
  firstName: "Hoang",
  lastName: "Pham",
  friends: ["Minh", "Sang", "Khoi", "Hoang"],
  showFriend: function () {
    for (let i = 0; i < this.friends.length; i++)
      console.log(this.firstName + " have a friend named " + this.friends[i]);
  },
  showFriendThis: function () {
    this.friends.forEach(function (fr) {
      console.log(this.firstName + " have a friend named " + fr);
    });
  },
};

person.showFriend(); //Hàm chạy đúng

person.showFriendThis(); // Hàm chạy sai
```

- Với hàm showFriend, khi ta dùng hàm for thường, hàm chạy đúng như mong muốn. Tuy nhiên, trong trường hợp dưới, khi ta dùng hàm forEach, truyền vào một anonymous function, this ở đây lại thành object window, do đó trường firstName bị underfined.

- Trong trường hợp này, cách giải quyết ta thường dùng là tạo một biến để gán giá trị this vào, và truy xuất tới giá trị đó trong anonymous function.

```js
var person = {
  firstName: "Hoang",
  lastName: "Pham",
  friends: ["Minh", "Sang", "Khoi", "Hoang"],
  showFriendFixed: function () {
    var personObj = this; //Gán giá trị this vào biến personObj
    this.friends.forEach(function (fr) {
      console.log(personObj.firstName + " have a friend named " + fr);
    });
  },
};

person.showFriendFixed(); //Hàm chạy đúng
```

#### Rắc rối 3: Khi hàm được gán vào một biến

## Prototype là gì?

- Khi một thằng dev khác cứ đi theo và hỏi bạn “**Prototype** là cái đếu gì?”, hãy trả lời nó: "Là cái thằng **cha** mày, hỏi suốt". Câu trả lời này có phần hơi bố láo nhưng lại khá là chính xác, có thể hiểu protoype nôm na là **khuôn hoặc là cha** của một **object**.

- Trong **JavaScript**, trừ **undefined**, toàn bộ các kiểu còn lại đều là **object**. **Các kiểu string, number, boolean** lần lượt là **object dạng String, Number, Boolean**. **Mảng** là **object dạng Array**, **hàm là object dạng Function**. **Prototype** của mỗi object **chính là cha của nó**, **cha của String là String.prototype**, **cha của Number là Number.prototype**, **của Array là Array.prototype**.

- Trong JavaScript, việc kế thừa được hiện thực thông qua prototype. Khi ta gọi property hoặc function của một object, JavaScript sẽ tìm trong chính object đó, nếu không có thì tìm lên cha của nó. Do đó, ta có thể gọi các hàm toUpperCase, trim trong String là do các hàm đó đã tồn tại trong String.prototype.
  ![Anh](https://toidicodedao.files.wordpress.com/2016/01/prototype.jpg)

- Khi ta thêm function cho prototype, toàn bộ những thằng con của nó cũng học được function tương tự.

```js
var str = "abc"; // str là string, cha nó là String.prototype

// nhân đôi chuỗi đưa vào
String.prototype.duplicate = function () {
  return this + this;
};

console.log(str.duplicate()); // Tìm thấy hàm duplicate trong prototype
```

- Như mình đã nói, Array, Number hay String có cha là Object, do đó chúng đều có các hàm như constructor, hasOwnProperty, toString thuộc về của Object.prototype.

- Nhắc lại một chút kiến thức trong bài viết trước về object: Ta có 2 cách để khởi tạo object, đó là sử dụng object literal và Constructor Function. Nếu dùng object literal, object được tạo ra sẽ có prototype là Object.protoype. Nếu dùng constructor function, object sẽ có một prototype mới, prototype mới này kế thừa Object.prototype.

```js
var person = {
  firstName: "Hoang",
  lastName: "Pham",
  showName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
}; // object này có prototype là Object.prototype

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.showName = function () {
    console.log(this.firstName + " " + this.lastName);
  };
}

var otherPerson = new Person("Hoang", "Pham"); // object này có prototype là Person.prototype
// Prototype mới: Person.prototype được tạo ra
// Person.prototype kế thừa Object.prototype
```

- Những object được tạo ra bằng cách gọi new Person() đều có prototype là Person.prototype. Nếu muốn thêm trường hay hàm cho các object này, chỉ cần thêm 1 lần vào prototype là xong. Hiểu nôm na thì prototype cũng có vài phần giống với class, mỗi tội sida hơn.

```js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.love = function () {
  console.log("XXX");
};

var otherPerson = new Person("Tran", "Khoi"); // object này có prototype là Person.prototype
otherPerson.love(); // XXX
```

# Prototype dùng để làm gì ?

- Tại sao lại đẻ ra cái khái niệm prototype này làm gì? Xin thưa với các bạn, đó là do sự sida của JavaScript. Trong JavaScript không có khái niệm class (ES5), do vậy, để kế thừa các trường/hàm của một object, ta phải sử dụng prototype.

```js
function Person() {
  this.firstName = "Per";
  this.lastName = "son";
  this.sayName = function () {
    return this.firstName + " " + this.lastName;
  };
}

// Viết một Constructor Function khác
function SuperMan(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Ta muốn SuperMan sẽ kế thừa các thuộc tính của Person
// Sử dụng prototype để kế thừa
SuperMan.prototype = new Person();

// Tạo một object mới bằng Constructor Function
var sm = new SuperMan("Hoang", "Pham");
sm.sayName(); // Hoang Pham. Hàm này kế thừa từ prototype của Person
```

- Nói nôm na, prototype có phần giống class, được sử dụng để hiện thực việc kế thừa (interitance) trong JavaScript.

# Trói đít (this) lại bằng bind

- **Bind** là một hàm nằm trong **Function.prototype**, do đó **chỉ có function mới có khả năng gọi nó**. Như đã nhắc tới về this, bind được dùng để xác định tham số this cho một function.

- Như trong trường hợp dưới đây, khi ta truyền hàm **showName** vào như một **callback** cho hàm **button.click**, giá trị this ở đây chính là **button** đó. Để hàm chạy đúng, ta dùng **bind để bind giá trị person và this**.

```js
var person = {
  firstName: "Hoang",
  lastName: "Pham",
  showName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

//showName truyền vào như callback, ở đây this chính là button
$("button").click(person.showName);

// Dùng bind để xác định giá trị this
$("button").click(person.showName.bind(person)); //this ở đây vẫn là object person
```

- Không chỉ bind được giá trị this, bind còn bind được các tham số truyền vào cho hàm nữa. Do đó, Bind còn được dùng để viết partial function.

- Nói một cách đơn giản, partial function tức là tạo ra 1 function mới từ 1 function cũ bằng cách gán mặc định một số tham số cho function cũ đó. Bạn hãy xem ví dụ cụ thể sau. Mình có một hàm log đơn giản có 3 tham số:

```js
function log(level, time, message) {
  console.log(level + " – " + time + ": " + message);
}
```

- Giả sử mình muốn tạo một hàm log khác, ghi lại các log error của hôm nay, mình có thể viết một hàm mới dựa theo hàm log cũ:

```js
function log(level, time, message) {
  console.log(level + " – " + time + ": " + message);
}

function logErrToday(message) {
  log("Error", "Today", message);
}

logErrToday("Server die."); // Error – Today: Server die.
```

- Thay vì viết như thế, mình có thể viết đơn giản hơn bằng các dùng bind. Ở đây log là function cũ, logErrToday là function mới, được tạo ra bằng cách gán mặc định 2 tham số level và time.

```js
function log(level, time, message) {
  console.log(level + " – " + time + ": " + message);
}

// Không có this nên set this là null
// Set mặc định 2 tham số level và time
var logErrToday = log.bind(null, "Error", "Today");

// Hàm này tương ứng với log('Error', 'Today', 'Server die.')
logErrToday("Server die.");
// Error – Today: Server die.
```

- Partial Function còn được gọi là Curry (Nhiều người bảo 2 cái đó là một, nhiều người bảo 2 cái đấy khác nhau). Nếu bạn thấy khái niệm partial function/curry khá lạ tai cũng đừng lo, chúng ít được dùng trong Java, C# mà hay được sử dụng khá nhiều trong một số ngôn ngữ kiểu lập trình hàm (functional programming) như Haskell, F#, Scala,…. . Functional programming khá là khó học, dễ nhức đầu đau não, bạn nào muốn thử sức thì cứ kiếm ngôn ngữ Haskell mà phang nhé.

## Call và Apply, tuy 2 mà 1, thấy 1 mà 2

- Đây là 1 cặp song sinh trong JavaScript. Hai hàm này nằm trong prototype của **Function(Function.prototype)**, do đó **chỉ function** mới có thể gọi. Chúng có chung một chức năng lại: Gọi 1 function, xác định tham số this, truyền các tham số còn lại vào.

- Điểm khác nhau là apply truyền vào một array chứa toàn bộ các tham số còn call truyền lần lượt từng tham số. Dể dễ nhớ, ta có thể nhẩm **“A là một Array, C là nhiều Cục“.**

- Ảnh chứa khái niệm về **apply**:
  ![Anh](https://toidicodedao.files.wordpress.com/2016/02/apply.png?w=534&h=380)

- Ảnh chứa khái niệm về **call**:
  ![Anh](https://toidicodedao.files.wordpress.com/2016/02/call.png?w=546&h=336)

- Cùng xem ví dụ đơn giản này về call và apply, bạn sẽ hiểu ngay:

```js
// Tìm max bằng cách gọi hàm Math.max
Math.max(4, 3, 2, 10);

// Thay vì gọi trực tiếp hàm Math.max, ta có thể dùng call
// Set this bằng null
Math.max.call(null, 4, 3, 2, 10);

// Apply tương tự call, nhưng không truyền lần lượt
// Mà truyền một array chứa toàn bộ các tham số
Math.max.apply(null, [4, 3, 2, 10]);
```

- Call và apply thường được dùng để mượn hàm (borrowing function). Các bạn thử đọc xem dòng code dưới đây làm gì?

```js
function test(firstParam, secondParam, thirdParam) {
  var args = Array.apply(null, arguments);
  console.log(args);
}

test(1, 2, 3); // [1, 2, 3]
```

## Getter và Setter trong JS

- Javascript cũng có khái niệm class và constructor như Java, C#, ... và nếu đã tồn tại 2 khái niệm này thì chắc chắn cũng sẽ tồn tại getter và setter, dưới đây là ví dụ về cách viết VÀ mình sẽ không nói gì thêm vì cái này khá cơ bản:

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  // Cách 1: được dùng phổ biến và nên dùng
  get name() {
    return this._name;
  }
  set name(name) {
    return (this._name = name);
  }
  // Cách 2:
  // getName() {
  //   console.log(this.name);
  // }
  // setName(name) {
  //   this.name = name;
  // }
}

const person1 = new Person("John");
console.log(person1.name);
```

  <br>
  Ideas: toidicodedao.com
