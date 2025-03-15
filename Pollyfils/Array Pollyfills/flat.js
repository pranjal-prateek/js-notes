/**
 * The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 */

const nestedArray = [1, [2, 3], [4, [5, 6]]];
console.log(nestedArray.flat()); // Output: [1, 2, 3, 4, [5, 6]]
console.log(nestedArray.flat(2)); // Output: [1, 2, 3, 4, 5, 6]

// Polyfill for flat()
Array.prototype.myFlat = function (depth = 1) {
  const flatten = (arr, depth) => {
    return depth > 0
      ? arr.reduce(
          (acc, val) =>
            acc.concat(Array.isArray(val) ? flatten(val, depth - 1) : val),
          []
        )
      : arr.slice();
  };
  return flatten(this, depth);
};

console.log(nestedArray.myFlat()); // Output: [1, 2, 3, 4, [5, 6]]
console.log(nestedArray.myFlat(2)); // Output: [1, 2, 3, 4, 5, 6]
// Polyfill for flat() without using reduce or other prototype methods
function flattenArray(arr, depth = 1) {
  let result = [];
  function helper(innerArray, currentDepth) {
    for (let i = 0; i < innerArray.length; i++) {
      if (Array.isArray(innerArray[i]) && currentDepth > 0) {
        helper(innerArray[i], currentDepth - 1);
      } else {
        result.push(innerArray[i]);
      }
    }
  }
  helper(arr, depth);
  return result;
}

console.log(flattenArray(nestedArray)); // Output: [1, 2, 3, 4, [5, 6]]
console.log(flattenArray(nestedArray, 2)); // Output: [1, 2, 3, 4, 5, 6]
