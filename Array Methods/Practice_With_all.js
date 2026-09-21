// Use of Fillter Method
// const numbers = [10, 15, 20, 25, 30, 35];

// const result = numbers.filter((data) => {
//   return data > 20;
// });

// console.log(result);

// Use of Map Method

// const numbers = [5, 10, 15, 20, 25, 30];

// const result = numbers.map((elem) => {
//   return elem * 2;
// });

// console.log(result);

// const numbers = [5, 12, 18, 25, 30];

// const result = numbers.find((elem) => {
//   return elem > 20;
// });

// console.log(result);

// Use Of reduce

// const numbers = [10, 20, 30, 40, 50];

// const result = numbers.reduce((acc, num) => {
//   return acc + num;
// }, 0);

// console.log(result);

// Use Of Slice

// const numbers = [10, 20, 30, 40, 50, 60];

// const result = numbers.slice(2, 4);

// console.log(result);

const numbers = [10, 20, 30, 40, 50];

numbers.splice(2, 1, 300);

console.log(numbers);
