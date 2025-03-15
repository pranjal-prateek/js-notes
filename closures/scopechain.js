/**
 * Scope Chain in JavaScript
 * -------------------------
 * Scope chain is a mechanism that allows nested functions to access variables from their parent scopes.
 * It exists to enable variable lookup in a structured way, ensuring functions can access outer variables when needed.
 *
 * Why it Exists:
 * - Helps JavaScript determine variable accessibility.
 * - Enables closure functionality.
 * - Prevents conflicts by following a hierarchy.
 *
 * Where it is Used:
 * - Inside functions and nested functions.
 * - In closures to retain access to outer scope variables.
 * - In global execution context for accessing global variables.
 */

// Example of Scope Chain
let globalVar = "I am global";

function outerFunction() {
  let outerVar = "I am in outer function";

  function innerFunction() {
    let innerVar = "I am in inner function";
    console.log(globalVar); // Accessible (outer scope)
    console.log(outerVar); // Accessible (parent scope)
    console.log(innerVar); // Accessible (own scope)
  }

  innerFunction();
}

outerFunction();

/**
 * Explanation:
 * - `innerFunction` can access `outerVar` and `globalVar` due to the scope chain.
 * - JavaScript looks for variables from the innermost scope outward.
 * - If a variable is not found in a local scope, JS moves to the outer scope until it reaches the global scope.
 */
