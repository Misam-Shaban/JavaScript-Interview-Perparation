
// const obj1  = {
//     name: "Misam Shaban", 
//     age: 23,
// };

// // const firstCopy = {...obj1};
// // firstCopy.city = "Sahiwal"; 
// // console.log(firstCopy);


// // Shallow Copy 

// const obj2={
//      name: "Misam Shaban", 
//     age: 23,
//     address:{
//         city: "Sahiwal",
//     },
// }

// console.log(obj2.address);

// const secendCopy = {...obj2};
// secendCopy.fatherName = "Shaban";
// // console.log(obj2);

// secendCopy.address.study = "BSCS";
// // console.log(secendCopy);


// // Deep Copy 

// const deepCopy = JSON.parse(JSON.stringify(obj2));

// deepCopy.address.id = 210410014;
// console.log(deepCopy);
// console.log(obj2);



// Shllow Copy Practice


// const user = {
//   name: "Misam",
//   age: 23
// };

// const details = {
//   city: "Sahiwal",
//   country: "Pakistan"
// };

// const copy = Object.assign(details,user);

// console.log(copy);


// const copy1 = Object.assign({},user,details);
// console.log(copy1);


// const obj1 = {
//   name: "Misam",
//   age: 23,
//   city: "Sahiwal"
// };

// const obj2 = {
//   age: 24,
//   city: "Lahore"
// };


// const margeObj = Object.assign({},obj1,obj2);
// console.log(margeObj);


const obj1 = {
  name: "Ali",
  age: 20
};

const obj2 = {
  age: 25,
  city: "Lahore"
};

const result = Object.assign({}, obj1, obj2);

console.log(result);
console.log(obj1);
console.log(obj2);