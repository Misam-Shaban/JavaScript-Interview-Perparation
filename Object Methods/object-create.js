const person= {
    greet(){
        console.log("Hello..");
    }
};

const student = Object.create(person);
// const student = Object.create(null);


console.log("Prototype",student);


