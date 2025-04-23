
//strategy Pattern
// so in this we define family of algorithm put each of them in a separate class and make them interchnageable at requestAnimationFrame. 

//it is like separating what is done from how it is done

// ex:
// lets say we have multiple payment methods so at run time we can select which we have to pay through

class CreditCard{
  pay(amount){
    console.log('payment through credit card');
  }
}

class Paypal{
  pay(amount){
    console.log('payment through paypal');
  }
}
 class UpiPayment{
  pay(amount){
    console.log('payment through UPI');
  }
 }


 //lets make the context class now 

 class PaymentProcessor{
  constructor(strategy){
    this.strategy =strategy
  }
  setStrategy(strategy){
    this.strategy =strategy
  }
  pay(amount){
    this.strategy.pay(amount)
  }
 }

const processor = new PaymentProcessor(new CreditCard())
processor.pay(1000);

processor.setStrategy(new Paypal())
processor.pay(500)

//useCAse
//we can use this to switch behavior at runtime
//follow open closed principal

// real useCase

// sorting strategy 
//form validation
// react component behavior
// game dev 