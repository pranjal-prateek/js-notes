//AdapterPattern
// So this is like making a global adapter for the non compatible interfaces t work together 

// Real life: it is like using a global adapter to use the dubai wala laptop charging pin

//let say we have a Opl Api

class OldPaymentGateway {
  makepayment(amount){
    console.log("Paying by old gateway")
  }
}

class NewPaymentGateway {
  pay({amountInRupees}){
    console.log("Paying byu new payment option");
  }
}

// so lets use a adapter to solve the issue 

class PaymentAdapter{
  constructor(){
    this.gateway =new NewPaymentGateway();
  }
  makepayment(amount){
    this.gateway.pay({amountInRupees:amount})
  }
}