/**
 * ==============================
 * Abstraction in JavaScript (OOP Concept)
 * ==============================
 *
 * ✅ Abstraction:
 * - Abstraction is used to hide implementation details and only expose relevant functionalities to the user.
 * - It simplifies the interaction by providing only necessary information while hiding the complex internal workings.
 *
 * ✅ Example:
 * - In a car, a user only interacts with the "start()" function.
 * - Internal functions like "engineCheck()" are hidden from the user.
 *
 * ✅ Key Benefits:
 * - Reduces complexity by hiding unnecessary details.
 * - Enhances security by preventing direct access to sensitive logic.
 * - Improves maintainability by allowing changes to internal logic without affecting external code.
 */

class MyCar {
  start() {
    this.#engineCheck(); // Private method can be accessed only within the class
    console.log("Car started");
  }

  #engineCheck() {
    console.log("Engine check performed");
  }
}

// ✅ Example Usage
const myCar = new MyCar();
myCar.start(); // Output: Engine check performed, Car started
