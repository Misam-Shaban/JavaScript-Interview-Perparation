// every() kya karta hai?

// every() check karta hai ke array ke saare elements given condition ko satisfy karte hain ya nahi.

// const numbers = [10, 20, 3, 40];

// const result = numbers.every((num) => {
//   return num > 5;
// });

// console.log(result);

// const numbers = [10, 20, 30, 40, 50];

// const result = numbers.every((num) => {
//   return num > 5;
// });

// console.log(result);

// const numbers = [10, 20, 3, 40, 50];

// const result = numbers.every((num) => {
//   return num > 5;
// });

// console.log(result);
// const students = [
//   { name: "Ali", marks: 80 },
//   { name: "Ahmed", marks: 75 },
//   { name: "Sara", marks: 90 },
//   { name: "Usman", marks: 65 },
// ];

// const result = students.every((number) => {
//   return number.marks > 70;
// });

// console.log(result);

const products = [
  { name: "Laptop", price: 100000 },
  { name: "Mouse", price: 2000 },
  { name: "Keyboard", price: 5000 },
  { name: "Monitor", price: 30000 },
];

const result = products.every((number) => {
  return number.price > 1000;
});

console.log(result);
