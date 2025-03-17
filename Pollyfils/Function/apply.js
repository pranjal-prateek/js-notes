// so it binds the fucntion with the this object and call the fuction with parameter in array form

class Person {
  constructor(name) {
    this.name = name;
  }
}

function sayHello(baby) {
  console.log(`Hello, my name is ${this.name} ${baby}`);
}

const person = new Person("Monkey");
sayHello.apply(person, ["baby"]);

//pollyfill for apply

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this != "function") {
    throw new Error("First argument must be a function");
  }
  if (Array.isArray(args)) {
    throw new Error("Arguments must be array");
  }
  context.fn = this;
  context.fn(args);
};
const monkey = new Person("Monkey man");
sayHello.apply(monkey, ["baby"]);
