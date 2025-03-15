//TODO Higher order function are thoes which take other fucntion as a argument and return a function

const arr = [1, 2, 3, 4];

//using map function
const mapArr = arr.map((num, i, arr) => {
  return num * 2;
});
//so the map fucntion take another fucntions as a parameter and return a
function operate(num1, num2, operation) {
  return operation(num1, num2);
}

function add(a, b) {
  return a + b;
}

console.log(operate(5, 3, add)); // Output: 8
