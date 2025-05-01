const arr = [1, 5, 3, 3, 5];

const booly = arr.every((curr, index, arr) => {
  return curr % 2 != 0;
});

console.log(booly);

// Polyfillss

Array.prototype.myEvery = function(callback){
  for(let i=0;i<this.length;i++){
    if(!callback(this[i],i,this)){
      return false;
    }
  }
  return true;
}

const myBooly = arr.myEvery((curr, index, arr) => {
  return curr % 2 != 0;
});

console.log(myBooly);


