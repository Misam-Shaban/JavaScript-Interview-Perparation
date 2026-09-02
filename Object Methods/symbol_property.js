const id = Symbol("id");
const role = Symbol("role");

const user = {
  name: "Misam",
  age: 23
};

user[id] = 101;
user[role] = "Frontend Developer";


console.log(user);
console.log(Object.getOwnPropertyNames(user));
console.log(Object.getOwnPropertySymbols(user));
// const symbols = 
// console.log(symbols[0], symbols[1]);

console.log(Reflect.ownKeys(user));






