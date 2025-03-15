/**
 * Getters and Setters in JavaScript (OOPs)
 * ----------------------------------------
 * Getters (`get`) and Setters (`set`) are special methods used to retrieve and modify private properties in objects.
 *
 * ✅ `get` - Used to access a property value.
 * ✅ `set` - Used to modify a property value with validation or additional logic.
 */

class Person {
  constructor(name, age) {
    this._name = name; // Conventionally, underscore `_` indicates a private property
    this._age = age;
  }

  // Getter method for name
  get name() {
    return this._name;
  }

  // Setter method for name
  set name(newName) {
    if (newName.length < 3) {
      console.log("Name must be at least 3 characters long.");
    } else {
      this._name = newName;
    }
  }

  // Getter method for age
  get age() {
    return this._age;
  }

  // Setter method for age
  set age(newAge) {
    if (newAge < 0) {
      console.log("Age cannot be negative.");
    } else {
      this._age = newAge;
    }
  }
}

const person1 = new Person("Alice", 25);
console.log(person1.name); // ✅ Output: Alice

person1.name = "Jo"; // ❌ Output: Name must be at least 3 characters long.
person1.name = "John"; // ✅ Updates the name

console.log(person1.age); // ✅ Output: 25
person1.age = -5; // ❌ Output: Age cannot be negative.

/**
 *  Key Takeaways:
 *  --------------
 *  ✅ Getters allow controlled access to properties without directly exposing them.
 *  ✅ Setters enable validation and controlled updates to properties.
 *  ✅ Helps maintain encapsulation in Object-Oriented Programming (OOP).
 */
