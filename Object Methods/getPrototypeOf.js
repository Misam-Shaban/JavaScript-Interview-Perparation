// const person = {
//   greet() {
//     console.log("Hello");
//   }
// };

// const student = Object.create(person);

// console.log(Object.getPrototypeOf(student));


const animal = {
  eat() {
    console.log("Eating...");
  }
};

const dog = Object.create(animal);

const puppy = Object.create(dog);

puppy.name = "Tommy";


console.log(Object.getPrototypeOf(puppy) === dog); // ture 

console.log(Object.getPrototypeOf(dog) === animal); // ture 

console.log(Object.getPrototypeOf(animal) === Object.prototype);  // ture

console.log(Object.getPrototypeOf(Object.prototype) === null); // ture

console.log(Object.getPrototypeOf(puppy)); // Prototype chain jis ma eat 
// b ha isi liya eat b cahl raha ha ku puppy eat ko prototype sy inherit kr raha ha 






