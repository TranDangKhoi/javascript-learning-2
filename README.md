# Evondev-Javascript-Course2
Khóa học javascript của evondev về DOM

## Các method cơ bản dùng cho class
- Có 4 chức năng cơ bản để dùng cho classList:
+ add
+ remove
+ contains
+ toggle
-> classList là một DOMTokenList chứa danh sách các class của selector mình query tới (có index giống array)
## Ví dụ về các chức năng
- Nếu ta muốn thêm một class vào selector, ta sẽ sử dụng:
-> selector.classList.add("tên class")

- Ngược lại nếu ta muốn xóa một class khỏi selector, ta sẽ sử dụng:
-> selector.classList.remove("tên class")

- Nếu ta muốn kiểm tra xem cái selector mình query tới có class nào hay không, ta sẽ sử dụng:
-> selector.classList.contains("tên class")

- Nếu ta muốn tạo ra một công tắc bật tắt (nếu có rồi thì xóa đi, chưa có thì thêm vào) -> giống như bóng đèn vậy, nếu đèn đang tắt ta gạt công tắc thì đèn sẽ bật, cho tới khi bao giờ muốn tắt ta lại gạt lại là nó sẽ tắt
-> selector.classList.toggle("tên class")


- Nếu ta muốn lấy ra tên các class của một selector thì ta sẽ sử dụng selector.className -> nó sẽ trả ra chuỗi các class của selector