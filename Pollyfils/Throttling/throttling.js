function throttle(fn, limit) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastCall < limit) {
      return;
    }
    last = now;
    return cb(...args);
  };
}
function logMessage() {
  console.log("Throttled function executed:", new Date().toLocaleTimeString());
}

const throttledLog = throttle(logMessage, 2000);

window.addEventListener("scroll", throttledLog); // Logs message at most once every 2 seconds
