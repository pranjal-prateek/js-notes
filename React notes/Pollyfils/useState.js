let state =[];
let stateIndex=0;

function render(){
  stateIndex=0;
  App();
}
function useState(initialValue){

  const currentIndex = stateIndex;

  if(state[currentIndex]===undefined){
    state[currentIndex]= initialValue;
  }

  function setState(newValue){
    if(typeof newValue ==='function'){
      state[currentIndex] =newValue(state[currentIndex])
    }else{
      state[currentIndex] = newValue;
    }
    render();
  }
  stateIndex++;
  return [state[currentIndex],setState]
}
function App(){
  const [count,setCount] = useState(0)
  console.log(count);
  setTimeout(()=>{
    setCount((prev)=>prev+1);
  },2000)
}
render()