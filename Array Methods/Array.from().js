// Definition

// Array.from() kisi iterable ya array-like object se ek new Array create karta hai.

const text = "Hello";

const result = Array.from(text);

console.log(result);

const obj = {
  name: "Misam",
  greet() {
    console.log(this.name);
  },
};

obj.greet();
