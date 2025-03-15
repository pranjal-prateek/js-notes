/**
 * Static Properties and Methods in JavaScript
 * --------------------------------------------
 * The `static` keyword is used to define properties and methods that belong to the class itself,
 * rather than instances of the class.
 */

class MathOperations {
  static PI = 3.14159; // Static property

  static add(a, b) {
    return a + b;
  }
}

console.log(MathOperations.PI); // ✅ Output: 3.14159
console.log(MathOperations.add(5, 10)); // ✅ Output: 15

// Trying to access static properties/methods from an instance will result in an error
const math = new MathOperations();
console.log(math.PI); // ❌ Undefined
console.log(math.add(5, 10)); // ❌ TypeError: math.add is not a function

/**
 * When to Use Static Methods
 * ---------------------------
 * ✅ When the method does not depend on instance properties.
 * ✅ When the method is a utility function (e.g., Math operations, Helper functions).
 * ✅ When properties should be shared across all instances.
 */
