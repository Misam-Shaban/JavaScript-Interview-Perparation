// Simple Definition:
// Object.assign() ek ya multiple source objects ki 
// properties ko target object mein copy karta hai.

// Rule:
// Agar same property multiple sources mein ho, to baad 
// mein aane wali value previous value ko overwrite kar deti hai.


const obj1 = {
  name: "Misam",
  {
    age:18,
  },
};

// console.log(target);

const obj2 = {
  age: 23,
  city: "Sahiwal"
};

const obj3 ={
    address: "cotton research station sashiwal",
    Email: "misamshaban@gmail.com"
};

const newObj = Object.assign(obj1,obj2,obj3);
console.log("source one  ");
console.log(obj2);
console.log("source two");
console.log(obj3);

console.log("Target  ");
console.log(obj1);
// console.log(newObj);



// const user = {
//   name: "Misam",
//   address: {
//     city: "Sahiwal"
//   }
// };


// const user2 = Object.assign({}, user);



// let x = "Misam";
// let y = x;

// console.log(y);
// y = "Ahmad";
// console.log(y);

