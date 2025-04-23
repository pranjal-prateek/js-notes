//Command pattern
// This pattern converts a request into a object that constains all the information about the request , allowing you to parameterize methods,queue commands, and support undoable opration 

// real life ex:
// you press a button 
// the remote doesnt know how tv works 
// it just sends command to perform an action 

// smart home command center
//Reciever
class Light{
  turnOn(){
    console.log("Light is ON");
  }
  turnOff(){
    console.log("light is oFF");
  }
}

//Command

class TurnOnCommand{
  constructor(light){
    this.light =light
  }
  execute(){
    this.light.turnOn();
  }
}
class TurnOffCommand{
  constructor(light){
    this.light =light
  }
  execute(){
    this.light.turnOff();
  }
}

//Invoker
class RemoteControl{
  setCommand(command){
    this.command =command;
  }
  pressButton(){
    this.command.execute()
  }
}
const light =new Light();

const onCommand = new TurnOnCommand(light);
const offCommand = new TurnOffCommand(light);

const remote = new RemoteControl();

remote.setCommand(onCommand);
remote.pressButton()

remote.setCommand(offCommand);
remote.pressButton()

// useCase:
// Undo/Redo functionality in editors
//task schedulers or queue
//Button click handlers 
