// const prices = [100, 250, 500, 750, 1000];

// const newPrice = prices.map((number) => {
//   return number + (number * 10) / 100;
// });

// console.log(newPrice);

// Question 2 add 15% Discount in price with map()

// const products = [
//   { name: "Laptop", price: 100000 },
//   { name: "Mouse", price: 2000 },
//   { name: "Keyboard", price: 5000 },
// ];

// const disPrice = products.map((product) => ({
//   originalPrice: product.price,
//   name: product.name,
//   discountedPrice: product.price - (product.price * 15) / 100,
// }));

// console.log(disPrice);

// Question #3 map() use karke har student ke object mein ek nayi property status add karo.

// const students = [
//   { name: "Ali", marks: 80 },
//   { name: "Ahmed", marks: 65 },
//   { name: "Sara", marks: 90 },
//   { name: "Usman", marks: 55 },
// ];

// const stdStatus = students.map((res) => {
//   return {
//     ...res,
//     status: res.marks >= 70 ? "Pass" : "Fail",
//   };
// });

// console.log(stdStatus);

const products = [
  { name: "Laptop", price: 100000 },
  { name: "Mouse", price: 2000 },
  { name: "Keyboard", price: 5000 },
];

const newPrice = products.map((res) => {
  return {
    ...res,
    category: res.price >= 50000 ? "Expensive" : "Affordable",
  };
});

console.log(newPrice);
