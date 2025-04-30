const arr= [1,2,3,4,5,6];

const newArr = arr.map((val)=>{
  return val=val+2
})
console.log(newArr);



// Pollyfill

Array.prototype.myMap = function (callback){
  const result=[]
  for(let i=0;i<this.length;i++){
    result.push(callback(this[i],i,this));
  }
  return result;
}
const myNewArr = arr.myMap((val)=>{
  return val=val+4
})
console.log(myNewArr);
