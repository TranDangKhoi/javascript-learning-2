const student = {
  firstName: "Tran",
  lastName: "Khoi",
  fullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

const button = document.querySelector("button");
button.addEventListener("click", student.fullName.bind(student));

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// $("button").addEventListener("click", function () {
//   console.log("Hello");
// });

$$(".item").forEach((item) => {
  item.addEventListener("click", function () {
    console.log("Hello item");
  });
});

function log(level, time, message) {
  console.log(level + " – " + time + ": " + message);
}

// Không có this nên set this là null
// Set mặc định 2 tham số level và time
var logErrToday = log.bind(null, "Error", "Today");

// Hàm này tương ứng với log('Error', 'Today', 'Server die.')
logErrToday("Server die.");
