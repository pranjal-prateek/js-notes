// Strategy Pattern Example: Travel Time Calculation
// The strategy pattern allows us to choose a travel strategy at runtime

// Different Travel Strategies
function carStrategy(distance) {
  console.log(`Traveling by car for ${distance} km.`);
  return distance / 60; // Assuming 60 km/h speed
}

function busStrategy(distance) {
  console.log(`Traveling by bus for ${distance} km.`);
  return distance / 40; // Assuming 40 km/h speed
}

function bicycleStrategy(distance) {
  console.log(`Traveling by bicycle for ${distance} km.`);
  return distance / 20; // Assuming 20 km/h speed
}

// Context to Execute the Chosen Strategy
function TravelContext(strategy, distance) {
  return strategy(distance);
}

// Example Usage
const distance = 120; // 120 km

// Travel using different strategies
console.log(`Time by Car: ${TravelContext(carStrategy, distance)} hours`);
console.log(`Time by Bus: ${TravelContext(busStrategy, distance)} hours`);
console.log(`Time by Bicycle: ${TravelContext(bicycleStrategy, distance)} hours`);

// Summary for Revision:
// - Strategy Pattern allows dynamic selection of algorithms (strategies).
// - It promotes cleaner and more maintainable code.
// - The TravelContext acts as the controller, deciding which strategy to use.
// - You can add new travel strategies without modifying the core logic.

// Example: Add a New Travel Strategy
// function trainStrategy(distance) {
//   console.log(`Traveling by train for ${distance} km.`);
//   return distance / 80; // Assuming 80 km/h speed
// }
// console.log(`Time by Train: ${TravelContext(trainStrategy, distance)} hours`);
