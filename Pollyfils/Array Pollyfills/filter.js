//so filter is the function which accepts parameter such as (currvalue,index,array) and return a new array with filtered element

//filter function

const arr = [1, 2, 3, 4, 5];

const newArr = arr.filter((curr, index, arr) => {
  if (curr % 2 === 0) {
    return curr;
  }
});

console.log(newArr);

//pollyfill for the filter function

Array.prototype.myFilter = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

const newArr2 = arr.myFilter((curr, index, arr) => {
  if (curr % 2 === 0) {
    return curr;
  }
});
console.log("pollyfill arr", newArr2);
