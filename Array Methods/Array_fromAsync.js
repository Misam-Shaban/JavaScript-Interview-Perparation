// Array.fromAsync() ka main purpose hai:

// Aisi cheez jahan values ek-ek karke asynchronously mil rahi hon, un sab ko ek Array mein collect karna.

let arr = [1, 2, 3, 4, 5];

for (let v of arr) {
  v.pop();
}

console.log(v);
