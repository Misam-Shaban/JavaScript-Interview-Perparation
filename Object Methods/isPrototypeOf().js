// isPrototypeOf() check karta hai ke kya ek object doosre 
//object ki prototype chain mein mojood hai.


const person = {
    name: "Misam Shaban",
    city: "Sahiwal",
    address:{
        add: "cotton Research Station Sahiwal",
    },
};

const student = Object.create(person);

console.log(person.isPrototypeOf(student));


// getPrototypeOf()
// → mujhe direct prototype do

// isPrototypeOf()
// → kya ye object doosre ki prototype chain mein hai?






