/**
 * 3️⃣ JavaScript-Specific OOP Features
 * ------------------------------------
 * This file explains key object-oriented programming (OOP) features in JavaScript, including factory functions vs. classes,
 * object composition, and ES6+ features that improve OOP practices.
 */

/**
 * ✅ 3.1 Factory Functions vs Classes
 * ------------------------------------
 * Factory functions are functions that return objects without using the `class` keyword.
 * Classes, introduced in ES6, provide a more structured way to create objects.
 */

// Factory Function Example
function createUser(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Hello, my name is ${this.name}.`);
    },
  };
}

const user1 = createUser("Alice", 25);
user1.greet(); // Output: Hello, my name is Alice.

// Class Example
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const user2 = new User("Bob", 30);
user2.greet(); // Output: Hello, my name is Bob.

/**
 * When to Use Factory Functions vs. Classes
 * -----------------------------------------
 * ✅ Use factory functions when you need:
 *    - Simple object creation with no complex behavior.
 *    - Flexibility to modify object properties easily.
 *    - Private properties using closures.
 * ✅ Use classes when you need:
 *    - Blueprint-based object creation (inheritance, prototypes).
 *    - Better performance with methods shared through the prototype chain.
 */

/**
 * ✅ 3.2 Object Composition (Alternative to Inheritance)
 * ------------------------------------------------------
 * Instead of deep inheritance chains, favor composition by creating small reusable objects (mixins) and combining them.
 */

const canWalk = {
  walk() {
    console.log("Walking...");
  },
};

const canEat = {
  eat() {
    console.log("Eating...");
  },
};

const canSleep = {
  sleep() {
    console.log("Sleeping...");
  },
};

// Composing a new object
function createPerson(name) {
  let person = { name };
  return Object.assign(person, canWalk, canEat, canSleep);
}

const person1 = createPerson("Charlie");
person1.walk(); // Output: Walking...
person1.eat(); // Output: Eating...
person1.sleep(); // Output: Sleeping...

/**
 * ✅ 3.3 ES6+ Features for OOP
 * ----------------------------
 * JavaScript ES6 introduced features that make OOP easier and more powerful.
 */

// Default Parameters
class Car {
  constructor(make = "Toyota", model = "Corolla") {
    this.make = make;
    this.model = model;
  }
  details() {
    console.log(`Car: ${this.make} ${this.model}`);
  }
}
const car1 = new Car();
const car2 = new Car("Honda", "Civic");
car1.details(); // Output: Car: Toyota Corolla
car2.details(); // Output: Car: Honda Civic

// Rest and Spread Operators
function showFeatures(mainFeature, ...otherFeatures) {
  console.log(`Main Feature: ${mainFeature}`);
  console.log(`Other Features: ${otherFeatures.join(", ")}`);
}
showFeatures("Sunroof", "Leather Seats", "Bluetooth", "Backup Camera");

// Destructuring
const userInfo = { name: "David", age: 28, location: "NY" };
const { name, age } = userInfo;
console.log(`${name} is ${age} years old.`); // Output: David is 28 years old.

/**
 * Summary:
 * --------
 * ✅ Factory functions vs. classes: Use factory functions for simpler objects, classes for structured blueprints.
 * ✅ Object Composition: A better alternative to deep inheritance chains by using mixins.
 * ✅ ES6+ Features: Default parameters, rest/spread operators, and destructuring improve OOP practices.
 */
