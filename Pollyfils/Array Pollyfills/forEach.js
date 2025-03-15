const arr = [1, 2, 3, 4, 5];

arr.forEach((curr, index, arr) => {
  arr[index] = curr * 2;
});
console.log(arr);

const polyArr = [1, 3, 5, 7, 9];

Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

polyArr.myForEach((curr, index, arr) => {
  polyArr[index] = curr * 2;
});
console.log("Polyfilled array", polyArr);
