// The Bridge pattern decouples an abstraction from its implementation, so both can varry independently

// example :
// lets take remote : Basic or Advance 
// Devices: Tv radio projector

// so intead for writing for tvRemote ProjectorRemote and RadioRemote we can separate the abstraction (Remote) from the implementation (Device) and connect them via Bridge

// useCase :
// lets say we have multiple buttons : RoundButton square button
// and multiple theme : dark and light 

// Implementation - theme 
class Theme{
  getColor(){}
}

class DarkTheme extends Theme{
  getColor(){
    return 'black'
  }
}

class LightTheme extends Theme{
  getColor(){
    return 'white'
  }
}

// Abstraction -Button

class Button {
  constructor(theme){
    this.theme = theme;
  }
  render(){}
}

class RoundButton extends Button{
  render(){
    console.log('rendering RoundButtn ${this.theme.getcolor()}');
  }
}
class SquareButton extends Button{
  render(){
    console.log('rendering RoundButtn ${this.theme.getcolor()}');
  }
}

//usage 

const dark = new DarkTheme();
const light =new LightTheme();

const roundDark = new RoundButton(dark);
const squareLight =new SquareButton(light);


// benefit

// 1 separate abstraction and implementation
// 2 Both ui and them logic evolve independently
// 3 Reduce class Explosion matlab alag alag specific buttin calss nai banana padega 

