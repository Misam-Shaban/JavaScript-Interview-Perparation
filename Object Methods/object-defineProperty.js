// // // // // const student = {
// // // // //     greet(){
// // // // //         console.log("Hello...");
// // // // //     }
// // // // // };

// // // // // Object.defineProperty(student, "name", {
// // // // //   value: "Misam",
// // // // //   writable: true,
// // // // //   enumerable: true,
// // // // //   configurable: true
// // // // // });

// // // // // console.log(student);

// // // // const user = {
// // // //   fname: "Misam",
// // // //   lname: "Shaban",
// // // // };

// // // // Object.defineProperty(user, "fullname", {
// // // //   get() {
// // // //     return `${user.fname} ${user.lname}`;
// // // //   },
// // // //   set(value){
// // // //     console.log("Brother Name:", value);
// // // //   }
// // // // });

// // // // console.log(user.fullname);

// // // // user.fullname = "Ahmad Shaban";

// // // const user = {
// // //   fname: "Misam",
// // //   lname: "Shaban"

// // // };

// // // Object.defineProperties(user,{

// // //   age: {
// // //     value: 23,
// // //     writable: true,
// // //     enumerable: true,
// // //     configurable: true,
// // //   },
// // //   secret: {
// // //     value: "12345",
// // //     writable: false,
// // //     enumerable: false,
// // //     configurable: false,
// // //   },
// // // });


// // // console.log((user.age = 24));

// // // console.log(Object.keys(user));
// // // console.log(user.secret);

// // // console.log(Object.getOwnPropertyDescriptor(user,"age"));
// // // console.log(Object.getOwnPropertyDescriptor(user,"secret"));



// // const user = {
// //   fname: "Misam",
// //   lname: "Shaban"
// // };


// // Object.defineProperty(user, "age",{
// //         value: 23,
// // writable: true,
// // enumerable: true,
// // configurable: true,
// // });

// // user.age = 24;
// // console.log(user.age);


// // Object.defineProperty(user, "secret",{
// //     value: "12345",
// // writable: false,
// // enumerable: false,
// // configurable: false,
// // });

// // console.log(Object.keys(user));
// // console.log(user.secret);


// // console.log(
// //   Object.getOwnPropertyDescriptor(user, "age")
// // );

// // console.log(
// //   Object.getOwnPropertyDescriptor(user, "secret")
// // );



// const user = {
//   fname: "Misam",
//   lname: "Shaban"
// }; 


// Object.defineProperty(user,"fullname",{
//   get(){
//     return `${this.fname} ${this.lname}`
//   },
//   set(value){
//     console.log("New Full Name:",value);
//   },
//   enumerable: true,
// configurable: true,
// });

// console.log(user.fullname);


// console.log(user.fullname);

// user.fullname = "Ahmad Shaban";

// console.log(Object.keys(user));

// console.log(
//   Object.getOwnPropertyDescriptor(user, "fullname")
// );

// const user = {
//   fname: "Misam",
//   lname: "Shaban"
// };

// let age = 23;

// Object.defineProperty(user, "fullName", {
//   get() {
//     return `${this.fname} ${this.lname}`;
//   },

//   set(value) {
//     console.log("Age Is:",value);
    
//     // yahan value ko handle karo
//   },

//   enumerable: true,
//   configurable: true
// });

// Object.defineProperty(user, "userAge", {
//   get() {
//     return age;
//   },

//   set(value) {
//     if(userAge>=18){
//       console.log(Allowed);
//     }else{
//       console.log("Not Allowed..");
      
//     }
//   },

//   enumerable: true,
//   configurable: true
// });

const user = {
  fname: "Misam",
  lname: "Shaban"
};


Object.defineProperties(user,{
  age:{
    value: 23,
writable: true,
enumerable: true,
configurable: true,
  },
  secret:{
    value: "12345",
writable: false,
enumerable: false,
configurable: false,
  },

  fullName:{
    get(){
      return `${this.fname} ${this.lname}`;
    },
      set(value){
    console.log("New Full Name:", value);
  },
  enumerable: true,
configurable: true,
  }
});

// Object.defineProperties(user,"fullname",{
//   get(){
//     return `${this.fname} ${this.lname}`;
//   },
//   set(value){
//     console.log("New Full Name:", value);
//   },
//   enumerable: true,
// configurable: true,
// });


console.log(user.age); // 23 

user.age = 24; 
console.log(user.age); // age update 24

console.log(user.secret); // 12345

console.log(user.fullName); 

user.fullName = "Ahmad Shaban";

console.log(Object.keys(user));

console.log(Object.getOwnPropertyDescriptors(user));