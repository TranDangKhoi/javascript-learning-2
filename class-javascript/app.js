class Person {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    return (this._name = name);
  }
  // getName() {
  //   console.log(this.name);
  // }
  // setName(name) {
  //   this.name = name;
  // }
}

const person1 = new Person("John");
console.log(person1.name);
// Class expression
