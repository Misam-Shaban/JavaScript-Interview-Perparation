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

// greet.call(student);

// function call method tells the this keyword that which object you have to access for data

const user1 = {
  name: "Misam",
  age: 23,
};

const user2 = {
  name: "Ahmed",
  age: 25,
};

function introduce(city, role) {
  console.log(`${this.name}, ${this.age}, ${city}, ${role}`);
}

introduce.call(user1, "Sahiwal", "Developer");
