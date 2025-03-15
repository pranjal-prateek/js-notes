/**
 * Deep Copy in JavaScript
 * ------------------------
 * A deep copy creates a new object and recursively copies all nested objects and arrays,
 * ensuring that the copied structure is fully independent of the original.
 *
 * Why Deep Copy Exists:
 * - To avoid unintended mutations in nested structures.
 * - Essential for immutability when working with complex data structures.
 *
 * Where Deep Copy is Used:
 * - Redux state management to maintain immutability.
 * - When duplicating objects without affecting the original data.
 */

// Example 1: Deep Copy using JSON Methods (Only for simple objects)
const originalObj = {
  name: "Alice",
  address: { city: "Paris", country: "France" },
};

const deepCopyJSON = JSON.parse(JSON.stringify(originalObj));
deepCopyJSON.address.city = "London"; // Changes only in the copied object

console.log(originalObj.address.city); // Output: "Paris"
console.log(deepCopyJSON.address.city); // Output: "London"

/**
 * Example 2: Deep Copy using Recursive Function
 */
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  const copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}

const deepCopyRecursive = deepCopy(originalObj);
deepCopyRecursive.address.city = "Berlin";

console.log(originalObj.address.city); // Output: "Paris"
console.log(deepCopyRecursive.address.city); // Output: "Berlin"

/**
 * Example 3: Deep Copy using structuredClone (Modern approach)
 */
const deepCopyStructured = structuredClone(originalObj);
deepCopyStructured.address.city = "Rome";

console.log(originalObj.address.city); // Output: "Paris"
console.log(deepCopyStructured.address.city); // Output: "Rome"

/**
 * Explanation:
 * - JSON methods work for simple objects but lose functions and special types like Date.
 * - Recursive function ensures a true deep copy for all objects.
 * - structuredClone() is the best built-in method for deep cloning in modern JavaScript.
 */
