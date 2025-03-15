/**
 * Deep Dive into JavaScript Promises
 */

/**
 * What is a Promise?
 * - A Promise is an object representing the eventual completion or failure of an asynchronous operation.
 * - It has three states: Pending, Fulfilled, and Rejected.
 * - It allows chaining with .then() and .catch().
 */

// Example of a basic Promise
const promiseExample = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved");
  }, 2000);
});

promiseExample
  .then((value) => console.log(value))
  .catch((err) => console.error(err));

/**
 * Promise States:
 * - Pending: Initial state, neither resolved nor rejected.
 * - Fulfilled: The operation completed successfully.
 * - Rejected: The operation failed.
 */

/**
 * Chaining Promises
 */
promiseExample
  .then((value) => {
    console.log("First then:", value);
    return "Data from first then";
  })
  .then((secondValue) => {
    console.log("Second then:", secondValue);
  })
  .catch((err) => console.error("Error caught:", err));

/**
 * Error Handling with Promises
 */
const errorPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Something went wrong");
  }, 1000);
});

errorPromise.catch((err) => console.error("Caught error:", err));

/**
 * Handling Multiple Promises
 */
const p1 = new Promise((resolve) =>
  setTimeout(() => resolve("First Done"), 1000)
);
const p2 = new Promise((resolve) =>
  setTimeout(() => resolve("Second Done"), 2000)
);

// Promise.all: Waits for all promises to resolve; if one fails, it rejects.
Promise.all([p1, p2]).then((results) =>
  console.log("Promise.all Results:", results)
);

// Promise.race: Resolves or rejects as soon as one promise settles.
Promise.race([p1, p2]).then((result) =>
  console.log("Promise.race Result:", result)
);
