let a={val:10}

let b=a;
console.log(b===a)//true
// this is not a example of shallow copy

const originalObj = {
  name: "John",
  address: { city: "New York", country: "USA" },
};

const shallowCopy = Object.assign({}, originalObj);
console.log(shallowCopy);
shallowCopy.name = "Doe"; // Only affects the copy
console.log(originalObj);
shallowCopy.address.city = "Los Angeles"; // Modifies the original as well
console.log(originalObj);