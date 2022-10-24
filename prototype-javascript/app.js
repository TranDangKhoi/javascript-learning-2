// String, Number, Boolean
let str = "abc";
String.prototype.duplicate = function () {
  return this + this;
};

console.log(str.duplicate());

class Girl {
  constructor(name) {
    this.name = name;
    this.cook = function () {
      console.log(`${this.name} is cooking`);
    };
    this.setName = function (name) {
      this.name = name;
    };
  }
}
Girl.prototype.sing = function () {
  console.log(`${this.name} is singing`);
};
Object.prototype.yawn = function () {
  console.log(`${this.name} is yawning`);
};

let Girl1 = new Girl("Jesicca");
Girl1.setName("Candance");

Girl1.cook();
Girl1.sing();
Girl1.yawn();
