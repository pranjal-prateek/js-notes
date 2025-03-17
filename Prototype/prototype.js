// In JavaScript, every object can have a prototype, which is like a mold that contains shared properties and methods. When you create an object, it can inherit things from its prototype instead of defining them separately every time.

// lets consider a class

class Person {
  constructor(name) {
    this.name = name;
  }
}

//lets create a prototype we can use with multiple classes
Person.prototype.sayHello = function () {
  console.log(`hello my name is ${this.name}`);
};
function jhonHello() {
  console.log(`hello my name is ${this.name}`);
}
const person = new Person("Pranjal");

person.sayHello();

// we can also use
const John = { name: "Jhon" };

jhonHello.call(John);
