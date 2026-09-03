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

const student = Object.create(person);

student.name = "Misam";

console.log(user.hasOwnProperty("name")); // ture 
console.log(user.hasOwnProperty("age")); // ture 
console.log(user.hasOwnProperty("city")); // false ku k property nested object ma ha 

console.log(Object.hasOwn(student, "name"));  



