
const hour = document.getElementById('hour');
const min = document.getElementById('min');
const sec =document.getElementById('sec');

const start = document.getElementById('start');
const pause =document.getElementById('pause');
const reset =document.getElementById('reset');

let isStarted =false;
let interval;
let startTime;
let elapsedTime=0;
function updateTimer(){
const currTime =new Date().getTime();
const timeDiff =currTime -startTime +elapsedTime;
const Thour = Math.floor((timeDiff/(1000*60*60))%24);
  const Tmin =Math.floor((timeDiff/(1000*60))%60);
  const Tsec =Math.floor((timeDiff/(1000))%60);
  hour.textContent = Thour.toString().padStart(2, '0');
  min.textContent = Tmin.toString().padStart(2, '0');
  sec.textContent = Tsec.toString().padStart(2, '0');
// console.log(time);
}

function handleStart(){
  if(!isStarted){
    startTime = new Date().getTime();
    interval=setInterval(updateTimer,1000);
    start.innerText = 'Stop';
    isStarted=true;
  }else{
    clearInterval(interval);
    start.innerText ='Start';
    isStarted=false
    elapsedTime = new Date().getTime() - startTime
  }
  
}


function handlePause(){
  if (isStarted) {
    clearInterval(interval);
    elapsedTime += new Date().getTime() - startTime;
    isStarted = false;
    start.textContent = 'Start';
  }
}
function handleReset(){
  clearInterval(interval);
  hour.textContent = '00';
  min.textContent ='00';
  sec.textContent ='00';
  isStarted = false
  start.innerText ='Start'
  startTime = 0;
  elapsedTime = 0;
}
start.addEventListener('click',handleStart)

pause.addEventListener('click',handlePause)

reset.addEventListener('click',handleReset)