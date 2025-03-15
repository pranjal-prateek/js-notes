// reduce function accepts the parameters as (accumulator,current value) and a initial value and return a reduced value

const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((accumulator, currentValue, index, arr) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);

//pollyfill for the reduce function
Array.prototype.myReduce = function (cb, initialvalue) {
  let accumulator = initialvalue === undefined ? this[0] : initialvalue;

  for (let i = 0; i < this.length; i++) {
    accumulator = cb(accumulator, this[i], i, this);
  }
  return accumulator;
};
const prototypeValue = arr.myReduce((accumulator, currentValue, index, arr) => {
  return accumulator + currentValue;
}, 0);

console.log("PrototypeValue", prototypeValue);
