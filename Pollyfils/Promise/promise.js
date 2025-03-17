function MyPromise(executer) {
  let onResolve,
    onReject,
    isFullfilled = false,
    isRejected = false,
    isCalled = false,
    value;

  function resolve(val) {
    isFullfilled = true;
    value = val;
    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  }
  function reject(error) {
    isRejected = true;
    value = error;
    if (typeof onReject === "function") {
      onReject(error);
      isCalled = true;
    }
  }
  this.then = function (callback) {
    onResolve = callback;

    if (isFullfilled && !isCalled) {
      isCalled = true;
      onResolve(value);
    }
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;
    if (isRejected && !isCalled) {
      isCalled = true;
      onReject(value);
    }
    return this;
  };
  try {
    executer(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise Resolved");
  }, 2000);
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
