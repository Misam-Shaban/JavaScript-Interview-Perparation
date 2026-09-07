// Definition

// // Array.from() kisi iterable ya array-like object se ek new Array create karta hai.

// const text = "Hello";

// const result = Array.from(text);

// console.log(result);

// const obj = {
//   name: "Misam",
//   func: () => {
//     console.log(this.name);
//   },
// };

// obj.func();

// const str = "12345";
// const num = "12345";

// const result = Array.from(num);
// console.log(result);

// console.log(typeof result);

const names = ["Ali", "Ahmed", "Sara"];

const result = Array.from(names, (value, index) => `${index} ${value}`);
console.log(typeof result);
console.log(result);
