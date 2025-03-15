/**
 * Mixins in JavaScript (Multiple Inheritance Alternative)
 * ---------------------------------------------------
 * Mixins provide a way to reuse functionality across multiple classes without using traditional inheritance.
 * JavaScript doesn’t support multiple inheritance, so mixins act as an alternative by allowing multiple objects or classes to share methods.
 */

// Define a mixin with reusable methods
const LoggerMixin = {
  logDetails() {
    console.log(`Logging details for ${this.name}`);
  },
};

// Define a base class
class User {
  constructor(name) {
    this.name = name;
  }
}

// Copy mixin methods into the prototype of User
Object.assign(User.prototype, LoggerMixin);

const user1 = new User("Alice");
user1.logDetails(); // ✅ Output: Logging details for Alice

/**
 * Using Mixins with Multiple Classes
 * Mixins can be applied to multiple classes to extend their functionalities.
 */

// Another mixin for tracking
const TrackingMixin = {
  track() {
    console.log(`${this.name} is being tracked.`);
  },
};

// Define a new class
class Product {
  constructor(name) {
    this.name = name;
  }
}

// Apply mixins to Product class
Object.assign(Product.prototype, LoggerMixin, TrackingMixin);

const product1 = new Product("Laptop");
product1.logDetails(); // ✅ Output: Logging details for Laptop
product1.track(); // ✅ Output: Laptop is being tracked.

/**
 * Key Takeaways
 * --------------
 * ✅ Mixins allow code reusability without using class inheritance.
 * ✅ They help achieve multiple inheritance-like behavior in JavaScript.
 * ✅ Object.assign() is used to copy mixin methods into another class prototype.
 * ✅ Mixins keep classes lightweight and focused on their main functionality.
 */
