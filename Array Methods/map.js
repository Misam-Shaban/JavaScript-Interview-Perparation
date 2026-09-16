// const prices = [100, 250, 500, 750, 1000];

// const newPrice = prices.map((number) => {
//   return number + (number * 10) / 100;
// });

// console.log(newPrice);

// Question 2 add 15% Discount in price with map()

const products = [
  { name: "Laptop", price: 100000 },
  { name: "Mouse", price: 2000 },
  { name: "Keyboard", price: 5000 },
];

const disPrice = products.map((product) => ({
  originalPrice: product.price,
  name: product.name,
  discountedPrice: product.price - (product.price * 15) / 100,
}));

console.log(disPrice);

// const newPrice = disPrice[0].price;

// const newDisPrice = newPrice - (newPrice * 15) / 100;

// console.log("first Obj Dis Price", newDisPrice);

// console.log(disPrice[0].price);
