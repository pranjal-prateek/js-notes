/**
 * Prototype in JavaScript
 * ------------------------
 * Prototypes allow objects to share properties and methods, reducing memory usage.
 */

// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Creating instances of Person
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

// Using the prototype method
person1.greet(); // ✅ Output: Hello, my name is Alice and I am 25 years old.
person2.greet(); // ✅ Output: Hello, my name is Bob and I am 30 years old.

// Checking prototype chain
console.log(person1.__proto__ === Person.prototype); // ✅ Output: true

/**
 * Key Takeaways:
 * --------------
 * ✅ JavaScript uses prototypes for inheritance.
 * ✅ Methods defined on a prototype are shared across all instances.
 * ✅ Prototypes help optimize memory by reducing duplicate methods.
 */

//prototype : so every object has a hidden link to its parents so this is called prototype
//prototype chaining
// Base object
const grandparent = {
  lastName: "Smith",
};

// Parent object
const parent = Object.create(grandparent);
parent.firstName = "John";

// Child object
const child = Object.create(parent);
child.age = 10;

console.log(child.age); // ✅ Output: 10 (Found in child)
console.log(child.firstName); // ✅ Output: John (Found in parent)
console.log(child.lastName); // ✅ Output: Smith (Found in grandparent)
console.log(child.hobby); // ❌ Output: undefined (Not found in any prototype)
