//Facade Pattern

// The facade pattern provides a simplified interface to a larger body of complex code (like a library,framework or subsystem)

// like a remote controler of tv we dont have to deal with the eires and circuits 

// so lets say we have a smart home so we want to watch movie so it will be greate right we we press watch movie and the sound turns to full and light get dimm etc 


// lets crete and home theator Facade 

//  create subsystems
class TV{
  turnOn(){
    console.log("TV is ON");
  }
  turnOff(){
    console.log("Tv is OFF");
  }
}

class SoundBox{
  turnOn(){
    console.log("Sound is ON");
  }
  turnOFF(){
    console.log('Sound is OFF');
  }
}

class Lights{
  dim(){
    console.log('Light are dimmed');
  }
  turnOn(){
    console.log('Light are ON');
  }
}


class HomeTheaterFacade {
  constructor(tv,soundSystem,lights){
    this.tv = tv;
    this.lights = lights;
    this.soundSystem =soundSystem;
  }

  watchMovie(){
    console.log('Get ready to watch a Movie');
    this.lights.dim();
    this.tv.turnOn();
    this.soundSystem.turnOn();
  }
  endMovie(){
    console.log('shutting movie theater down');
    this.soundSystem.turnOff();
    this.tv.turnOff();
    this.lights.turnOn();
  }
}

const tv =new TV();
const sound = new SoundBox();
const lights =new Lights();

const homeTheater = new HomeTheaterFacade(tv,sound,light);

homeTheater.watchMovie();

homeTheater.endMovie();


// real example

// we can create a a analytics facade and now we can use this with any liek adobe anlytrics ot mixpannel or google analytics


