/**
 * Callback Hell Explanation
 * -------------------------
 * Callback Hell happens when multiple asynchronous functions are nested inside each other,
 * leading to deeply indented, hard-to-read, and hard-to-maintain code.
 */

// Example of Callback Hell
function step1(callback) {
  setTimeout(() => {
    console.log("Step 1 completed");
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Step 2 completed");
    callback();
  }, 1000);
}

function step3(callback) {
  setTimeout(() => {
    console.log("Step 3 completed");
    callback();
  }, 1000);
}

// Nested Callbacks (Callback Hell)
step1(() => {
  step2(() => {
    step3(() => {
      console.log("All steps completed");
    });
  });
});

/**
 * Solution: Using Promises to Avoid Callback Hell
 */
function step1Promise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1 completed");
      resolve();
    }, 1000);
  });
}

function step2Promise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2 completed");
      resolve();
    }, 1000);
  });
}

function step3Promise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 3 completed");
      resolve();
    }, 1000);
  });
}

// Using Promises to Chain Calls
step1Promise()
  .then(step2Promise)
  .then(step3Promise)
  .then(() => console.log("All steps completed"));

/**
 * Best Solution: Using Async/Await
 */
async function runSteps() {
  await step1Promise();
  await step2Promise();
  await step3Promise();
  console.log("All steps completed");
}

// Running the function
runSteps();
