//Prototype Pattern

// It lets us clone an object Instead of creating a new from scratch 

// When to use 
// when creating a new object is constly or complex or a similar object is present .

// example 

const car = {
  wheels:4,
  drive(){
    console.log("Driving a car");
  }
};

//clone the prototype

const bmw = Object.create(car);
bmw.brand ="BMW";
bmw.drive();
console.log(bmw.wheels);
console.log(bmw.brand);
