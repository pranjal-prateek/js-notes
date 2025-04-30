const stars =document.getElementById('stars');
const rating =document.getElementById('rating');

const startsCount = 5;

let selectedStars =0;

for(let i=0;i<startsCount;i++){
  const star = document.createElement('span');

  star.classList.add('star');
  star.innerHTML = '★';
  star.dataset.value =i+1;

  //Hover Effect

  star.addEventListener('mouseover',()=>{
    highlightStar(i);
  })

  //reset on mouse out

  star.addEventListener('mouseout',()=>{
    highlightStar(selectedStars)
  })

  star.addEventListener('click',()=>{
    selectedStars =i
  })

  stars.appendChild(star)
}

function highlightStar(rating){
  const starsRating = stars.querySelectorAll('.star')
  starsRating.forEach((star, index) => {
    star.classList.toggle('hover', index < rating);
    star.classList.toggle('selected', index < rating);
  });
}

