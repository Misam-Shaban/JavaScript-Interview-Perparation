// const user = {
//   name: "Misam"
// };

// console.log(Object.prototype.toString.call(user));


const user = {
  name: "Misam"
};

console.log(user.toString());
console.log(user.hasOwnProperty("toString"));

console.log("toString" in user);
console.log(
  Object.prototype.toString.call(user)
);

console.log(Object.prototype.toString.call([]));
console.log(Object.prototype.toString.call({}));
console.log(Object.prototype.toString.call(null));
console.log(Object.prototype.toString.call(undefined));