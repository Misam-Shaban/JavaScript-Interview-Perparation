const student = {
    greet(){
        console.log("Hello...");
    }
};

Object.defineProperty(student, "name", {
  value: "Misam",
  writable: true,
  enumerable: true,
  configurable: true
});

console.log(student);


