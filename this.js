// let obj = {
//     name: "misam",
//     fullname:  'Misam Shaban',
//     city: "Sahiwal",
//     age:25,
//    getFulldata(){
//     console.log("My full name is", this.fullname ,"and age is ", this.age, "and i lived in", this.city);
//    }
// }

// obj.getFulldata();

// const student = {
//     name: "Misam Shaban",
//     age: 23 ,
// };

// console.log(`Name is ${student.name} and age is ${student.age}`);

// function student(){
//     console.log();

// }

let fname = "Misam";
let lname = "Shaban";

const user = {
  fname: "Misam",
  lname: "Shaban",
  fullName: () => {
    console.log(`${this.fname} ${this.lname}`);
  },
};
user.fullName();

function User(name, age) {
  this.name = name;
  this.age = age;
}

let student = new User("Misam Shaban", 24);
let teacher = new User("Misam", 35);

// Function borrowing
// Explicit binding
// call() apply() bind()
