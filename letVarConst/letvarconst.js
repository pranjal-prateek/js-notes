/**
 * var, let, and const in JavaScript
 * ---------------------------------
 * JavaScript provides three ways to declare variables: `var`, `let`, and `const`.
 * Each has different scoping rules, behaviors, and best practices.
 */

/**
 * 1️⃣ var (Function Scoped)
 * ------------------------
 * - `var` is function-scoped, meaning it is available inside the entire function.
 * - It is hoisted and initialized with `undefined`.
 * - Can be re-declared and updated.
 * - Accessible outside block `{}` but NOT outside functions.
 */
function testVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // ✅ Works (function-scoped)
}

testVar();
// console.log(x); ❌ Error (x is not defined outside the function)

/**
 * 2️⃣ let (Block Scoped)
 * ---------------------
 * - `let` is block-scoped, meaning it is only available inside `{}`.
 * - It is hoisted but NOT initialized (stays in Temporal Dead Zone).
 * - Can be updated but NOT re-declared in the same scope.
 */
if (true) {
  let y = 20;
  console.log(y); // ✅ Works inside the block
}
// console.log(y); ❌ Error (y is not accessible outside the block)

/**
 * 3️⃣ const (Block Scoped, Immutable Reference)
 * ---------------------------------------------
 * - `const` is block-scoped, like `let`.
 * - It must be initialized at the time of declaration.
 * - Cannot be re-declared or updated (but objects & arrays are mutable!).
 */
if (true) {
  const z = 30;
  console.log(z); // ✅ Works inside the block
}
// console.log(z); ❌ Error (z is not accessible outside the block)

/**
 * 4️⃣ Hoisting Behavior
 * ---------------------
 * - `var` is hoisted and initialized with `undefined`.
 * - `let` and `const` are hoisted but remain in the Temporal Dead Zone (TDZ) until initialized.
 */
console.log(a); // ✅ undefined (var is hoisted)
var a = 50;

// console.log(b); ❌ Error (Cannot access 'b' before initialization)
let b = 60;

/**
 * 5️⃣ Key Differences Between var, let, and const
 * -----------------------------------------------
 * ✅ `var` is function-scoped, `let` and `const` are block-scoped.
 * ✅ `var` can be re-declared & updated, `let` can only be updated, `const` is immutable.
 * ✅ `var` is initialized with `undefined`, `let` & `const` are in Temporal Dead Zone.
 */
