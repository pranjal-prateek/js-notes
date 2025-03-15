//TODO   Pure fucntion are fucntion which return the same value everytime

function addition(a, b) {
  return a + b;
}

console.log(addition(2, 3)); // 5

//TODO Impure fucntion are those which return different value everytime
let target = 0;
function increment() {
  target++;
}

increment();
console.log(target); // 1
increment();
console.log(target); // 2
