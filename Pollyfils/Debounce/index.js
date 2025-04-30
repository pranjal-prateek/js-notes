const searchInput =document.getElementById('search');
const fruits =['apple','appricot','banana','grapes'];
const showResults =document.getElementById('fetch')


function debounce(func,delay){
  let timer;

  return function(...args){
    clearTimeout(timer);
    timer = setTimeout(()=>{
      func(...args)
    },delay)
  }
}

function filterFunction(input){
  const filterValues = fruits.filter((fruit)=>{
    return fruit.toLowerCase().includes(input.toLowerCase())
  })

  showResults.innerHTML='';
  const ul =document.createElement('ul');
  showResults.appendChild(ul);

  filterValues.forEach((fruit)=>{
    const li = document.createElement('li');
    li.textContent =fruit;
    ul.appendChild(li)
  })
}

const debounceFunction =debounce(filterFunction,2000);


function handleChange(e){
  const inputValue = e.target.value;
  debounceFunction(inputValue)
}

searchInput.addEventListener('input',(e)=>handleChange(e))