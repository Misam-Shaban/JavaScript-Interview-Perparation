const person = {
  greet() {
    console.log("Hello");
  }
};

const student = Object.create(person);

console.log(Object.getPrototypeOf(student));