// Simple Definition:
// Object.assign() ek ya multiple source objects ki 
// properties ko target object mein copy karta hai.

// Rule:
// Agar same property multiple sources mein ho, to baad 
// mein aane wali value previous value ko overwrite kar deti hai.


const target = {
  name: "Misam"
};

console.log(target);

const source = {
  age: 23,
  city: "Sahiwal"
};


const newObj = Object.assign(target,source)
console.log("T","",target);
console.log(newObj);
