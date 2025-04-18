//Flyweight Pattern

// The flyweight pattern is used to minimize the memory usage by sharing as much data as possible with similar objects

// ex 
// lets consider word file in that we use letters like A B C has font size and style now instead of creating a class for each letter the share a common formatting 

// lets create a shape Drawing app 
 class Circle{
  constructor(color){
    this.color = color;
  }
  draw(x,y,radius){
    console.log('this is a circle with');
  }
 }
 
 class CircleFactory{
  constructor(){
    this.circle ={};
  }
  getCircle(color){
    if(!this.circle[color]){
      this.circle[color] = new Circle(color);
    }
    return this.circle[color];
  }
 }

 const factory = new CircleFactory();

const colors = ["red", "green", "blue"];

for (let i = 0; i < 10; i++) {
  const color = colors[i % colors.length];
  const circle = factory.getCircle(color);
  circle.draw(Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), 10);
}

// Benefits
// Great for memory optimization

// Reduces object creation overhead

// Ideal for large-scale applications (like games, text editors, drawing tools)
