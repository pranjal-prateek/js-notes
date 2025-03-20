// The Singleton Pattern ensures that a class has only one instance and provides a global access point to it.
// Your example explains it well with the analogy of a single coffee machine for 100 employees.

class Singleton {
  constructor() {
    // Check if an instance already exists
    if (!Singleton.instance) {
      // If not, create one and assign it to Singleton.instance
      Singleton.instance = this;
    }
    // Return the existing or newly created instance
    return Singleton.instance;
  }

  showMessage() {
    console.log('I am Singleton Pattern');
  }
}

// Creating instances
const instance1 = new Singleton();
const instance2 = new Singleton();

// Check if both instances are the same
if (instance1 === instance2) {
  console.log('Singleton: Both instances are the same.');
} else {
  console.log('Not Singleton: Instances are different.');
}

instance1.showMessage(); // Output: I am Singleton Pattern
instance2.showMessage(); // Output: I am Singleton Pattern
