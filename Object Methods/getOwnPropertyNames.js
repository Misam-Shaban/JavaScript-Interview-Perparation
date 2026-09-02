const person = {
  fname: "Misam",
  lname: "Shaban"
};

Object.defineProperty(person, "secret", {
  value: "12345",
  enumerable: false
});