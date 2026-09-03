// hasOwnPorperty methods Check krta ha 
// k ya property object ki own property ha ya nh 

// Kya ye property directly object ki own property hai?

// const user = {
//   name: "Misam",
//   age: 23,
//   address:{
//     city: "Sahiwal",
//   },
// };

// const student = Object.create(person);

// student.name = "Misam";

// console.log(user.hasOwnProperty("name")); // ture 
// console.log(user.hasOwnProperty("age")); // ture 
// console.log(user.hasOwnProperty("city")); // false ku k property nested object ma ha 

// console.log(Object.hasOwn(student, "name"));  


const person = {
  role: "Human",

  greet() {
    console.log("Hello");
  }
};

const student = Object.create(person);

student.name = "Misam";
student.age = 23;


console.log(student.hasOwnProperty("name"));
console.log(student.hasOwnProperty("age"));
console.log(student.hasOwnProperty("role"));
console.log(student.hasOwnProperty("greet"));
