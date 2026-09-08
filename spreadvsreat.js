// // Rest With Object
// const rest = {
//   name: "Misam Shaban",
//   city: "Sahiwal",
//   address: "Cotton Station Sahiwal",
// };

// const { name, ...RestDe } = rest; // We Use Rest to Collect Values

// // console.log(rest);
// // console.log(RestDe);

// const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

// const [first, second, ...fruitsRest] = fruits;

// console.log(first); // Apple

// console.log(fruitsRest); // ["Mango", "Orange", "Grapes"]

// function RstFunc(firstNum, ...RestNum) {
//   return console.log(firstNum + RestNum); //55
// }

// RstFunc(5, 5);

// SPREAD OPERATOR

// const arr = [1, 2, 3];

// console.log(...arr);

// const fruits = ["Apple", "Banana"];
// const vegetables = ["Potato", "Tomato"];

// // Dono arrays ko khol kar ek naye array me daal diya
// const food = [...fruits, ...vegetables];
// console.log(food); // Output: ["Apple", "Banana", "Potato", "Tomato"]

// const obj = {
//   name: "Misam Shaban",
//   city: "Sahiwal",
//   address: "Cotton Station Sahiwal",
// };

// const newObj = { ...obj, city: Lahore };

// console.log(newObj);

const num = 10;
const num1 = "10";

console.log(typeof num1);

console.log(num == num1); //
console.log(typeof num1);

console.log(num === num1);
console.log(typeof num1);
