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

# Callback trong JS là gì ?

- **Callback** là một khái niệm không hẳn là mới. Tuy nhiên, nó là một trong những khái niệm khá lằng nhằng và dễ gây nhầm lẫn trong lập trình. Với 1 số bạn có basic về **C++, Java hay C#**, ta thường biết đến **callback** qua khái niệm **delegate (con trỏ hàm)**.

- Tuy nhiên, ở docs này thì mình sẽ viết về callback trong JS. Lý do là vì callback trong JS là đơn giản, dễ hiểu nhất

- Đầu tiên, mình sẽ nhắc lại về khái niệm callback:

  - `A callback is a piece of executable code that is passed as an argument to other code, which is expected to call back (execute) the argument at some convenient time.`

- Nói một cách dễ hiểu, callback tức là ta truyền một đoạn code (Hàm A) này vào một đoạn code khác (Hàm B). Tới một thời điểm nào đó, Hàm A sẽ được hàm B gọi lại (callback).

- Có thể tới đây bạn vẫn chưa hiểu? Ok mình sẽ làm một số ví dụ đơn giản sau đây

- VD1:
  - Bạn có việc phải đi công tác xa nhà. Bạn dặn vợ, trong thời gian bạn đi, nếu như có ai giao quà tới, hãy đem qua tặng em gái dễ thương hàng xóm. **Hàm A ở đây là việc tặng quà cho em hàng xóm**:
  ```js
  function tangQua(qua) {
    console.log("Đã tặng " + qua);
  }
  ```
  - **Hàm B ở đây là việc vợ bạn ở nhà**. **Ta truyền hàm A vào như 1 argument cho hàm B**, tại 1 thời điểm nào đó, hàm B sẽ gọi hàm A (Tức là vợ bạn mang quà qua cho em hàng xóm).
  ```js
  function oNha(vo, tangQua) {
    var qua = "Váy";
    tangQua(qua);
  }
  ```

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

## Giải thích về Event Loop

- Ví dụ giờ tớ có một đoạn code nho nhỏ như sau:

```js
function task(msg) {
  let number = 100000;
  while (number > 0) {
    number--;
  }
  console.log(msg);
}

console.log("Start");
task("Loading");
console.log("End");
// Output:
// Start
// Loading
// End
```

- Nhìn vào **output** của đoạn code trên, các bạn có thể nghĩ rằng là **"Ủa alo, cái này hoàn toàn bình thường mà"**, **NHƯNG**:

- Có thể thấy rõ ràng thằng **function task()** phải mất nhiều thời gian mới chạy hết được trong lúc đó thì thằng **console.log("End")** nó phải đợi thằng **task("Loading")** chạy xong thì mới tới lượt nó chạy -> đây là **Blocking Script** -> thể hiện **tính chất đồng bộ trong JS (chạy từ trên xuống dưới)**

- Để ngăn chặn tình trạng **Block Script** như trên xảy ra, thì ta sẽ phải sử dụng đến **tính bất đồng bộ trong Javascript**

```js
console.log("Start");
setTimeout(() => {
  task("Loading");
}, 2000);
console.log("End");
// Output:
// Start
// End
// Loading
```

- Tại sao output lại khác so với ban đầu ?? Sao thằng End lại chạy trước thằng task()
- Đó là bởi vì setTimeout là một phần của Web APIs thực chất khi bạn thực thi dòng lệnh setTimeout
- thì dòng code đó không phải là một phần của JS
- ĐIỀU ĐÓ THÌ GIẢI THÍCH ĐƯỢC GÌ???
- Trong JS thì khi bạn thực hiện một động tác liên quan đến Web APIs thì dòng code đó sẽ được truyền sang một bên khác (Web APIs) để thực thi code riêng và khi thực hiện xong thì truyền vào một thứ gọi là callback queue, đợi cho các dòng code nằm trong callstack thực hiện xong hết, sau đó mới đc nhảy vào callstack để thực hiện (lúc này thì timeout không còn nữa, vì nó đã được thực thi hết trong web apis).
- Và khi các dòng code trong callstack đó vẫn còn đang được thực thì các dòng lệnh liên quan tới web apis vẫn sẽ nằm trong callback queue
- Khi câu lệnh nằm trong Web APIs, cái nào xong trước thì sẽ nhảy vào callback queue trước, và đương nhiên, cũng sẽ được thực hiện trước các câu lệnh khác nằm trong Web APIs.
- Chi tiết các bạn có thể tham khảo thêm tại:
- [Javascript's Cycle](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

- Web APIs: setTimeout, fetch request, DOM Event

## Promise là chi? Promise là ... lời hứa

- Khái niệm promise được MDN giải thích một cách khá mù mờ và hơi… khó hiểu:

  - `The Promise object is used for asynchronous computations. A Promise represents an operation that hasn't completed yet, but is expected in the future.`

- Để dễ hiểu, mình gọi Promise là lời hứa. Tương tự như trong thực tế, có người hứa rồi làm, có người hứa rồi … thất hứa.

- Một lời hứa có 3 trạng thái sau:

  - pending: Hiện lời hứa chỉ là lời hứa suông, còn đang chờ người khác thực hiện
  - fulfilled: Lời hứa đã được thực hiện
  - reject: Bạn đã bị thất hứa, hay còn gọi là bị “sủi”

- Khi xưa, để dụ bạn cố gắng học hành, bố mẹ bảo **“Ráng đậu đại học bố mẹ sẽ mua cho con BMW đi học cho bằng bạn bằng bè”**. Lúc này, thứ bạn nhận được là **một lời hứa**, chứ **không phải xe BMW**.

```js
// Hàm này trả ra lời hứa chứ không phải chiếc BMW
function hứa_cho_có() {
  return Promise((thuc_hien_loi_hua, that_hua) => {
    // Sau 1 thời gian dài dài dàiiiiiii
    // Nếu vui bố mẹ sẽ thực hiện lời hứa
    if (vui) {
      thuc_hien_loi_hua("Xe BMW");
      // Lúc này trạng thái của lời hứa là fulfilled ^_^
    } else {
      that_hua("Xe dap");
      // Lúc này trạng thái của lời hứa là rejected
    }
  });
}

// Lời hứa bây giờ đang là pending
// Nếu được thực hiện, bạn có "Xe BMW"
// Nếu bị reject, bạn có "Xe đạp"
var promise = hứa_cho_có();
promise
  .then((xe_bmw) => {
    console.log("Được chiếc BMW vui quá");
  })
  .catch((xe_dap) => {
    console.log("Được chiếc xe đạp ….");
  });
```

- Khi lời hứa được thực hiện, promise sẽ gọi callback trong hàm then. Ngược lại, khi bị thất hứa, promise sẽ gọi callback trong hàm catch.

## Promise.all, Promise.race, Promise.allSettled

- Promise.all: Chạy vào then khi tất cả promise trả về fullfilled, và ngược lại chạy vào catch khi 1 trong các Promise trả về rejected

- VD (**LƯU Ý: ĐÂY CHỈ LÀ ĐOẠN CODE MÌNH VIẾT RA CHO DỄ HIỂU. NẾU ĐI LÀM HAY LÀM PROJECT, VUI LÒNG KHÔNG CODE TIẾNG VIỆT VÀ CODE CÓ DẤU NHƯ MÌNH**):

- Ở hai gia đình khác nhau nọ, có hai người con được chiều chuộng, lúc nào cũng vòi vĩnh ba mẹ tiền, cho đến một ngày họ quyết định làm một kèo to đó chính là xin tiền ba mẹ mua Audi và BMW, ta cùng xử lý trường hợp này bằng đoạn code như sau

```js
var xe_được_mua_của_người_con_gia_đình_1 = ["BMW", "Volvo", "Huyndai"];
// Gia đình thứ nhất chỉ đủ tiền để mua cho con BMW, Volvo và Huyndai, không đủ tiền để mua thêm Audi được

var xe_được_mua_của_người_con_gia_đình_2 = ["BMW", "Audi", "Huyndai"];
// Gia đình thứ hai đủ tiền mua cho con BMW, Audi và lại còn khuyến mãi thêm cả con Huyndai nữa

// Ta tạo một CHỨC NĂNG dành cho 2 người con đó chính là xin tiền bố mẹ mua Audi và BMW
function xinTienMuaAudiVaBMW(xe) {
  return new Promise(function (fullfilled, rejected) {
    // Nếu được mua Audi && được mua BMW
    if (xe.includes("Audi") && xe.includes("BMW")) {
      // fullfilled nếu mua được cả 2 xe
      fullfilled("Cả hai người con đã có BMW và Audi, đi tán gái thôi !!");
    } else {
      // rejected nếu không mua được cái nào hoặc chỉ mua được 1 trong 2 xe
      rejected("Một trong hai người con đã không có Audi và BMW");
    }
  });
}

let gia_đình_1 = xinTienMuaAudiVaBMW(xe_được_mua_của_người_gia_đình_1);
let gia_đình_2 = xinTienMuaAudiVaBMW(xeDuocMua2);
const lời_hứa_của_2_gia_đình = Promise.all([gia_dinh_1, gia_dinh_2])
  .then((success) => console.log(success))
  .catch((error) => console.log(error));

//Output: Một trong hai người con đã không có Audi và BMW
```

- Promise.race: Trả về cái chạy nhanh nhất và trả về fullfilled

- VD (**LƯU Ý: ĐÂY CHỈ LÀ ĐOẠN CODE MÌNH VIẾT RA CHO DỄ HIỂU. NẾU ĐI LÀM HAY LÀM PROJECT, VUI LÒNG KHÔNG CODE TIẾNG VIỆT VÀ CODE CÓ DẤU NHƯ MÌNH**):

- Ví dụ, bạn đang xem một cuộc đua xe giải F1, tất cả các xe đều có thể chạy hoặc không chạy về đích, nhưng sẽ luôn luôn có 1 xe về đích sớm nhất và đạt được giải nhất, tên của người lái xe đó sẽ được hiển thị lên bảng điểm số ở vị trí đầu tiên. Ta sẽ xử lý bằng code ra sao?

```js
// Tạo một chức năng để các xe đua với nhau, truyền vào 2 thứ là thời gian hoàn thành và kết quả
function đua_xe_F1(thời_gian_hoàn_thành, kết_quả) {
  return new Promise(function (fullfilled, rejected) {
    setTimeout(() => {
      // Nếu có kết quả thì báo cáo xe về đích thứ bao nhiêu ?
      if (kết_quả) {
        fullfilled(kết_quả);
      } else {
        // Nếu không có kết quả tức là xe đã không hoàn thành được đường đua hoặc có sự cố ngoài ý muốn xảy ra (va chạm, tai nạn, bỏ đua, ...)
        rejected("Không hoàn thành được vòng đua/Sự cố xảy ra");
      }
    }, thời_gian_hoàn_thành);
  });
}

const xe_đua_1 = đua_xe_F1(7000, "xe_đua_1 về đích thứ ba");
const xe_đua_2 = đua_xe_F1(2000, "xe_đua_2 về đích thứ nhất");
const xe_đua_3 = đua_xe_F1(3000, "xe_đua_3 về đích thứ nhì");
const kết_quả_cuối_cùng = Promise.race([xe_đua_1, xe_đua_2, xe_đua_3])
  .then((success) => console.log(success))
  .catch((error) => console.log(error));
// Output: xe_đua_2 về đích thứ nhất
// Vì có thời gian hoàn thành vòng đua sớm nhất là 2000ms, các xe còn lại cần nhiều thời gian hơn
```

- Promise.allSettled: Trả về một mảng chứa cả những promise được fullfilled và những promise bị rejected

## try-catch là gì ?

- Ví dụ, bạn đang là thực tập sinh và anh mentor giao cho bạn 1 task gì đó khá căng não, anh ấy bảo với bạn rằng là "em hãy **CỐ GẮNG (try)** hết sức có thể để làm task đó và **SAU KHI** em đã cố gắng hết sức làm task rồi anh sẽ **BẮT LỖI (CATCH)** cho em.

- try catch cũng giống như vậy, nếu đoạn code trong block try gặp lỗi thì lúc đó sẽ tới catch ra tay để tóm lỗi đó lại và hiển thị ra cho mình

```js
try {
  // Quăng lỗi ra
  throw new Error "Noi dung loi";
} catch (e) {
  // Đón nhận lỗi và in ra
  // Vị trí này chỉ chạy khi ở try có quăng lỗi hoặc ở try
  // sử dụng sai cú pháp ...
  console.log(e.message);
} finally {
  // Cuối cùng chạy cái này
  // Luôn luôn chạy sau cùng
  console.log("End of try catch");
}
```

# Sự báo đạo của async await trong JS

- JavaScript là ngôn ngữ single-thread, tức là chỉ có một thread duy nhất để thực thi các dòng lệnh. Nếu chạy theo cơ chế đồng bộ (synchronous) thì khi thực hiện tính toán phức tạp, gọi API/AJAX request tới server, gọi database (trong NodeJS), thread này sẽ dừng để chờ, làm toàn bộ trình duyệt bị… treo.

- Để tránh điều này, hầu hết code gọi API/AJAX request hoặc database trong JavaScript đều chạy theo cơ chế bất đồng bộ (asynchnous). Ban đầu, việc chạy code asynchnous trong JavaScript được hiện thực nhờ callback (như đoạn code bên dưới).

```js
// Truyền callback vào hàm ajax
var callback = function (image) {
  console.log(image);
};
ajax.get("gaixinh.info", callback);

// Có thể viết gọn như sau
ajax.get("gaixinh.info", function (image) {
  console.log(image);
});
```

- Tất nhiên, vì **callback** có một số nhược điểm như code dài dòng, **callback hell**,… nên người ta tạo ra 1 pattern mới gọi là **Promise!**

- **Promise** đã giải quyết khá tốt những vấn đề của callback. Code trở nên dễ đọc, tách biệt và dễ bắt lỗi hơn.

- ![Ảnh](https://toidicodedao.files.wordpress.com/2017/10/screen-shot-2017-10-01-at-5-27-32-pm.jpg?w=410&h=186)

- Tuy nhiên, dùng **promise** đôi khi ta vẫn thấy hơi khó chịu vì phải **truyền callback vào hàm then và catch**. Code cũng sẽ **hơi dư thừa và khó debug**, **vì toàn bộ các hàm then chỉ được tính là 1 câu lệnh nên không debug riêng từng dòng được**.

- May thay, trong ES7 một phép màu mang tên **async/await** đã ra đời. (Mình nghi 99% là phép màu này ăn cắp từ C# hay ho, vì C# đã có **async/await** từ thời ông địa cởi trường rồi cơ).

- ![Ảnh](https://toidicodedao.files.wordpress.com/2017/10/screen-shot-2017-10-01-at-5-32-42-pm.jpg?w=448&h=155)

- Vậy async/await có gì hay ho? Chúng giúp chúng ta viết code trông có vẻ đồng bộ (synchronous), nhưng thật ra lại chạy bất đồng bộ (asynchronous).

- Như trong hình phía trên, hàm `findRandomImgPromise` là **hàm bất đồng bộ**, **trả về một Promise**. Với **từ khoá await**, ta **có thể coi** hàm này là **đồng bộ**, **câu lệnh phía sau chỉ được chạy sau khi hàm này trả về kết quả.**

#### Vậy tại sao ta nên dùng async/await ?

- Code dễ đọc hơn rất rất nhiều, không cần phải then rồi catch gì cả, chỉ viết như code chạy tuần tự, sau đó dùng try/catch thông thường để bắt lỗi.

- Viết vòng lặp qua từng phần tử trở nên vô cùng đơn giản, chỉ việc await trong mỗi vòng lặp.

- Debug dễ hơn nhiều, vì mỗi lần dùng await được tính là một dòng code, do đó ta có thể đặt debugger để debug từng dòng như thường.

- Khi có lỗi, exception sẽ chỉ ra lỗi ở dòng số mấy chứ không chung chung là un-resolved promise.

- Với promise hoặc callback, việc kết hợp if/else hoặc retry với code asynchnous là một cực hình vì ta phải viết code lòng vòng, rắc rối. Với async/await, việc này vô cùng dễ dàng.

## API là gì ?

- API là viết tắt của Application Programming Interface – phương thức trung gian để kết nối các ứng dụng và thư viện khác nhau.

- Để hiểu rõ hơn API là gì, hãy tưởng tượng bạn đang ngồi trong một nhà hàng, trước mặt bạn là menu để gọi thức ăn. Nhà bếp là một phần của “hệ thống”, nơi sẽ chuẩn bị những món ăn mà bạn gọi. Tuy nhiên, làm thế nào để nhà bếp biết được bạn muốn ăn món nào? Và làm sao để họ phân phối thức ăn đến bàn của bạn? Đây là lúc cần đến sự xuất hiện của người phục vụ, đóng vai trò như API.

- Người phục vụ (hay API) sẽ nhận yêu cầu từ bạn và truyền đạt với nhà bếp (hệ thống) những thứ cần làm. Sau đó người phục vụ sẽ phản hồi ngược lại cho bạn, trong trường hợp này, họ sẽ mang thức ăn sau khi nhà bếp hoàn thành đến tận bàn cho bạn.

## Cách để gọi đồ ăn từ Menu (gọi API)

- Sau khi bạn đã hiểu rõ về promise và async await rồi, chắc chắn học về API bạn sẽ nắm rõ hơn những người chưa hiểu gì về nó.

**- B1: ta cần biết endpoint nghĩa là gì ?**

- Khi bạn lên bất kì trang web nào có api, nó cũng sẽ có một đoạn url mà ta cần sử dụng để gọi tới API. VD: `https://abc.com/foo/bar`.

- Và lúc này trong `https://abc.com/foo/bar`, thì `/foo/bar` chính là endpoint.

**- B2: Sử dụng hàm fetch có sẵn trong JS để lấy ra thông tin API**

- VD:

```js
const endpoint = `https://api.github.com/users`;
const promise = fetch(endpoint);
console.log(promise);
// Output:
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: Response
```

- Lúc này bạn sẽ được trả về Promise, và PromiseState là fullfilled -> điều này chứng tỏ rằng là bạn đã gọi đồ ăn (gọi API) thành công, giờ tới lượt người phục vụ sẽ mang thức ăn đến chỗ bạn ngồi (trả về thông tin của API).**Vậy nên bây giờ ta phải "viết code" cho người phục vụ để họ mang món ăn tới chỗ bạn**

```js
const endpoint = `https://api.github.com/users`;
const usernameElm = document.querySelector(".username");
// fetch data

async function displayUser(username) {
  try {
    // Trước khi người bồi bàn mang món ăn ra cho bạn, thì chúng ta sẽ trong trạng thái ngồi đợi (trạng thái Loading...)
    console.log("Loading...");
    // Đây là quá trình mà các người làm bếp họ đang chế biến món ăn của ta (hay nói cách khác là mình đang sử dụng fetch để lấy ra thông tin từ api và mình phải đợi cho nó lấy xong, mỗi api sẽ có một khoảng thời gian chờ khác nhau tùy vào độ nhanh của chúng)
    const promise = await fetch(endpoint);
    // Đây là lúc mà món ăn của bạn đã được nấu ăn xong, người bồi bàn lúc này sẽ mang món ăn tới chỗ của bạn để bạn thưởng thức
    const userData = await promise.json();
  } catch (error) {
    // Nếu có sự cố bất cập nào (Bếp không còn đủ nguyên liệu/ món ăn đó đã hết hàng) thì ta in ra console No data found
    console.log("No data found");
  }
```

## Những điều chỉnh riêng của từng API (luật riêng của từng nhà)

- Khi làm việc với APIs, sẽ có một số thứ bạn phải tìm hiểu thêm như là về CORS và sâu hơn nữa là Headers.

- Cũng giống như ngoài đời vậy, khi bạn sang nhà người khác, mỗi nhà sẽ có một luật/chuẩn mực riêng, nhà thì cứ đi cả dép vào trong nhà cũng được, không sao hết, nhà thì phải để dép ở ngoài rồi mới được đi vào,... và còn rất nhiều thứ luật lệ khác nữa.

- Đối với APIs cũng vậy, ta cũng sẽ có điều chỉnh riêng cho các loại API khác nhau. Ví dụ như API `icanhazdadjoke`, nếu ta không điều chỉnh gì cho nó, mà viết 1 đoạn code fetch API đơn giản giống như trên:

```js
const $ = document.querySelector.bind(document);
const apiEndpoint = "https://icanhazdadjoke.com/";

async function getJokes() {
  try {
    // const res = await fetch(apiEndpoint, {
    //   headers: {
    //     Accept: "application/json",
    //   },
    // });
    const res = await fetch(apiEndpoint);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getJokes();
```

- Thì ta sẽ nhận được lỗi như sau: `SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON`. **Điều gì đã gây nên tình trạng này you may ask?**. Đó là bởi vì API này không trả về json mà là trả về một file HTML. Đây là lúc ta sẽ phải đụng vào phần `Network` trong F12.

- ![Ảnh](https://discloud-storage.herokuapp.com/file/0d744771994fcd2234075e541dcc8554/api.png)

- Đó như mình nói, API này đang trả về dưới dạng HTML, nhưng ta lại đang muốn nó trả về dưới dạng JSON để xử lí. Vậy nên ta phải code lại như sau:

```js
const $ = document.querySelector.bind(document);
const apiEndpoint = "https://icanhazdadjoke.com/";

async function getJokes() {
  try {
    // Nhét vào headers một propery Accept: "application/json" để convert sang JSON
    const res = await fetch(apiEndpoint, {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getJokes();
```

## CORS là gì, tại sao lại sinh ra CORS ?

- CORS là Cross origin resource sharing

- <br>
  Ideas: toidicodedao.com
