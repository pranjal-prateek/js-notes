 //Promise Pollyfill

 function MyPromise(executer){

  let onResolve,onReject;
  let isFullfilled =false,isRejected=false,value;
  let isCalled =false;
  function resolve(val){

    isFullfilled=true
    value =val
    if(typeof onResolve ==='function'){
      isCalled=true
      onResolve(value);

    }
  }
  function reject(val){
    isRejected =true;
    value=val;
    if(typeof onReject ==='function'){
      onReject(value);
      isCalled=true
    }
   
  }
  this.then = function(callback){
    onResolve =callback;
    if(isFullfilled && !isCalled){
      isCalled =true
      onResolve(value)
    }
    return this;
  }
  this.catch = function(callback){
    onReject =callback
    if(isRejected && !isCalled){
      isCalled=true;
      onReject(value);
    }
    return this
  }
  executer(resolve,reject)
 }



 const checkPromise =new MyPromise((resolve,reject)=>{
  setTimeout(()=>{
    reject(2);
  },2000)
 })

 checkPromise.then((res)=>{
  console.log(res);
 }).catch((error)=>{
  console.log(error);
 })

 //Promise.all Polyfills  

 Promise.allPollyfill =(promises)=>{
  return new Promise((resolve,reject)=>{
    const result =[];

    if(!promises.length){
      resolve(results)
      return;
    }
    const pending =promise.length;

    promises.forEach((promise,idx)=>{
      Promise.resolve(promise).then((res)=>{
        results[i] =res
        prending--;

        if(pennding===0){
          resolve(results)
        }
      },reject)
    })
  })
 }