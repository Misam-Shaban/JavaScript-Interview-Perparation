// const arr = [10, 12, 13, 14, 15, 20, 25, 28, 29, 30];

// const result = arr.filter((num) => {
//   return num >= 20;
// });

// console.log(result);

// // Array mein se woh items nikalna jo kisi condition ko satisfy karte hain.

// // Yani filter() new array return karta hai, jisme sirf matching items hote hain.

// const numbers = [5, 12, 18, 3, 25, 7, 30];

// const ages = [12, 18, 25, 15, 30, 17, 40];

// const result = ages.filter((num) => {
//   return num >= 18;
// });

// console.log(result);

// const products = [
//   { name: "Laptop", price: 100000 },
//   { name: "Mouse", price: 2000 },
//   { name: "Keyboard", price: 5000 },
//   { name: "Monitor", price: 30000 },
// ];

// const result = products.filter((amount) => {
//   return amount.price > 5000;
// });

// console.log(result);

// const students = [
//   { name: "Ali", marks: 80 },
//   { name: "Ahmed", marks: 55 },
//   { name: "Sara", marks: 90 },
//   { name: "Usman", marks: 65 },
//   { name: "Ayesha", marks: 75 },
// ];

// const std = students.filter((stdMark) => {
//   return stdMark.marks > 70;
// });

// console.log(std);

// const users = [
//   { name: "Ali", age: 22, active: true },
//   { name: "Ahmed", age: 17, active: true },
//   { name: "Sara", age: 25, active: false },
//   { name: "Usman", age: 30, active: true },
//   { name: "Ayesha", age: 19, active: false },
// ];

// const result = users.filter((stdData) => {
//   return stdData.age >= 18 && stdData.active === true;
// });

// console.log(result);

const products = [
  { name: "Laptop", price: 100000, stock: 5 },
  { name: "Mouse", price: 2000, stock: 0 },
  { name: "Keyboard", price: 5000, stock: 10 },
  { name: "Monitor", price: 30000, stock: 3 },
  { name: "Headphones", price: 8000, stock: 0 },
];

const res = products.filter((find) => {
  return find.price >= 5000 && find.stock > 0;
});

console.log(res);
