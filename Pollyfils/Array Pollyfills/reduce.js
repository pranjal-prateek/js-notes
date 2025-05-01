// reduce function accepts the parameters as (accumulator,current value) and a initial value and return a reduced value

const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((accumulator, currentValue, index, arr) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);


//Pollyfilles

Array.prototype.myReduce =function (callback,initialVal){
let accumulator= initialVal==='undefined'?this[0]:initialVal;
  for(let i=0;i<this.length;i++){
    accumulator=callback(accumulator,this[i],i,this);
  }
  return accumulator;

}

const prototypeValue = arr.myReduce((accumulator, currentValue, index, arr) => {
  return accumulator + currentValue;
}, 0);

console.log("PrototypeValue", prototypeValue);

