// isPrototypeOf() check karta hai ke kya ek object doosre 
//object ki prototype chain mein mojood hai.


const person = {
    name: "Misam Shaban",
    city: "Sahiwal",
};

const student = Object.create(person);

console.log(person.isPrototypeOf(student));

