// const obj = {
//     fname: "Misam",
//     lname: "Shaban",
//     age: 24,
//     city: "Sahiwal",
//     getFullname(){
//         return `My Full Name is ${this.name} ${this.lname} `
//     }
// };

// console.log("First Object",obj);
// const obj2 = obj;
// console.log(obj2);
// const obj1 = Object.create(obj) ;
// console.log("First Object ", obj);
// console.log("Second Object",obj1);
// console.log(obj.__proto__);

// const student = {
//     name: "Misam Shaban",
//     calss: "8th",
//     age: 24,
// };
// // console.log("Second Object",student);
// const newStudent = Object.create(student);
// newStudent.name = "Ahmad Shaban";
// console.log(student.name);
// console.log(newStudent.name);

// console.log(Object.getPrototypeOf(student));
// const proto = Object.create(student);
// console.log(proto);

// const student = {
//   name: "Misam Shaban",
//   age: 23,
//   course: "BSCS"
// };

// const student1 = student;

// student1.name = "Ahmad Shaban";

// // student.city = "Sahiwal";// add
// // student.age = 24;  // update
// // delete student.course; // delete
// // console.log(student);
// // console.log(student.name);
// // console.log(student["age"]);

// const finedKeys = Object.keys(student);

// console.log(finedKeys);

// finedKeys.forEach((key)=>{
//     console.log(key);

// });

// const product = {
//   name: "Laptop",
//   price: 100000,
//   brand: "HP",
//   available: true,
// };

// // const key = Object.keys(product);

// // const newdata = key.forEach((data) => {
// //   console.log(data);
// // });


// for(key of Object.keys(product)){
//   console.log(key,":" ,product[key]);
// }

// console.log("newdata", newdata);  


const employee = {
  name: "Misam",
  age: 23,
  position: "Frontend Developer",
  city: "Sahiwal"
};


const emplyKeys = Object.keys(employee);
const value = Object.values(employee);
console.log(emplyKeys);
console.log(value);

console.log(emplyKeys.length);
console.log(emplyKeys[2]);
console.log(employee[emplyKeys[2]]);

for (const keys of Object.keys(employee)){
  console.log(keys, ":" , employee[keys] );
  
}