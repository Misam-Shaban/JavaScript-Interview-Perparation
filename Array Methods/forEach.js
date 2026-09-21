// const fruits = ["Apple", "Banana", "Mango", "Orange"];

// const result = fruits.forEach((fruit) => {
//   console.log(fruit);
// });
// const numbers = [10, 20, 30, 40];

// numbers.forEach((num) => {
//   console.log(num ** 2);
// });

// const students = ["Ali", "Ahmed", "Sara", "Usman"];

// students.forEach((data, dataIndex) => {
//   console.log(`Student ${dataIndex + 1}: ${data}`);
// });

// const products = [
//   { name: "Laptop", price: 100000 },
//   { name: "Mouse", price: 2000 },
//   { name: "Keyboard", price: 5000 },
// ];

// products.forEach((properties) => {
//   console.log(`${properties.name}: ${properties.price} `);
// });

const products = [
  { name: "Laptop", price: 100000 },
  { name: "Mouse", price: 2000 },
  { name: "Keyboard", price: 5000 },
  { name: "Monitor", price: 30000 },
];

products.forEach((checkPrice) => {
  if (checkPrice.price > 10000) {
    console.log(`${checkPrice.name}: ${checkPrice.price}`);
  }
});
