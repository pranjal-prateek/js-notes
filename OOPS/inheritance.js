/**
 * Inheritance in JavaScript
 * -------------------------
 * Inheritance is the process by which one class (child) acquires the properties and methods of another class (parent).
 * This enables code reuse and supports object-oriented programming principles.
 */

/**
 * 1️⃣ Defining a Parent Class
 * ---------------------------
 * The parent class contains properties and methods that can be inherited by child classes.
 */
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayInfo() {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

/**
 * 2️⃣ Creating a Child Class (Extending Parent Class)
 * --------------------------------------------------
 * The `extends` keyword allows a child class to inherit from a parent class.
 * The `super` keyword is used to call the constructor of the parent class.
 */
class ElectricCar extends Car {
  constructor(make, model, year, batteryCapacity) {
    super(make, model, year); // Calls parent constructor
    this.batteryCapacity = batteryCapacity; // Additional property in child class
  }

  displayBattery() {
    return `Battery Capacity: ${this.batteryCapacity} kWh`;
  }
}

/**
 * 3️⃣ Creating Objects and Accessing Inherited Methods
 * ---------------------------------------------------
 */
const myCar = new ElectricCar("Tesla", "Model S", 2023, 100);
console.log(myCar.displayInfo()); // ✅ Inherited method from Car
console.log(myCar.displayBattery()); // ✅ Method from ElectricCar

/**
 * 4️⃣ Key Takeaways on Inheritance in JavaScript
 * ---------------------------------------------
 * ✅ `extends` allows a child class to inherit properties and methods from a parent class.
 * ✅ `super` is used to call the parent class constructor inside the child class.
 * ✅ Child classes can have additional properties and methods apart from inherited ones.
 * ✅ Inheritance promotes code reusability and organization in Object-Oriented Programming.
 */
