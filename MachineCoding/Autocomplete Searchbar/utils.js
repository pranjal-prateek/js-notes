export const data = [
  "Apple", "Apricot", "Avocado", "Banana", "Blackberry",
  "Blueberry", "Cherry", "Coconut", "Date", "Dragonfruit",
  "Fig", "Grapes", "Guava", "Kiwi", "Lemon", "Lime",
  "Mango", "Orange", "Papaya", "Peach", "Pineapple", "Plum",
  "Pomegranate", "Raspberry", "Strawberry", "Watermelon"
];


//now here lets create some use of startegy pattern for filteration so one can be start with one can we includes

export const FilterStrategy ={
  startsWith: (query,item) =>item.toLowerCase().startsWith(query.toLowerCase()),
  includes: (query,item) =>item.toLowerCase().includes(query.toLowerCase())
}

export function debounce(func,delay){
let timeout;

return function(...args){
  clearTimeout(timeout);
  timeout = setTimeout(()=>func.apply(this,args),delay);
}
}
export function updateHighlight(suggestions, currentIndex) {
  suggestions.forEach((item, idx) => {
    item.classList.toggle('highlight', idx === currentIndex);
  });
}


