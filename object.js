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


const student = {
  name: "Misam Shaban",
  age: 23,
  course: "BSCS"
};

student.city = "Sahiwal";// add 
student.age = 24;  // update
delete student.course; // delete
console.log(student);
console.log(student.name);
console.log(student["age"]);
