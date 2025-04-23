//OBSERVER PATTERN

// so the observer pattern is a one to many dependency between objects so that when one object (subject) changes state, all the dependent (observers) are notified and updated automatically 
//maybe we can say it works for the subscription better

// ex:
// lets say 1000 people(observer) subscribed to a youtube channel now the channel uploads a new video(subject) so all the observers wil be notified

//lets make a weather app

class WeatherStation{
  constructor(){
    this.temparature =0;
    this.observer =[]
  }
  subscribe(observer) {
    this.observer.push(observer)
  }
  unsubscribe(observer){
    this.observer =this.observers.filter(obs=>obs !==observer)
  }
  settemparature(temp){
    console.log('Temparature is now temp');
    this.temparature=temp;
    this.notify();
  }
  notify(){
    this.observers.forEach(observer => observer.update(this.temparature))
  }
  }
  class PhoneDisplay{
    update(temp){
      console.log('Phone Display: current Temparature is temp')
    }
  }

  class LedDisplay{
    update(temp){
      console.log('LEd Display: temparature =');
    }
  }

  const weatherStation = new WeatherStation();

  const phone = new PhoneDisplay();
  const led =new LedDisplay()

  weatherStation.subscribe(phone);
  weatherStation.subscribe(led);

  weatherStation.settemparature(25);

  //React state libraries like redux recoil etc
  //pub/sub system
  //realtime features
  //custom EvenEmitters


  



