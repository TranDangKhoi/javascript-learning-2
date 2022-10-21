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

# getBoundingClientRect

- getBoundingClientRect là gì ? Nó là một function được tích hợp sẵn của javascript dùng để lấy ra tọa độ của phần tử tính theo page và viewport

- getBoundingClientRect() sẽ return ra 1 DOMRect (1 object) bao gồm top, left, width, height, x và y

- Ví dụ, nếu phần tử của bạn được **code CSS là left:50%** và **màn hình của bạn có độ phân giải là 1920x1080** thì left sẽ ra = 1920 / 2 = 960

- Đơn giản vậy thui, các phần tử khác thì ý nghĩa cũng giống như tên của nó thôi, top là tính từ trên cùng tới phần tử, width và height là chiều rộng - chiều cao của phần tử, ...

- getBoundingClientRect thường được dùng để code ra tooltip, hover effect, ...

#
