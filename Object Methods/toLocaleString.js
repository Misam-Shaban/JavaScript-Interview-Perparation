// Simple definition:

// toLocaleString() kisi value ko user's locale/language/region 
// ke rules ke mutabiq string representation mein convert karta hai.

// Sabse important baat: iska exact output object/value ke
//  type aur locale par depend karta hai.


const price = 1000000;

console.log(price.toLocaleString());


// What is the difference between toString() and toLocaleString()?

// toString() gives a general string representation, while toLocaleString() 
// is intended to provide a locale-sensitive representation. For plain objects,
//  Object.prototype.toLocaleString() typically delegates to toString(), 
// while types such as Number and Date provide more useful locale-aware formatting.

// valueOf()

// Simple definition:

// valueOf() kisi object ki primitive/value 
// representation return karne ke liye hota hai.


const user = {
  name: "Misam",
  age: 23,
};

console.log(user.valueOf());
console.log(user.valueOf() === user);

console.log(user.toString());
console.log(user.valueOf());

// valueOf() {
//   return this.age;
// }
// console.log(user.valueOf());

