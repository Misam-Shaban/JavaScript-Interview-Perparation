// const student = {
//     greet(){
//         console.log("Hello...");
//     }
// };

// Object.defineProperty(student, "name", {
//   value: "Misam",
//   writable: true,
//   enumerable: true,
//   configurable: true
// });

// console.log(student);



const user ={
     fname: "Misam",
     lname: "Shaban"
};

Object.defineProperty(user,"fullname", {
get(){
    return `${user.fname} ${user.lname}`;    
}
});

console.log(user.fullname);

