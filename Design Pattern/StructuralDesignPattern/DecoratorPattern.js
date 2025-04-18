//Decorator Pattern

// It lets us add new behavior to an object without modifying its original structure 

// its like wrapping an object to enhance or change its behavior dynamically

// so we can say it is like the base pizza remains the same but we add toppings to it 

class Coffee{
  cost(){
    return 100;
  }
  description(){
    return 'Basic Coffee'
  }
}

class MilkDecorator{
  constructor(coffee){
    this.coffee =coffee;
  }
  cost(){
    return this.coffee.cost()+20;
  }
}

const myCoffee = new Coffee();
myCoffee= newMilkDecorator(myCoffee)

//Enhances functionality without inheritance

// Adds responsibilities at runtime

// Promotes open/closed principle (open for extension, closed for modification)

// in react we use HOC which is same as this 


