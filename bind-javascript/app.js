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
