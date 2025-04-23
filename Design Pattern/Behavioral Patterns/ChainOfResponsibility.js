//Chain Of Responsibility Pattern

//The chain of responsibility pattern allows an event to be processed by more than one handler and each handler decides either to handle the request to passs it to the chain 

// it works like the customer support system
// level1->level2->level3 

// So it has 3 things Base handlers the concrete handlers and client (raises the request)

class Handler {
  setnext(handler){
    this.nextHandler =handler
    return handler;
  }

  handle(request){
    if(this.nextHandler){
      return this.nextHandler.handle(request);
    }
    return null;
  }
}


//Concrete Handler

class AuthHandler extends Handler{
  handle(request){
    if(!request.user){
      console.log('Auth failed : user not logged in ');
      return;
    }
    console.log("auth PAssed");
    return super.handle(request)
  }
}
class RoleHandler extends handler{
  handle(request){
    if(request.user.role != 'admin'){
      console.log("Role check failed  not a admin");
      return
    }
    console.log("Role check passed");
    return super.handle(request)
  }
}

class FinalHandler extends Handler{
  handle(request){
    console.log("Reques handle sucessfully");
  }
}

const auth =new AuthHandler();
const role =new RoleHandler();
const final =new FinalHandler();


auth.setnext(role).setNext(final)

// mainly used in expressmiddleware chains 
// also for redux middleware 