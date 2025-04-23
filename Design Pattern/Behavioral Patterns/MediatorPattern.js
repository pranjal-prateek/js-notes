//Mediator Pattern

// The Mediator pattern defines a object that centralizes communication between a set of objects to promote loose coupling 


// real life example 

// Air Traffic controller 
// like the plane donot communicate to each other directly they need a mediator 
// so here comes the mediator which is ATC which coordinate the takeoff and landing 

//Mediator(chat room)

class Chatroom{
  showMessage(user,message){
    const time =new Date().toLocaleTimeString();
    console.log('user.message:message');
  }
}

class User{
  constructor(name,chatroom){
    this.name =name ;
    this.chatroom =chatroom;
  }
  send(message){
    this.chatroom.showmessage(this,message)
  }
}

const chatRoom = new Chatroom()
const jhon = new User("Jhon",chatroom);
const alise =new User("Alice",chatroom);

jhon.send("hi allice");
alise.send("Hey Jhon")

//simplify communication logic
// useful in ui interaction modals,components talking through a manager 

//chat app
//central event bus in react or redux
//component communication


