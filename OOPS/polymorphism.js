/**
 * Polymorphism in JavaScript
 * ---------------------------
 * Polymorphism is the ability of a function, method, or object to take multiple forms.
 * In JavaScript, polymorphism is mainly achieved through **method overriding**.
 *
 * Note: JavaScript does not support method overloading in the traditional sense like some other languages.
 */

/**
 * 1️⃣ Method Overriding (Runtime Polymorphism)
 * -------------------------------------------
 * Method overriding occurs when a child class provides a specific implementation of a method that is already defined in its parent class.
 */
class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat meows");
  }
}

const myDog = new Dog();
const myCat = new Cat();
myDog.speak(); // ✅ Output: Dog barks
myCat.speak(); // ✅ Output: Cat meows

/**
 * 2️⃣ Method Overloading (Not Supported Natively in JavaScript)
 * -------------------------------------------------------------
 * JavaScript does not support method overloading like Java or C++, where multiple functions with the same name but different parameters can exist.
 * However, we can achieve similar behavior using default parameters or checking arguments dynamically.
 */
function greet(name, age) {
  if (age === undefined) {
    console.log(`Hello, ${name}!`);
  } else {
    console.log(`Hello, ${name}! You are ${age} years old.`);
  }
}

greet("Alice"); // ✅ Output: Hello, Alice!
greet("Bob", 25); // ✅ Output: Hello, Bob! You are 25 years old.

/**
 * 3️⃣ Key Takeaways on Polymorphism in JavaScript
 * ----------------------------------------------
 * ✅ Method Overriding: Child classes can redefine parent methods to change their behavior.
 * ✅ Method Overloading: Not natively supported, but can be mimicked using argument checks.
 * ✅ Polymorphism promotes code reusability and flexibility in Object-Oriented Programming.
 */
