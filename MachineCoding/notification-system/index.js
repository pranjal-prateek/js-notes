const bell = document.getElementById('bell');
const badge =document.getElementById('badge');
const dropdown =document.getElementById('dropdown');

let isOpen =false;


bell.addEventListener('click',(e)=>{
  e.stopPropagation()
  console.log('clicked');
  isOpen =!isOpen;
  
  dropdown.classList.toggle('notification__dropdown--hidden',!isOpen);

  if(isOpen){
    badge.style.display ='none'
  }
})
document.addEventListener('click',(e)=>{
  if(e.target.closest('.notification')){
    dropdown.classList.add('notification__dropdown--hidden');
    isOpen=false
  }
})