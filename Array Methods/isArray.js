const a = [1, 2, 3];

const b = {
  0: 1,
  1: 2,
  length: 2
};

const c = "Hello";

const d = 100;

const e = [[1, 2], [3, 4]];

console.log(Array.isArray(a)); //ture
console.log(Array.isArray(b)); // false
console.log(Array.isArray(c)); // false
console.log(Array.isArray(d)); // false
console.log(Array.isArray(e)); // ture
console.log(Array.isArray(e[0])); // ture

console.log(typeof a); // object

console.log(Array.isArray(a)); // ture

// isArray() Check krta ha Array ha ya nh ha 