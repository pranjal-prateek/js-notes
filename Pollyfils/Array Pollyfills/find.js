const arr = [1, 3, 4, 5];

const foundVal = arr.find((curr, index, arrr) => {
  return curr > 6;
});
console.log(foundVal);

//Pollyfilss

Array.prototype.myFind =function(callback){
  for(let i=0;i<this.length;i++){
    if(callback(this[i],i,this)){
      return this[i];
    }
  }
  return undefined;
}

const myFoundVal = arr.myFind((curr, index, arrr) => {
  return curr >6 ;
});
console.log(myFoundVal);