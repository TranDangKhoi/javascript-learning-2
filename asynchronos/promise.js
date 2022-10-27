// Ví dụ các bạn muốn xin tiền ba mẹ mua điện thoại
// Ba mẹ hứa sẽ mua điện thoại cho các bạn
// Lúc này trạng thái của các bạn sẽ là
// status: pending (đang chờ)
// Ba mẹ mua điện thoại cho các bạn
// status: success (thành công)
// Ba mẹ không mua điện thoại cho các bạn
// status: reject (bị từ chối)
// new Promise(function(resolve, reject)) -> resolve tương ứng vs success
let buyIphone = true;
// let willBuyIphone = new Promise((resolve, reject) => {
//   if (buyIphone) {
//     resolve("Yay! I have a new iphone");
//     console.log("OK");
//   } else {
//     reject("Oh no! I don't have any new phones");
//     console.log("Not OK");
//   }
// })
//   .then((success) => console.log(success))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("Im still happy"));

// // // Ủa thế ở trên mới có 2 trường hợp là success và reject mà
// // // Thế còn trường hợp pending đâu ??
// // // Muốn có pending thì phải thêm setTimeOut

// console.log(willBuyIphone);

// .then
// Khi gọi 1 promise thì gọi ra then để truyền vào
// 2 cái arguments(onFullfilled, onRejected)
// function makePromise(buyIphone) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       if (buyIphone) {
//         resolve("Oh yeah, I have a new Iphone");
//         console.log("OK");
//       } else {
//         reject("Oh no, I don't have an new Iphone");
//         console.log("Not OK");
//       }
//     }, 3000);
//   });
// }
// // Khi 1 lời hứa được thực hiện
// let haveIphone = makePromise(true);
// haveIphone
//   .then(
//     (success) => console.log(success) // success - onFullfilled
//     // (reason) => console.log(reason) // fail - onRejected
//   )
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("I'm still happy");
//   });

// catch, finally
// catch: dùng để bắt lỗi
// finally: cho dù promise trả về true hay false thì vẫn sẽ chạy vào finally
// Quay lại bài toán setTimeout lồng nhau
// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("Run the first time");
//   }, 3000);
// })
//   .then((data) => {
//     console.log(data);
//     return new Promise(function (resolve, reject) {
//       setTimeout(() => {
//         resolve("Run the second time");
//       }, 2000);
//     });
//   })
//   .then((data) => {
//     console.log(data);
//     return new Promise(function (resolve, reject) {
//       setTimeout(() => {
//         resolve("Run the third time");
//       }, 2000);
//     });
//   })
//   .then((data) => {
//     console.log(data);
//   });

// Dùng promise.all

// function makeTimer(timer = 1000, str) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       resolve(str);
//     }, timer);
//   });
// }

// const timer1 = makeTimer(1000, "First time");
// const timer2 = makeTimer(2000, "Second time");
// const timer3 = makeTimer(3000, "Third time");

// // // Lưu ý: tất cả phải trả về resolve thì mới thực hiện được dòng lệnh then
// // // Trả về rejected khi có 1 cái promise nào đó bị reject
// const timerTotal = Promise.all([timer1, timer2, timer3]).then((data) => {
//   console.log(data);
//   console.log("Hey bro");
// });

// // VD: Mẹ bắt bạn làm việc nhà và phải làm xong 3 việc mới được nghỉ
// // Thì promise.all cũng như vậy, phải thực hiện xong 3 cái promies nằm bên trong trong mảng
// // thì mới thực hiện console.log(data)
// console.log(timerTotal);

// // Vậy nếu bây giờ mình muốn làm xong một việc thôi đã được nghỉ ngơi rồi
// // thì phải làm sao ??
// // Khi đó ta sẽ sử dụng Promise.race
// // -> trả về cái chạy nhanh nhất và thành công
// const timerTotal2 = Promise.race([timer1, timer2, timer3]).then((data) => {
//   console.log(data);
// });

// Promise.allSettled
// -> trả về mảng chứa cả resolve lẫn reject
function isFrontEndDev(language) {
  return new Promise(function (resolve, reject) {
    if (!language.includes("html")) {
      reject("You are not front-end developer");
    }
    setTimeout(() => {
      resolve("You are a front-end developer");
    }, 1000);
  });
}

const dev1 = isFrontEndDev(["html", "css"]);
const dev2 = isFrontEndDev(["java", "c#"]);
const devAll = Promise.allSettled([dev1, dev2]).then((data) => {
  console.log(data);
  console.log(data);
});

// try-catch

// function isFrontEndDev2(language) {
//   if (!language.includes("html")) {
//     throw new Error("You are not a front-end developer");
//   }
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       resolve("You are a front-end developer");
//     }, 2000);
//   });
// }
// try {
//   isFrontEndDev2(["html", "css"])
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// } catch (error) {
//   console.log("Oops! something went wrong");
// }

// async await: vẫn là promise -> chỉ để code clean hơn

function wait(timer = 0) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, timer);
  });
}

// function expression
async function run() {
  console.log("Starting");
  await wait(2000);
  console.log("Running");
  await wait(2000);
  console.log("Ending");
}

// run();

// arrow function
// const fn = async () => {};

// const student = {
//   fullName: async function () {},
//   async calcAge() {},
//   yearly: async () => {},
// };
