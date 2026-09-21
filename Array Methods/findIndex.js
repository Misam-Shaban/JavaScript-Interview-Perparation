// findIndex() kya karta hai?

// findIndex() array mein pehle element ka index return karta hai jo condition satisfy kare.
// find()       → actual element return karta hai
// findIndex()  → us element ka index return karta hai

// const numbers = [5, 10, 15, 20, 25];

// const result = numbers.findIndex((num) => {
//   return num > 18;
// });

// console.log(result);

// const products = [
//   { name: "Laptop", price: 100000 },
//   { name: "Mouse", price: 2000 },
//   { name: "Keyboard", price: 5000 },
//   { name: "Monitor", price: 30000 },
// ];

// const result = products.findIndex((num) => {
//   return num.price > 10000;
// });

// console.log(result);

const students = [
  { name: "Ali", marks: 55 },
  { name: "Ahmed", marks: 60 },
  { name: "Sara", marks: 72 },
  { name: "Usman", marks: 80 },
];

const result = students.findIndex((num) => {
  return num.marks > 70;
});

console.log(result);
