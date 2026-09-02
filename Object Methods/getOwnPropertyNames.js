const person = {
  fname: "Misam",
  lname: "Shaban"
};

Object.defineProperty(person, "secret", {
  value: "12345",
  enumerable: false
});
 

console.log(Object.keys(person));
console.log(Object.getOwnPropertyNames(person));



// Practice code 

const person = {
  fname: "Misam",
  lname: "Shaban"
};

Object.defineProperties(person, {
  age: {
    value: 23,
    writable: true,
    enumerable: true,
    configurable: true
  },

  secret: {
    value: "12345",
    writable: false,
    enumerable: false,
    configurable: false
  }
});

console.log(Object.keys(person));
console.log(Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertyDescriptors(person));