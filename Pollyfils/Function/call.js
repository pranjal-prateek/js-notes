// so it binds the fucntion with the this object and call the fuction with parameter in string form
class Person {
  constructor(name) {
    this.name = name;
  }
}

function sayHello(baby) {
  console.log(`Hello, my name is ${this.name} ${baby}`);
}

const person = new Person("Monkey");
sayHello.call(person);

// call pollyfill

// call(obj,object in string form multiple can be there depending on the parameter of the fucntion)

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this != "function") {
    throw new Error("First argument must be a function");
  }

  context.fn = this;
  context.fn(...args);
};

sayHello.myCall(person, "heyy");
