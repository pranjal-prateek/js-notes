// Function to fetch data and display it in a list
function fetchAndDisplayPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts?_limit=5") // Fetch 5 posts
    .then((response) => response.json()) // Convert response to JSON
    .then((data) => {
      const list = document.getElementById("posts-list");
      data.forEach((post) => {
        const listItem = document.createElement("li");
        listItem.textContent = post.title; // Display post title
        list.appendChild(listItem);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
}
