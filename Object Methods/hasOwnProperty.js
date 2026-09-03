// hasOwnPorperty methods Check krta ha 
// k ya property object ki own property ha ya nh 

// Kya ye property directly object ki own property hai?

const user = {
  name: "Misam",
  age: 23,
  address:{
    city: "Sahiwal",
  },
};

console.log(user.hasOwnProperty("name"));
console.log(user.hasOwnProperty("age"));
console.log(user.hasOwnProperty("city"));

