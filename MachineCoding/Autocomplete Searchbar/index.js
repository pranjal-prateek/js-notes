
import { FilterStrategy, data, debounce, updateHighlight } from "./utils.js";


const searchBox = document.getElementById('searchBox')
const autoSuggestion =document.getElementById('suggestion')
const filterType = document.getElementById('filterType');

let filterStrategy = FilterStrategy.includes

let currentIndex = -1;
let currentSuggestions = [];

filterType.addEventListener("change",(e)=>{
  const selected =e.target.value;
  filterStrategy =FilterStrategy[selected]
})

const handleChange =debounce((e)=>{
const querry =searchBox.value.trim();
if(querry===""){
  autoSuggestion.innerHTML ="";
  autoSuggestion.style.display ='none'
  return;
}
const filtered =data.filter((item)=>{
  return filterStrategy(querry,item);
})
renderSuggestion(filtered);
},1000)


searchBox.addEventListener('input',(event)=>handleChange(event))

function renderSuggestion (filtered){
autoSuggestion.innerHTML=""
currentSuggestions = filtered;
currentIndex = -1;
if(filtered.length===0){
  autoSuggestion.style.display ='none'
  return;
}
autoSuggestion.style.display ='block';

filtered.forEach((item,index)=>{
  const div =document.createElement("div");
  div.classList.add("suggestion")
  div.innerText =item;

  div.addEventListener("click",()=>{
    searchBox.value =item;
    autoSuggestion.innerHTML="";
    autoSuggestion.style.display = "none";
  });
  autoSuggestion.appendChild(div);
})
}

searchBox.addEventListener('keydown',(e)=>{
  const suggestion =document.querySelectorAll('.suggestion');
  if(!suggestion.length)return;

  if(e.key ==='ArrowDown'){
    e.preventDefault();
    if(currentIndex<suggestion.length-1){
      currentIndex++;
      updateHighlight(suggestion,currentIndex)
    }
  }else if(e.key === 'ArrowUp'){
    e.preventDefault();
    if(currentIndex>0){
      currentIndex--;
      updateHighlight(suggestion,currentIndex)
    }
  }
})

