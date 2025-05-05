// so call is a way to attach a function to a object and call it there
//syntax call(obj,..args in string )
class Obj{
  constructor(name){
    this.name=name;
  }
}


const person =new Obj("Pranjal")
// lets say we have a function

function sayHello(...args){
  console.log(this.name)
}

// sayHello.call(person)


Function.prototype.myCall =function(context={},...args){
  if(typeof this !='function'){
    throw new Error('nikal yaha se')
  }
  console.log(this);
  context.fn = this;
  console.log(context);
  context.fn(...args)
}
sayHello.myCall(person)