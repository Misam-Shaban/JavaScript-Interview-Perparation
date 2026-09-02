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
