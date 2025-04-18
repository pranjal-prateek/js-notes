display()// Proxy Pattern 

// The Proxy pattern provides a surrogate or placeholder for another object to control access to it 

// ex:  let see youtube 
// we have two user premium and normal but for the same video we show ads to normal user . this may be a example for the gateKeeing  

// --The real Subject 

 class RealImage{
  constructor(){
    this.fileName =fileName;
    this.loadFromDisk();
  }

  loadFromDisk(){
    console.log('loading from disk');
  }
  display(){
    log('displaying')
  }
 }

//  --Proxy 

class ProxyImage{
  constructor(fileName){
    this.fileName =fileName;
    this.realImage =null
  }
  display(){
    if(!this.realImage){
      this.realImage =new RealImage(this.fileName)
    }
    this.realImage.display();
  }
}

const img = new ProxyImage("puppy.png");

console.log("First time:");
img.display(); // Loads from disk and displays

console.log("Second time:");
img.display(); // Only displays (no re-load)

// ✅ Benefits
// Lazy loading (load only when needed)

// Access control (check permissions)

// Logging or caching

// Works great with external APIs, auth layers, etc