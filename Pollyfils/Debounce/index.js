// Debounce function
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer); // Clear previous timer
    timer = setTimeout(() => {
      console.log("hello", args);
      func(...args);
    }, delay);
  };
}

// Simulated API call function
function fetchData(query) {
  console.log("Fetching results for:", query);
  document.getElementById("fetch").innerText = `Searching for: ${query}`;
}

// Get input element
const searchInput = document.getElementById("search");

// Apply debounce (delays function execution by 500ms)
const debouncedSearch = debounce(fetchData, 2000);

// Attach event listener
searchInput.addEventListener("input", (event) => {
  console.log("helllo", event.target.value);
  debouncedSearch(event.target.value);
});
