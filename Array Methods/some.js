// some() kya karta hai?

// some() check karta hai ke array mein kam az kam ek element condition ko satisfy karta hai ya nahi.

// const numbers = [5, 10, 15, 20, 25];

// const result = numbers.some((num) => {
//   return num > 30;
// });

// console.log(result);

const products = [
  { name: "Laptop", price: 100000 },
  { name: "Mouse", price: 2000 },
  { name: "Keyboard", price: 5000 },
  { name: "Monitor", price: 30000 },
];

const result = products.some((num) => {
  return num.price > 5000;
});

console.log(result);
