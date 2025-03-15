/**
 * 5.1 Garbage Collection in JavaScript OOP
 * ----------------------------------------
 * JavaScript has automatic memory management via garbage collection.
 * Objects are removed from memory when they are no longer referenced.
 */

let obj = { name: "Alice" };
obj = null; // The object is now eligible for garbage collection

/**
 * Circular References & Memory Leaks
 * Objects that reference each other can prevent garbage collection.
 */
function createCircularReference() {
  let obj1 = {};
  let obj2 = {};
  obj1.ref = obj2;
  obj2.ref = obj1;
}
createCircularReference(); // These objects won't be garbage collected easily

/**
 * 5.2 Performance Optimization in OOP
 * -------------------------------------
 * Avoiding Memory Leaks
 */

// 1. Nullify References When Not Needed
let user = { name: "Bob" };
user = null; // Helps free up memory

// 2. Use WeakMap for Caching (Garbage Collects Unused Keys)
const cache = new WeakMap();
function storeUser(userObj) {
  cache.set(userObj, "some data");
}

// 3. Avoid Unnecessary Global Variables
function createData() {
  const data = new Array(1000000).fill("data");
}
createData(); // The array exists only inside the function

/**
 * Efficient Method Sharing Using Prototypes
 * ------------------------------------------
 * Instead of defining methods in every instance, use prototypes for efficiency.
 */

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person("Alice");
const person2 = new Person("Bob");

person1.sayHello(); // ✅ "Hello, my name is Alice"
person2.sayHello(); // ✅ "Hello, my name is Bob"

/**
 * Summary
 * -------
 * ✅ JavaScript automatically manages memory using garbage collection.
 * ✅ Avoid memory leaks by nullifying references and using WeakMaps.
 * ✅ Use prototypes to optimize method sharing and memory usage.
 */
