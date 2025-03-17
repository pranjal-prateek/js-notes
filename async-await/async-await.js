// Async/Await in JavaScript - Notes

/**
 * 1. What is Async/Await?
 *    - Async/Await is a modern way to handle asynchronous code in JavaScript.
 *    - It is built on top of Promises and makes asynchronous code easier to read and write.
 *    - An `async` function always returns a Promise.
 *
 * 2. How to Use Async/Await?
 *    - Use `async` before a function to make it asynchronous.
 *    - Use `await` inside an async function to pause execution until a Promise resolves.
 */

// Example: Fetching Data Using Async/Await
async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1"); // Fetch data from API
    let data = await response.json(); // Convert response to JSON
    console.log(data); // Display data in console
  } catch (error) {
    console.error("Error fetching data:", error); // Handle errors
  }
}

fetchData(); // Call the function

/**
 * 3. Key Points to Remember:
 *    - `async function` ensures the function returns a Promise.
 *    - `await` can only be used inside an `async` function.
 *    - Use `try...catch` to handle errors in async functions.
 *    - Async/Await makes code cleaner and avoids callback hell.
 */
