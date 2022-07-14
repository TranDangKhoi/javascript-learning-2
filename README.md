# Evondev-Javascript-Course2

Khóa học javascript của evondev về DOM

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
