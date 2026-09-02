// // const product = {
// //   name: "Laptop",
// //   price: 100000
// // };

// // Object.freeze(product);


// // product.name = "MacBook";
// // product.price = 200000;
// // product.stock = 10;

// // delete product.name;

// // console.log(product);

// // console.log(Object.isFrozen(product));

// // console.log(
// //   Object.getOwnPropertyDescriptors(product)
// // );


// // const product = {
// //   name: "Laptop",
// //   price: 100000
// // };

// // Object.seal(product);

// // console.log(Object.isSealed(product));

// const normal = {
//   name: "Normal"
// };

// const prevented = {
//   name: "Prevented"
// };

// const sealed = {
//   name: "Sealed"
// };

// const frozen = {
//   name: "Frozen"
// };

// Object.preventExtensions(prevented);
// Object.seal(sealed);
// Object.freeze(frozen);

// console.log(Object.isSealed(normal));
// console.log(Object.isSealed(prevented));
// console.log(Object.isSealed(sealed));
// console.log(Object.isSealed(frozen));

// console.log(Object.isFrozen(normal));
// console.log(Object.isFrozen(prevented));
// console.log(Object.isFrozen(sealed));
// console.log(Object.isFrozen(frozen));

const entries = [
  ["name", "Misam"],
  ["age", 23],
  ["city", "Sahiwal"]
];

const result = Object.fromEntries(entries);
console.log(result);
