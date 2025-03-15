/**
 * Shadowing in JavaScript
 * ------------------------
 * Shadowing occurs when a variable declared in a local scope has the same name as a variable in an outer scope.
 * The local variable "shadows" the outer variable, meaning the inner variable takes precedence inside its scope.
 *
 * Why Shadowing Exists:
 * - To allow functions or blocks to have their own variables without modifying outer scope variables.
 * - Prevents unintended changes to global or parent scope variables.
 *
 * Where Shadowing is Used:
 * - Inside functions where local variables override outer scope variables.
 * - In block scopes using `let` and `const` to prevent modifying global variables.
 *
 * Example 1: Function Scope Shadowing
 */

let message = "Global Message";

function printMessage() {
  let message = "Local Message"; // Shadows the global 'message'
  console.log(message); // Outputs: "Local Message"
}

printMessage();
console.log(message); // Outputs: "Global Message"

/**
 * Example 2: Block Scope Shadowing
 */

let number = 10;

if (true) {
  let number = 20; // Shadows the outer 'number' inside this block
  console.log(number); // Outputs: 20
}

console.log(number); // Outputs: 10 (Outer variable remains unchanged)

/**
 * Example 3: Illegal Shadowing
 * ----------------------------
 * Shadowing with `var` inside a block is allowed, but `let` or `const` cannot shadow `var` in the same scope.
 */

var x = 5;

{
  // let x = 10; // This would be valid
  // var x = 10; // ❌ SyntaxError: Identifier 'x' has already been declared
}

/**
 * Explanation:
 * - Shadowing allows local scope variables to override outer ones.
 * - Block-scoped variables (`let`, `const`) do not allow illegal shadowing of `var`.
 * - Helps in maintaining scope-specific modifications without affecting outer scopes.
 */
