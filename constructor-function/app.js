// Constructor
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.getName = function () {
      return `This student name is ${this.name}`;
    };
  }
}

const student1 = new Student("Viet", 19);
console.log(student1.getName());
