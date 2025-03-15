/**
 * Callbacks in JavaScript
 * ------------------------
 * A callback is a function that is passed as an argument to another function
 * and is executed later, usually after a specific event or operation completes.
 *
 * Callbacks allow JavaScript to handle asynchronous operations efficiently.
 */

/**
 * 1️⃣ Basic Callback Example
 * --------------------------
 * Here, `greet` function is passed as an argument to `processUserInput`,
 * which calls it later.
 */
function greet(name) {
  console.log("Hello, " + name);
}

function processUserInput(callback) {
  let name = "Alice";
  callback(name); // Calling the callback function
}

processUserInput(greet);

/**
 * 2️⃣ Callback in setTimeout
 * -------------------------
 * The `hello` function is passed as a callback to `setTimeout`,
 * which calls it after 1 second.
 */
function hello() {
  console.log("Hello");
}

setTimeout(hello, 1000); // Executes `hello` after 1 second

/**
 * 3️⃣ Callback with Parameters
 * ---------------------------
 * Callbacks can take arguments when executed.
 */
function printMessage(message) {
  console.log("Message: " + message);
}

function delayedMessage(callback, message) {
  setTimeout(() => callback(message), 2000);
}

delayedMessage(printMessage, "This is a delayed message");

/**
 * 4️⃣ Asynchronous Callbacks
 * -------------------------
 * Callbacks are commonly used in asynchronous JavaScript (e.g., API calls).
 */
function fetchData(callback) {
  setTimeout(() => {
    let data = "Fetched Data";
    callback(data);
  }, 3000);
}

function handleData(data) {
  console.log("Received: " + data);
}

fetchData(handleData);

/**
 * 5️⃣ Callback Hell (Pyramid of Doom)
 * ----------------------------------
 * When multiple nested callbacks are used, code becomes hard to read.
 */
setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);

/**
 * 🔹 Solution: Promises & Async/Await
 * -----------------------------------
 * To avoid Callback Hell, use Promises or Async/Await (Covered separately).
 */
