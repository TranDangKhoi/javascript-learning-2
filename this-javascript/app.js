// var person = {
//   firstName: "Khoi",
//   lastName: "Tran",
//   showName: function () {
//     console.log(this.firstName + " " + this.lastName);
//   },
// };

// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   person.showName();
// });

// var person = {
//   firstName: "Hoang",
//   lastName: "Pham",
//   friends: ["Minh", "Sang", "Khoi", "Hoang"],
//   showFriend: function () {
//     for (let i = 0; i < this.friends.length; i++)
//       console.log(this.firstName + " have a friend named " + this.friends[i]);
//   },
//   showFriendThis: function () {
//     this.friends.forEach(function (fr) {
//       console.log(this.firstName + " have a friend named " + fr);
//     });
//   },
// };

// person.showFriend(); //Hàm chạy đúng

// person.showFriendThis(); // Hàm chạy sai

// // Cách sửa: Lưu giá trị this.firstName hoặc lưu hẳn this vào 1 biến sau đó sử dụng biến đó để hiển thị

// var person = {
//   firstName: "Hoang",
//   lastName: "Pham",
//   friends: ["Minh", "Sang", "Khoi", "Hoang"],
//   showFriendFixed: function () {
//     var personObj = this;
//     this.friends.forEach(function (fr) {
//       console.log(personObj.firstName + " have a friend named " + fr);
//     });
//   },
// };

// person.showFriendFixed();

var person = {
  firstName: "Hoang",
  lastName: "Pham",
  showName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
  showFullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

//Ở đây this sẽ là object person, chạy đúng
person.showName(); //Hoang Pham.

var showNameFunc = person.showName; //Gán function vào biến showNameFunc
var showFullNameFunc = person.showFullName.bind(person);
showNameFunc(); //Chạy sai, ở đây this sẽ là object window
showFullNameFunc();
