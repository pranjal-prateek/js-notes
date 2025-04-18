//Factory Pattern: it is about creating objects without specifying the exact class of the object that will be created . it like we say a cheese pizza and factory handle the things 


// When to use :
// 1. need to create objects based on some condition or input.
// 2. we dont want to exposae the object creation logic .


// example

class Car {
  constructor(){
    this.type ='Car'
  }
}
class Truck {
  constructor(){
    this.type ='Truck';
  }
}


class VechileFactory {
  static createVehicle(type){
    switch(type) {
      case 'car':
        return new Car();
      case 'truck':
        return new Truck();
      default:
        throw new Error('Invalid Type of Vehicle');
    }
  }
}

const car = VechileFactory.createVehicle('car');
console.log(car);

// so when we are creating a Button factory which returns multiple types of button in react we can use this pattern 
// lets say we button like primary secoudary and others  

// consing exercise 

// question :
// Create a NotificationFactory that can create different types of notifications:

// EmailNotification

// SMSNotification

// PushNotification

// Each type should have a method send() that prints a message saying how it's being sent.

class EmailNotification {
  send(){
    console.log("Sending Email Notification")
  }
}
class SMSNotification {
  send(){
    console.log(" Sending SMS Notification")
  }
}
class PushNotification {
  send(){
    console.log("Sending Push Notification")
  }
}

class NotificationFactory{
static createNotification(type){
  switch (type) {
    case 'email':
      return new EmailNotification
    case 'sms':
        return new SMSNotification  
     case 'push':
      return new PushNotification
  
    default:
      throw new Error('not a valid msg');
  }
}
}

const email = NotificationFactory.createNotification('email');
email.send(); // Output: Sending Email Notification

const sms = NotificationFactory.createNotification('sms');
sms.send(); // Output: Sending SMS Notification

const push = NotificationFactory.createNotification('push');
push.send(); // Output: Sending Push Notification
