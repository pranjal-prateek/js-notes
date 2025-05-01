const arr = [1,2,3,4,[5,[7,8]]]


console.log(arr.flat(2))


Array.prototype.myFlat = function(depth=1){
  const result=[];
 function flatten(arr,d){
    for(let item of arr){
      if(Array.isArray(item) && d>0){
        flatten(item,d-1);
      }else{
        result.push(item);
      }
    }
 }
 flatten(this,depth);
 return result;
}


console.log(arr.myFlat(2))