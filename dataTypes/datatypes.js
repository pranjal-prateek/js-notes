/**
 * Data Types in JavaScript
 * ------------------------
 * JavaScript has two categories of data types:
 * 1️⃣ Primitive Data Types (Immutable)
 * 2️⃣ Non-Primitive (Reference) Data Types (Mutable)
 */

/**
 * 1️⃣ Primitive Data Types (Stored by Value)
 * -----------------------------------------
 * These types store a single value directly in memory.
 * They are immutable (cannot be modified) and compared by value.
 */

// 📌 String (Represents text data)
let name = "John";
console.log(typeof name); // string

// 📌 Number (Represents numeric values, both integer and floating point)
let age = 25;
console.log(typeof age); // number

// 📌 Boolean (Represents true or false values)
let isStudent = false;
console.log(typeof isStudent); // boolean

// 📌 Null (Represents an intentional absence of value)
let emptyValue = null;
console.log(typeof emptyValue); // object (this is a known JavaScript quirk)

// 📌 Undefined (Represents an uninitialized variable)
let notAssigned;
console.log(typeof notAssigned); // undefined

// 📌 BigInt (Used for very large numbers)
let bigNumber = 123456789012345678901234567890n;
console.log(typeof bigNumber); // bigint

// 📌 Symbol (Used for creating unique identifiers)
let uniqueKey = Symbol("id");
console.log(typeof uniqueKey); // symbol

/**
 * 2️⃣ Non-Primitive (Reference) Data Types (Stored by Reference)
 * --------------------------------------------------------------
 * These types hold collections of values or complex structures.
 * They are mutable (modifiable) and compared by reference.
 */

// 📌 Object (Key-Value pairs)
let person = {
  name: "Alice",
  age: 30,
};
console.log(typeof person); // object

// 📌 Array (List of elements)
let fruits = ["Apple", "Banana", "Cherry"];
console.log(typeof fruits); // object

// 📌 Function (A callable block of code)
function greet() {
  console.log("Hello, world!");
}
console.log(typeof greet); // function (technically an object)

// 📌 Date (Represents date and time)
let today = new Date();
console.log(typeof today); // object

/**
 * Key Differences Between Primitive and Non-Primitive Types:
 * ----------------------------------------------------------
 * ✅ Primitive types are stored directly in memory (stack) and are immutable.
 * ✅ Non-primitive types are stored by reference (heap) and are mutable.
 * ✅ Primitive types are compared by value, whereas non-primitive types are compared by reference.
 */

// Example: Comparing Primitives (By Value)
let a = 10;
let b = 10;
console.log(a === b); // true (same value)

// Example: Comparing Objects (By Reference)
let obj1 = { key: "value" };
let obj2 = { key: "value" };
console.log(obj1 === obj2); // false (different memory references)

/**
 * Summary:
 * --------
 * - JavaScript has 7 primitive types (`string`, `number`, `boolean`, `null`, `undefined`, `bigint`, `symbol`).
 * - Non-primitive types include `object`, `array`, `function`, `date`, etc.
 * - Primitives are immutable and stored by value, whereas objects are mutable and stored by reference.
 */
