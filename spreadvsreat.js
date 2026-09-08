// Rest With Object
const rest = {
  name: "Misam Shaban",
  city: "Sahiwal",
  address: "Cotton Station Sahiwal",
};

const { name, ...RestDe } = rest; // We Use Rest to Collect Values

// console.log(rest);
// console.log(RestDe);

const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

const [first, second, ...fruitsRest] = fruits;

console.log(first); // Apple

console.log(fruitsRest); // ["Mango", "Orange", "Grapes"]
