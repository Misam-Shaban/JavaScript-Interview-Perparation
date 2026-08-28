// const student = {
//   name: "Misam",
//   age: 23,
//   course: "BSCS"
// };

// const entries = Object.entries(student);

// console.log(entries);


// for (const arrOn of entries ){
//     console.log("arr",arrOn);
// }

// // Without destructuring

// for( const entry of entries ){
//     console.log(entry[0], ":", entry[1] );
    
// }

// // Destructuring

// for (const [key,value] of entries ){
//     console.log(key, ":" , value);
// }

// console.log("      ");


// const product = {
//   name: "Laptop",
//   price: 100000,
//   brand: "HP",
//   stock: 10
// };

// for (const [key, value] of Object.entries(product)) {
//   console.log(`${key}: ${value}`);
// }




const employee = {
  name: "Misam",
  age: 23,
  position: "Frontend Developer",
  city: "Sahiwal"
};


const employeeEntries =  Object.entries(employee);

console.log(employeeEntries);
console.log(employeeEntries.length);


