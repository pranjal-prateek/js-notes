function catchMemo() {
  const catchObj = {};

  return function(url, fetchFunction) {
    if (catchObj[url]) {
      console.log("Returning cached data for:", url);
      return Promise.resolve(catchObj[url]);
    }

    console.log("Fetching data from API for:", url);
    return fetchFunction().then((data) => {
      catchObj[url] = data;
      return data;
    });
  };
}

const memoFetch = catchMemo();

function fetchData(url) {
  return fetch(url).then((response) => response.json());
}

const url = "https://jsonplaceholder.typicode.com/todos/1";

// First call - fetches from API
memoFetch(url, () => fetchData(url)).then((data) =>
  console.log("Data:", data)
);

// Second call - returns cached
setTimeout(()=>{
  memoFetch(url, () => fetchData(url)).then((data) =>
  console.log("Data:", data)
);
},1000)

