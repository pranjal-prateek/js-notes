

const openButton = document.getElementById('openButton')
const modal = document.getElementById('modalOverlay')


openButton.addEventListener('click',handleModal)
function handleModal(){
  showModal()
}

// close te modal if clicked outside


document.addEventListener('click',(event)=>{
if(event.target===modal){
  modal.classList.add('modal--hidden')
}
})

function showModal(){
  modal.classList.toggle('modal--hidden')
}