// Single thread
function task(msg) {
  let number = 100000;
  while (number > 0) {
    number--;
  }
  console.log(msg);
}

// console.log("Start");
// task("Loading");
// console.log("End");
/*
 * Có thể thấy rõ ràng thằng function task phải mất nhiều thời gian mới chạy hết được
 * trong lúc đó thì thằng console.log("End") nó phải đợi thằng task chạy xong thì mới tới
 * lượt nó chạy -> Blocking Script -> thể hiện tính chất đồng bộ trong JS
 */
// Để ngăn chặn tình trạng như trên xảy ra ta sẽ phải động chạm đến kiến thức về bất đồng bộ trong Javascript

// Callbacks
console.log("Start");
setTimeout(() => {
  task("Loading");
}, 2000);
// Rời khỏi callstack và chạy qua Web APIs cho các dòng lệnh khác chạy -> Callback queue -> Khi callstack empty -> Chạy xong và rời nốt khỏi callstack
console.log("End");

// Web APIs: setTimeout, fetch request, DOM Event

// Tại sao output lại khác so với ban đầu ?? Sao thằng End lại chạy trước thằng task()
// Đó là bởi vì setTimeout là một phần của Web APIs thực chất khi bạn thực thi dòng lệnh setTimeout
// thì dòng code đó không phải là một phần của JS
// ĐIỀU ĐÓ THÌ GIẢI THÍCH ĐƯỢC GÌ???
// Trong JS thì khi bạn thực hiện một động tác liên quan đến Web APIs thì dòng code đó sẽ được truyền sang
// Một bên khác để thực thi code riêng và khi thực hiện xong thì truyền vào một thứ gọi là callback queue
// Còn các dòng code bên dưới sẽ tiếp tục được thực thi trong call stack (cụ thể là main)
// Và khi các dòng code trong callstack đó vẫn còn đang được thực thì các dòng lệnh liên quan tới web apis vẫn sẽ nằm trong callback queue
// Chi tiết các bạn có thể tham khảo thêm tại:
// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
