//so map is the function which accepts parameter such as (currvalue,index,array) and return a new array

//map function

const arr = [1, 2, 3, 4, 5];

const newArr = arr.map((curr, index, arr) => {
  return curr * 2;
});

console.log(newArr);

//pollyfill for the map function

Array.prototype.myMap = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }
  return result;
};

const newArr2 = arr.myMap((curr, index, arr) => {
  return curr * 2;
});
console.log("pollyfill arr", newArr2);
