/**
 * Closures in JavaScript
 * ----------------------
 * A closure is a function that retains access to its lexical scope,
 * even when the function is executed outside that scope.
 */

// Example 1: Basic Closure
function closureExample() {
  let count = 0; // This variable is remembered by the returned function
  return function () {
    count++;
    console.log(count);
  };
}

const counter1 = closureExample();
const counter2 = closureExample(); // Independent closure

counter1(); // 1
counter1(); // 2
counter2(); // 1 (Separate instance)

/**
 * Key Features of Closures:
 * -------------------------
 * ✅ Encapsulation – Variables remain private inside the function.
 * ✅ Stateful Functions – Function "remembers" previous states.
 * ✅ Avoids Global Scope Pollution.
 */

// Example 2: Creating Private Variables
function createCounter() {
  let count = 0;
  return {
    increment: () => console.log(++count),
    decrement: () => console.log(--count),
    reset: () => (count = 0),
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1

// Example 3: Function Factories using Closures
function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10

/**
 * Common Use Cases of Closures:
 * -----------------------------
 * - Data privacy (Encapsulation)
 * - Function factories (e.g., multiplier functions)
 * - Event handlers that retain state
 * - Maintaining state in asynchronous operations
 */

// Example 4: Closures in Event Listeners
// function addClickListener() {
//   let count = 0;
//   document.querySelector("button").addEventListener("click", function () {
//     count++;
//     console.log(`Button clicked ${count} times`);
//   });
// }
// addClickListener();

/**
 * Potential Pitfalls of Closures:
 * --------------------------------
 * ❌ Memory Leaks – Large objects retained in closures prevent garbage collection.
 * ❌ Unexpected Shared State – If functions share the same closure, modifying one can affect others.
 */

// Example 5: Unexpected Shared State Issue
function createFunctions() {
  let arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(() => console.log(i)); // All functions use the same 'i'
  }
  return arr;
}

const funcs = createFunctions();
funcs[0](); // 3
funcs[1](); // 3
funcs[2](); // 3

// Fix using IIFE (Immediately Invoked Function Expression)
function createFixedFunctions() {
  let arr = [];
  for (var i = 0; i < 3; i++) {
    (function (j) {
      arr.push(() => console.log(j));
    })(i);
  }
  return arr;
}

const fixedFuncs = createFixedFunctions();
fixedFuncs[0](); // 0
fixedFuncs[1](); // 1
fixedFuncs[2](); // 2

/**
 * Summary:
 * --------
 * - A closure allows a function to retain access to variables from its parent scope.
 * - Useful for encapsulation, state management, and function factories.
 * - Be mindful of memory leaks and unintended shared state.
 */
