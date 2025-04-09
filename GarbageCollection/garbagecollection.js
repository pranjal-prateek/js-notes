// Garbage Collection in JavaScript - Explained in Layman Terms 🧹

// JavaScript automatically manages memory using Garbage Collection.

// Think of it like a smart kitchen helper that cleans up memory (dirty dishes)
// when they're no longer needed.

// ============================
// 🧠 Memory Allocation Example
// ============================
let user = { name: "John" }; // memory is allocated for this object

// As long as 'user' is reachable (in use), JS keeps it in memory.

// ==============================
// 🔁 Reachability = Still Useful
// ==============================
// JS keeps values that are still "reachable" from the root (like window or global scope)

// Example of reachability:
function greet() {
  let message = "Hello"; // 'message' is reachable during function execution
}
greet(); // after this call, 'message' is no longer reachable => eligible for GC

// =========================
// ❌ Unreachable = Garbage!
// =========================
// When a value is no longer reachable, JS will "collect" it (free memory)

let car = { model: "Tesla" };
car = null; // breaks the reference, so the object becomes unreachable and GC will clean it

// =========================
// ⚠️ Common Pitfall: Memory Leak
// =========================
// Keeping references you don't need anymore can prevent GC

let unusedObj = { data: "important" };
let cache = [];

cache.push(unusedObj); // 'unusedObj' stays in memory because 'cache' still references it

// If you forget to clear 'cache', memory won't be freed — causing a memory leak

// =========================
// ✅ Tips to Help GC Work Well
// =========================
// 1. Don't keep unnecessary references.
// 2. Set unused large objects to null to break references.
// 3. Watch out for global variables and event listeners holding memory.
// 4. Use tools like Chrome DevTools to monitor memory usage.

// =========================
// 🎯 Final Summary
// =========================
// JavaScript's garbage collector automatically frees memory that is no longer used.
// It does this by checking whether data is still "reachable".
// You don’t have to manually delete memory, but you should write clean code to avoid leaks!

