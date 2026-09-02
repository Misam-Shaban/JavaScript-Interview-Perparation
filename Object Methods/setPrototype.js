const animal = {
  eat() {
    console.log("Eating...");
  }
};

const person = {
  greet() {
    console.log("Hello...");
  }
};

const student = {};

Object.setPrototypeOf(student,person);
Object.setPrototypeOf(student, animal);

console.log(student);
