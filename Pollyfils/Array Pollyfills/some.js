// it check if any of the one array element satisfy the condition provided or not

const arr1 = [1, 5, 3, 4, 5];

const testResult = arr1.some((curr, index, arr1) => {
  return curr % 2 === 0;
});
console.log(testResult);

//Pollyfills

Array.prototype.MySome = function(callback){
  for(let i=0;i<this.length;i++){
    if(callback(this[i],i,this)){
      return true;
    }
  }
  return false
}
const testResult2 = arr1.some((curr, index, arr1) => {
  return curr %2 === 0;
});
console.log(testResult2);
