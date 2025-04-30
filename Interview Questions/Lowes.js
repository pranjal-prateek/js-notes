// questions:
// what are the different types of react hooks
// what is rest and spread operator
// what are the react lifecycle method 
// how can we achieve react lifecycle method in functional Component
// can you show with code the rest and the spread operator
// what do you know about the map and find methods
// difference bwtween for in and for of loops
// what is redux 
// what is the difference between any an dunknown in typescript

// code snippts
// output
const obj1 ={
  name:"pranjal"
}
const obj2 ={
  name:"pranjal"
}

console.log(obj1===obj2)

const obj3=obj1;
console.log(obj1===obj3);
// QUESTIONS some more code snippts to find error on finding the error 

// some code snippt on react 

// coding question
// const text= "abbcddeabcdd" find the occurace of each of the alphabet 
// const text = "abbcddeabcdd";
// const frequency = {};

// for (let char of text) {
//   frequency[char] = (frequency[char] || 0) + 1;
// }

// console.log(frequency);


// question 2: 
// const data = [
//   { score: 85, subject: "Math" },
//   { score: 92, subject: "Science" },
//   { score: 78, subject: "English" },
//   { score: 88, subject: "Math" },
//   { score: 90, subject: "Science" },
//   { score: 67, subject: "History" },
//   { score: 74, subject: "English" },
// }

//   using the rcan you write the code to get the scorees like for math and the subjects repeated 

// const combinedScores = data.reduce((acc, curr) => {
//   const { subject, score } = curr;
//   acc[subject] = (acc[subject] || 0) + score;
//   return acc;
// }, {});


/**
 * Scenario:
 * You have a search bar and a table with infinite scroll.
 * Goal: Optimize the app for performance and UX.
 */

/**
 * ✅ 1. Debounce Search Input
 * Prevent unnecessary API calls on every keystroke by delaying execution.
 * Example: Use lodash.debounce or a custom debounce function.
 */

/**
 * ✅ 2. Cursor-based Pagination
 * Prefer cursor-based pagination over offset-based to maintain consistency in dynamic datasets.
 * Example: Instead of ?page=2, use ?cursor=lastItemId
 */

/**
 * ✅ 3. Virtualization
 * Only render the rows visible on the screen to improve performance.
 * Use libraries like:
 * - react-window
 * - react-virtualized
 */

/**
 * ✅ 4. Use IntersectionObserver
 * Efficiently detect when the user reaches the bottom of the list to trigger the next fetch.
 * Avoid scroll event listeners when possible.
 */

/**
 * ✅ 5. Cache Results
 * Use caching libraries like:
 * - React Query
 * - SWR
 * These prevent redundant network calls when data has already been fetched.
 */

/**
 * ✅ 6. Pre-fetch Next Page
 * As the user approaches the end of the list, begin preloading the next page in the background.
 */

/**
 * ✅ 7. Server-side Filtering
 * Send the search term as a query param to the backend and let it handle filtering.
 * Avoid loading the full dataset into the frontend.
 */

/**
 * ✅ 8. Throttle Scroll Events
 * If you must use scroll events, throttle them using lodash.throttle to reduce fire rate.
 */

/**
 * ✅ 9. Add Loading States and Skeletons
 * Improve user experience by showing placeholders during data fetches.
 */

/**
 * ✅ 10. Bundle Optimization
 * Split code and lazy load components where possible.
 * Especially useful for large table or chart components.
 */

/**
 * ✅ 11. Avoid Duplicate API Calls
 * Track current search term and page to avoid fetching the same data multiple times.
 */










