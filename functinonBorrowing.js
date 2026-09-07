const person1 = {
  name: "Ali",
  greet: function () {
    console.log(`Hi, I am ${this.name}`);
  },
};

person1.greet(); // "Hi, I am Ali" ✅ theek chal raha hai
