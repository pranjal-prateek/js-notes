// JavaScript Notes: Truthy and Falsy Values

/**
 * In JavaScript, values can be categorized as either "truthy" or "falsy" based on how they behave in boolean contexts.
 */

// 1. Falsy Values (Evaluates to false in a boolean context)
const falsyValues = [false, 0, -0, "", null, undefined, NaN];
console.log(
  "Falsy values:",
  falsyValues.map((v) => !!v)
); // All will be false

// Example:
if (!0) {
  console.log("0 is falsy"); // This will run
}

if (!"") {
  console.log("Empty string is falsy"); // This will run
}

// 2. Truthy Values (Everything that is not falsy)
const truthyValues = [true, 1, -100, "Hello", [], {}, function () {}, Infinity];
console.log(
  "Truthy values:",
  truthyValues.map((v) => !!v)
); // All will be true

// Example:
if ("Hello") {
  console.log("Non-empty string is truthy"); // This will run
}

if ([]) {
  console.log("Empty array is truthy"); // This will run
}

if ({}) {
  console.log("Empty object is truthy"); // This will run
}

// 3. Common Use Cases
let userName = ""; // An empty string is falsy
if (!userName) {
  console.log("User name is empty"); // This will run
}

let userProfile = {};
if (userProfile) {
  console.log("User profile exists"); // This will run because {} is truthy
}

// 4. Short-circuiting with || and &&
let defaultName = userName || "Guest"; // Since userName is falsy, "Guest" is used
console.log("User name is:", defaultName); // Output: "Guest"

let isLoggedIn = true;
isLoggedIn && console.log("User is logged in"); // This runs because isLoggedIn is truthy

/**
 * Summary:
 * - Falsy values: false, 0, "", null, undefined, NaN
 * - Truthy values: Everything else (non-empty strings, numbers, objects, arrays, etc.)
 * - Used in conditions, short-circuiting (||, &&), and logical operations
 */
