// splice() kya karta hai?

// splice() array ke andar se elements ko remove, add, ya replace karta hai.

// slice()  → copy nikalta hai, original array ko change nahi karta
// splice() → original array ko change karta hai

// // Practice 1
// const numbers = [10, 20, 30, 40, 50];

// const result = numbers.splice(2, 1);

// console.log(result); // [30]

// // Updated Array
// console.log(numbers); // [10, 20, 40, 50]

// Practice for Addition
// const numbers = [10, 20, 50, 60];

// const addition = numbers.splice(2, 0, 30, 40);

// // console.log(addition);
// console.log(numbers);

// // Practice for Replace

// const numbers = [10, 20, 30, 40, 50];

// const replce = numbers.splice(2, 1, 300);

// console.log(replce); // [30]
// console.log(numbers); // [ 10, 20, 300, 40, 50 ]

// Final Practice
const students = ["Ali", "Ahmed", "Sara", "Usman", "Ayesha"];

students.splice(2, 1, "Hina", "Fatima");

console.log(students);
