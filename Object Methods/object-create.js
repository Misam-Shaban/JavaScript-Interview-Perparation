// // // const person= {
// // //     greet(){
// // //         console.log("Hello..");
// // //     }
// // // };

// // // const student = Object.create(person);
// // // // const student = Object.create(null);

// // // console.log("Prototype",student);

// // // Person

// // const person = {
// //   greet() {
// //     console.log("Hello");
// //   },
// // };

// // const student = Object.create(person);

// // student.greet();

// // student.name = "Misam";
// // student.age = 23;
// // student.course = "BSCS";

// // console.log(student.name);
// // console.log(student.age);
// // console.log(student.course);

// // Object.hasOwn(student, "name"); //  ture own
// // Object.hasOwn(student, "greet"); // false inherited

// // person.name = "Ahmad";

// // console.log(student.name); // Output: Misam

// // const animal = {
// //   eat() {
// //     console.log("eating Food...");
// //   },
// // };

// // const dog = Object.create(animal);

// // const puppy = Object.create(dog);

// // puppy.eat();

// const obj4 = {
//   fname:"Misam",
//   lname:"Shaban",
// };

// // Object.create() With Second Argument

// const student = Object.create(obj4,{

//   stdInfo:{
//     value:{
//          city: "Sahiwal",
//       class: "BSCS",
//     },
//         enumerable: true,
//     writable: true,
//     configurable: true
//   },
//   addressInfo:{
//     value:{
//       address: "Cotton Research Station",
//     },
//     enumerable: true,
//     writable: true,
//     configurable: true
//   }
// })
// console.log(student.stdInfo.city);
// console.log(student.addressInfo.address);

//   //   stdInfo:{
//   //     city: "Sahiwal",
//   //     class: "BSCS",
//   // },
//   // addressInfo:{
//   //   address: "Cotton Resreach Station",
//   //    enumerable: true,     // Taake yeh property loops/Object.keys mein nazar aaye
//   //   writable: true,       // Taake iski value baad mein change ki ja sake
//   //   configurable: true,   // Taake ise delete ya modify kiya ja sake
//   // },

const person = {
  greet() {
    console.log("Hello...");
  },
};


let properties={ writable: true,
    enumerable: true,
    configurable: true,} 

const student = Object.create(person, {
  name: {
    value: "Ahmad",
   ...properties
  },
  age: {
    value: 24,
   ...properties
  },
  course: {
    value: "MERN",
   ...properties
  },
});

console.log(student.name);
console.log(student.age);
console.log(student.course);


console.log(Object.keys(student));

student.name = "Misam";
student.age = 25;
student.course = "JavaScript";

console.log(student);

console.log(
  Object.getOwnPropertyDescriptor(student, "age")
);


student.greet();
