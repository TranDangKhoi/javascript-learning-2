// Call and Apply
const person = {
  firstName: "Khoi",
  lastName: "Tran",
};

function sayHello(str1, str2) {
  console.log(`${str1} ${str2} ${this.firstName} ${this.lastName}`);
}

sayHello.call(person, "Hello", "World");
// Output: Hello World Tran Khoi
sayHello.apply(person, ["Hello", "World"]);
// Output: Hello World Tran Khoi
