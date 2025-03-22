// Factory Pattern Example: Toy Factory
// The factory creates toys without exposing the complex creation logic

// Toy Factory Function
function Factory(toyType) {
  if (toyType === 'car') {
    return { name: 'Car', wheels: 4, sound: () => console.log('Vroom Vroom!') };
  } else if (toyType === 'doll') {
    return { name: 'Doll', dress: 'Pink', sound: () => console.log('Hello!') };
  } else {
    return { name: 'Unknown Toy', sound: () => console.log('No sound') };
  }
}

// Creating toys using the factory
const car = Factory('car');
const dollToy = Factory('doll');
const unknownToy = Factory('robot');

// Checking the created toys
console.log(car.name); // Car
car.sound(); // Vroom Vroom!

console.log(dollToy.name); // Doll
dollToy.sound(); // Hello!

console.log(unknownToy.name); // Unknown Toy
unknownToy.sound(); // No sound

// Summary for Revision:
// - The Factory Pattern is used to create objects without exposing the object creation logic.
// - It is useful when you need to create many similar objects with slight variations.
// - This pattern improves code maintainability and readability.
// - You can easily add new toy types by adding new conditions in the factory function.

// Example: Add a New Toy
// If you want to add a bike toy, just add another else-if block in the factory like this:
// else if (toyType === 'bike') {
//   return { name: 'Bike', wheels: 2, sound: () => console.log('Ring Ring!') };
// }
