/**
 * Understanding `this` in JavaScript OOP
 * --------------------------------------
 * `this` is a special keyword in JavaScript that refers to the context in which a function is executed.
 * The value of `this` depends on how and where the function is called.
 *
 * 1️⃣ `this` inside classes:
 *    - When used inside a class method, `this` refers to the instance of the class.
 * 2️⃣ Arrow functions vs Normal functions:
 *    - Arrow functions do not have their own `this`; they inherit it from the surrounding scope.
 *    - Normal functions have their own `this` based on how they are called.
 * 3️⃣ Using `.bind()`, `.call()`, and `.apply()`:
 *    - `.bind()` creates a new function with `this` set explicitly.
 *    - `.call()` and `.apply()` invoke the function immediately, with `this` set explicitly.
 */

// 🟢 `this` inside a class
class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
const p1 = new Person("Alice");
p1.sayHello(); // ✅ Output: Hello, my name is Alice

/**
 * 🔹 Explanation:
 * - `this.name` inside the class refers to the instance property `name`.
 * - When `sayHello()` is called on an instance, it uses `this.name`.
 */

// 🟢 Arrow function vs Normal function
class Car {
  constructor(model) {
    this.model = model;
  }
  showModel = () => {
    console.log(this.model);
  };
}
const car = new Car("Tesla");
car.showModel(); // ✅ Output: Tesla

/**
 * 🔹 Explanation:
 * - `showModel` is an arrow function, so it inherits `this` from the class instance.
 * - Unlike normal functions, arrow functions do not create their own `this`.
 */

// 🟢 Fixing `this` with `.bind()`
class Animal {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(`My name is ${this.name}`);
  }
}
const animal = new Animal("Leo");
const sayAnimalName = animal.sayName.bind(animal);
sayAnimalName(); // ✅ Output: My name is Leo

/**
 * 🔹 Explanation:
 * - When `sayName` is passed as a standalone function, `this` is lost.
 * - `.bind(animal)` explicitly sets `this` to the `animal` instance.
 */

// 🟢 Using `.call()`
function greet() {
  console.log(`Hello, my name is ${this.name}`);
}
const user = { name: "Alice" };
greet.call(user); // ✅ Output: Hello, my name is Alice

/**
 * 🔹 Explanation:
 * - `.call()` immediately invokes `greet`, setting `this` to `user`.
 */

// 🟢 Using `.apply()`
function introduce(language, country) {
  console.log(`Hello, I'm ${this.name} and I speak ${language} in ${country}.`);
}
const user2 = { name: "Bob" };
introduce.apply(user2, ["English", "USA"]); // ✅ Output: Hello, I'm Bob and I speak English in USA.

/**
 * 🔹 Explanation:
 * - `.apply()` works like `.call()`, but arguments are passed as an array.
 */

/**
 * ✅ Key Takeaways:
 * -----------------
 * - `this` behaves differently in arrow vs normal functions.
 * - In classes, `this` refers to the instance.
 * - `.bind()`, `.call()`, and `.apply()` allow explicit control over `this`.
 */
