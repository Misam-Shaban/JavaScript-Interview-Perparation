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

// const names = ["Ali", "Ahmed", "Sara"];

// const result = Array.from(names, (value, index) => `${index} ${value}`);
// console.log(typeof result);
// console.log(result);

// const text = "HELLO";
// console.log(typeof text);
// const newText = Array.from(text);
// console.log(newText);
// console.log(typeof newText);

// const numbers = [1, 2, 3, 4, 5];

// const multi = Array.from(numbers, (num) => num ** 2); // ** Operator ko hum Square k liya use krty ha
// console.log(multi);

// const obj = {
//   0: 10,
//   1: 20,
//   2: 30,
//   length: 3,
// };

// const makeArr = Array.from(obj);

// console.log(makeArr);

// const names = ["Ali", "Ahmed", "Sara"];

// const result = Array.from(names, (value, index) => `${index} ${value}`);

// const arr = [1, 2, 3];

// const result = Array.from(arr);

// console.log(result === arr);

// false;
