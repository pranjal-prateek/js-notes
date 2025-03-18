function throttle(fn, limit) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastCall < limit) {
      return; // Ignore if within the limit time
    }
    lastCall = now;
    return fn(...args); // Execute the function
  };
}

function logMessage() {
  console.log("Throttled function executed:", new Date().toLocaleTimeString());
}

const throttledLog = throttle(logMessage, 2000);

// Throttled on scroll
window.addEventListener("scroll", throttledLog);
