const arr = [1, 3, 4, 5];

const foundVal = arr.find((curr, index, arrr) => {
  return curr % 2 === 0;
});
console.log(foundVal);

//Pollyfilss

Array.prototype.myFind = function (cb) {
  let result;
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return this[i];
    }
  }
};

const foundValPolyfilled = arr.myFind((curr, index, arrr) => {
  return curr % 2 === 0;
});
console.log("Polyfilled array", foundValPolyfilled);
