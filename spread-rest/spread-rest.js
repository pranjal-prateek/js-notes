// Spread vs Rest Operator in JavaScript - Notes

/**
 * 1. Spread Operator (`...`)
 *    - Expands elements of an array or object into individual elements.
 *    - Used in array copying, merging, function arguments, etc.
 */

// Example: Spreading an array
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // Expands arr1 into individual elements
console.log(arr2); // [1, 2, 3, 4, 5]

// Example: Spreading an object
const obj1 = { name: "Alice", age: 25 };
const obj2 = { ...obj1, city: "New York" }; // Copy and add new property
console.log(obj2); // { name: "Alice", age: 25, city: "New York" }

// Example: Passing function arguments
function sum(a, b, c) {
  return a + b + c;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6 (spreads array elements as arguments)

/**
 * 2. Rest Operator (`...`)
 *    - Collects multiple elements into a single array.
 *    - Used in function parameters to collect arguments.
 */

// Example: Rest in function parameters
function addNumbers(...nums) {
  return nums.reduce((sum, num) => sum + num, 0);
}
console.log(addNumbers(1, 2, 3, 4, 5)); // 15 (gathers numbers into an array)

// Example: Rest in object destructuring
const person = { name: "Alice", age: 25, city: "New York" };
const { name, ...rest } = person; // Collects remaining properties into `rest`
console.log(name); // "Alice"
console.log(rest); // { age: 25, city: "New York" }

/**
 * 3. Key Differences
 *    - Spread (`...`): Expands elements
 *    - Rest (`...`): Collects elements
 */
