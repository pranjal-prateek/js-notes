function catchMemo() {
  const cacheVar = {};

  return function memoizedFetch(url, fetchFunction) {
    // Check if the data is already in cache
    if (cacheVar[url]) {
      console.log("Returning cached data for:", url);
      return Promise.resolve(cacheVar[url]); // Return cached data
    }

    console.log("Fetching data from API for:", url);
    return fetchFunction().then((data) => {
      cacheVar[url] = data; // Store in cache
      return data;
    });
  };
}

// Example Usage
const memoizedFetch = catchMemo();

function fetchData(url) {
  return fetch(url).then((response) => response.json());
}

const url = "https://jsonplaceholder.typicode.com/todos/1";

// First call - API fetch
memoizedFetch(url, () => fetchData(url)).then((data) =>
  console.log("Data:", data)
);

// Second call - Returns cached data
memoizedFetch(url, () => fetchData(url)).then((data) =>
  console.log("Data:", data)
);
