const arr= [1,2,3,4,5,6];


arr.forEach((val,i)=>{
  arr[i] = val*2;
})
console.log(arr);


//Pollyfillsss

Array.prototype.myForEach = function(callback){
   for(let i=0;i<this.length;i++){
    callback(this[i],i,this);
   }
}

arr.myForEach((val,i)=>{
  arr[i] = val*2;
})
console.log(arr);

