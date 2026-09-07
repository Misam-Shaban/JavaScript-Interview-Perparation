const person1 = {
  name: "Ali",
  greet: function () {
    console.log(`Hi, I am ${this.name}`);
  },
};

person1.greet(); // "Hi, I am Ali" ✅ theek chal raha hai

const person2 = {
  name: "Sara",
  // greet function nahi hai is object mein
};

// person1 ka greet function, person2 ke liye "borrow" kar rahe hain
person1.greet.call(person2); // "Hi, I am Sara"
