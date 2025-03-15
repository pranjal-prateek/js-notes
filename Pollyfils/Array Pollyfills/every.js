const arr = [1, 5, 3, 3, 5];

const booly = arr.every((curr, index, arr) => {
  return curr % 2 != 0;
});

console.log(booly);

// Polyfill

Array.prototype.myEvery = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (!cb(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

const boolyPolyfill = arr.myEvery((curr, index, arr) => {
  return curr % 2 != 0;
});
console.log("Polyfilled booly", boolyPolyfill);
