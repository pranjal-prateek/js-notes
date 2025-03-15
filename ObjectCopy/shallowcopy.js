/**
 * Shallow Copy in JavaScript
 * --------------------------
 * A shallow copy creates a new object but only copies references for nested objects.
 * This means changes to nested objects in the copied structure affect the original object.
 *
 * Why Shallow Copy Exists:
 * - To quickly create a copy of an object without deep cloning.
 * - Useful when the internal nested objects should remain shared.
 *
 * Where Shallow Copy is Used:
 * - Duplicating arrays or objects when modifying top-level properties only.
 * - Creating backups without deep copying large structures.
 */

// Example 1: Shallow Copy using Object.assign()
const originalObj = {
  name: "John",
  address: { city: "New York", country: "USA" },
};

const shallowCopy = Object.assign({}, originalObj);
shallowCopy.name = "Doe"; // Only affects the copy
shallowCopy.address.city = "Los Angeles"; // Modifies the original as well

console.log(originalObj.address.city); // Output: "Los Angeles"
console.log(shallowCopy.address.city); // Output: "Los Angeles"

/**
 * Example 2: Shallow Copy using Spread Operator
 */
const spreadCopy = { ...originalObj };
spreadCopy.address.city = "San Francisco"; // Still modifies original object

console.log(originalObj.address.city); // Output: "San Francisco"

/**
 * Example 3: Shallow Copy for Arrays
 */
const originalArray = [1, 2, [3, 4]];
const shallowArrayCopy = [...originalArray];
shallowArrayCopy[2][0] = 99; // Modifies the nested array in the original

console.log(originalArray[2][0]); // Output: 99
console.log(shallowArrayCopy[2][0]); // Output: 99

/**
 * Explanation:
 * - Shallow copies only duplicate the outer structure.
 * - Nested objects or arrays remain references, not new copies.
 * - To fully copy an object, a deep copy method like `structuredClone()` or JSON methods is needed.
 */
