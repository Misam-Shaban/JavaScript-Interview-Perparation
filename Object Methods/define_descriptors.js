const person = {
  fname: "Misam",
  lname: "Shaban"
};

Object.defineProperties(person, {
  age: {
    value: 23,
    writable: true,
    enumerable: true,
    configurable: true
  },

  secret: {
    value: "12345",
    writable: false,
    enumerable: false,
    configurable: false
  },

  fullName: {
    get() {
      return `${this.fname} ${this.lname}`;
    },

    set(value) {
      console.log("New Name:", value);
    },

    enumerable: true,
    configurable: true
  }
});


// const descriptor = console.log(Object.getOwnPropertyDescriptors(person));

// console.log(descriptor);

// console.log(getOwnPropertyDescriptor(person,"age"));
// console.log(getOwnPropertyDescriptor(person,"secret"));
// console.log(getOwnPropertyDescriptor(person,"fullName"));

// // console.log(Object.keys.secret(person));

// console.log(person.fullName);

console.log(Object.getOwnPropertyNames(person));



