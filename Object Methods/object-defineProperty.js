// // const student = {
// //     greet(){
// //         console.log("Hello...");
// //     }
// // };

// // Object.defineProperty(student, "name", {
// //   value: "Misam",
// //   writable: true,
// //   enumerable: true,
// //   configurable: true
// // });

// // console.log(student);

// const user = {
//   fname: "Misam",
//   lname: "Shaban",
// };

// Object.defineProperty(user, "fullname", {
//   get() {
//     return `${user.fname} ${user.lname}`;
//   },
//   set(value){
//     console.log("Brother Name:", value);
//   }
// });

// console.log(user.fullname);

// user.fullname = "Ahmad Shaban";

const user = {
  name: "Misam",
};

Object.defineProperties(user, {
  age: {
    value: 23,
    writable: true,
    enumerable: true,
    configurable: true,
  },
  secret: {
    value: "12345",
    writable: false,
    enumerable: false,
    configurable: false,
  },
});

console.log((user.age = 24));

console.log(Object.keys(user));
console.log(user.secret);
