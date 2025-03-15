// Currying is a technique where a function is broken into multiple functions that take a single argument.

//Currying requires returning a function, not immediately executing it.
function currying(a) {
  return function smallCurry(b) {
    return a * b;
  };
}

let val = currying(2)(3);
console.log(val);

//this can also be done as

let curry = currying(2);

let result = curry(3);

console.log(result);

// function call also be defined as

let addition = (a) => (b) => a + b;

console.log(addition(2)(3));
