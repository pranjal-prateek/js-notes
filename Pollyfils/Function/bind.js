class Person {
  constructor(name) {
    this.name = name;
  }
}

function sayHello(baby) {
  console.log(`Hello my name is ${this.name} ${baby}`);
}

const person = new Person("Alice");

const helloFn = sayHello.bind(person, "baby");
helloFn();

// lets make the pollyfill out of this

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this != "function") {
    throw new Error("First argument must be a function");
  }

  context.fn = this;
  return function () {
    return context.fn(...args);
  };
};

const newMonday = new Person("newMonday");

const newMondayfunciton = sayHello.bind(newMonday, "baby");
newMondayfunciton();
