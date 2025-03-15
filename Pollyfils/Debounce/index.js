// Debouncing is a technique to limit the rate at which a function executes, typically used in scenarios like search bars, button clicks, and window resizing.

const debounceSearch = (func, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log("Search triggered", ...args);
    }, 500); // delay of 500 milliseconds
  };
};
const fetchFunction = (query) => {
  // Simulate API call
  document.getElementById("fetch").innerText = query;
  // Perform API call here...
  //...
};
const searchBar = document.getElementById("search");
const debounce = debounceSearch(fetchFunction, 5000);

searchBar.addEventListener("input", (event) => {
  debounce(event.target.value);
});
