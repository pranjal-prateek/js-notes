/**
 * Hoisting in JavaScript
 * ----------------------
 * Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope.
 * However, the way `var`, `let`, `const`, and functions are hoisted differs significantly.
 */

// Example 1: Hoisting with `var`
console.log(x); // undefined (because `var` is hoisted with `undefined`)
var x = 10;
console.log(x); // 10

/**
 * Explanation:
 * - `var x;` is hoisted to the top, but initialized as `undefined`.
 * - The assignment `x = 10;` happens at runtime.
 */

// Example 2: Hoisting with `let` (Temporal Dead Zone - TDZ)
// console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization
let y = 20;
console.log(y); // ✅ 20

/**
 * Explanation:
 * - `let` is hoisted, but it remains in the **Temporal Dead Zone (TDZ)** until execution reaches its declaration.
 */

// Example 3: Hoisting with `const` (Similar to `let` but must be initialized)
// console.log(z); // ❌ ReferenceError: Cannot access 'z' before initialization
const z = 30;
console.log(z); // ✅ 30

/**
 * Explanation:
 * - `const` behaves like `let` in hoisting but must be initialized.
 */

// Example 4: Hoisting with Function Declarations
sayHello(); // ✅ Works fine because function declarations are fully hoisted
function sayHello() {
  console.log("Hello!");
}

/**
 * Explanation:
 * - Function declarations are fully hoisted, so you can call them before their definition.
 */

// Example 5: Hoisting with Function Expressions
// greet(); // ❌ TypeError: greet is not a function
var greet = function () {
  console.log("Hi!");
};
greet(); // ✅ Works fine here

/**
 * Explanation:
 * - Only `var greet;` is hoisted (undefined initially).
 * - The function is assigned later, so calling it before assignment causes an error.
 */

/**
 * Summary of Hoisting:
 * -------------------
 * ✅ `var` → Hoisted and initialized with `undefined`.
 * ✅ `let` → Hoisted but uninitialized (TDZ applies).
 * ✅ `const` → Hoisted but uninitialized (TDZ applies, must be assigned).
 * ✅ Function Declarations → Fully hoisted, can be used before definition.
 * ✅ Function Expressions (var) → Only `var` is hoisted, function is not assigned yet.
 */
