

let counDownDuration = 0;
let endTime=0 ;

const hourInput = document.getElementById('hourTimer')
const minInput = document.getElementById('minTimer')
const secInput = document.getElementById('secTimer')

const timer =document.getElementById('timer');
const hour =document.getElementById('hour');
const min =document.getElementById('min');
const sec =document.getElementById('sec');
const startButton =document.getElementById('start')
let interval;
function updateTimer(){
  const now = new Date().getTime();
  const distance =endTime-now;

  if(distance<0){
    hour.textContent ='00';
    min.textContent ='00';
    sec.textContent='00';
    clearInterval(interval)
    return;
  }
  const hours = Math.floor((distance/(1000*60*60))%24);
  const minute =Math.floor((distance/(1000*60))%60);
  const second =Math.floor((distance/(1000))%60);

  hour.textContent = hours.toString().padStart(2,'0');
  min.textContent =minute.toString().padStart(2,'0');
  sec.textContent = second.toString().padStart(2,'0')

}
updateTimer();

function startCountDown(){
  clearInterval();

  const timeH = parseInt(hourInput.value || 0);
  const timeM =parseInt(minInput.value || 0);
  const timeS =parseInt(secInput.value || 0);

  const totalMillisecond =(timeH* 60*60+timeM*60+timeS)*1000;
  if(totalMillisecond<0)return;
  endTime =new Date().getTime() + totalMillisecond;
  interval =setInterval(updateTimer,1000)
}
startButton.addEventListener('click',startCountDown)


