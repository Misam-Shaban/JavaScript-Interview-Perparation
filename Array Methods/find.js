// const numbers = [5, 12, 18, 25, 30];

// const res = numbers.find((data) => {
//   return data > 18;
// });

// console.log(res);

// const users = [
//   { name: "Ali", age: 17 },
//   { name: "Ahmed", age: 22 },
//   { name: "Sara", age: 19 },
//   { name: "Usman", age: 30 },
// ];

// const res = users.find((data) => {
//   return data.age > 30;
// });

// console.log(res);

const products = [
  { name: "Laptop", price: 100000 },
  { name: "Mouse", price: 2000 },
  { name: "Keyboard", price: 5000 },
  { name: "Monitor", price: 30000 },
];

const res = products.find((data) => {
  return data.price > 10000;
});

console.log(res);
