//SINGLETON PAttern: This pattern states thats there should be a single instance of a class  which can be globally used ;
// lets say we have a theme manager which manages the theme of the whole application;

//When to use :
// 1. when we need a single shared resource (logger ,app state );



class Singleton{
  constructor(){
    if(Singleton.instance){
      return Singleton.instance
    }

    this.timeStamp = Date.now();
    Singleton.instance =this;
  }
    getTime() {
      return this.timeStamp
  }
}

const instA =new Singleton();
const instB =new Singleton();

console.log(instA.getTime()===instB.getTime())

// so singleton pattern is mostly used in redux and context provider 

// used in logger and api managers

//real time example 

class ApiService{
  constructor(){
    if(ApiService.instance){
      return ApiService.instance
    }
    this.baseUrl = 'https://www.google.com'
    ApiService.instance =this;
  }
  fetchData(endPoint){
    console.log(`Fetching from ${this.baseURL}${endpoint}`)
  }

}

const apiservice =new ApiService();
export default apiservice;

// In your component
import apiService from './apiService';

function App() {
  useEffect(() => {
    apiService.fetchData('/users');
  }, []);

  return <div>Check console for API call</div>;
}

