// "Binding" matlab kya hota hai?

// Binding ka matlab hai — this keyword kis object ko point kar raha hai,ye decide karna.
// JavaScript mein this ki value fix nahi hoti,
// ye is baat pe depend karti hai ke function ko kaise call kiya gaya.

// 1  Default Binding — normal function call
// 2  Implicit Binding — object.method() se call
// 3  Explicit Binding — call/apply/bind se manually set karna
// 4  New Binding — new keyword se

const student = {
  name: "Misam shaban",
};

function greet() {
  console.log(`My FullName is ${this.name}`);
}

greet.call(student);
