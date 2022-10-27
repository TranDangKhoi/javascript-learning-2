setTimeout(() => {
  console.log("First run");
  setTimeout(() => {
    console.log("Second run");
    setTimeout(() => {
      console.log("Third run");
      setTimeout(() => {
        console.log("Fourth run");
        setTimeout(() => {
          console.log("Fifth run");
        }, 1000);
      }, 1000);
    }, 2000);
  }, 3000);
}, 3000);

// Code như trên được gọi là callback hell
// Nhìn nó chán không khác gì if else của dũng lại lập trình
// Rất khó bảo trì và đau mắt mà hiệu quả lại không cao
// Vậy để tránh callback hell ta sẽ sử dụng 1 khái niệm gọi là promise
