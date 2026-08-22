

// What is Hoisting?

// Hoisting is Js behavior where all variable and function
// declaration move at the top of their scope During memory Creation Phase...



// console.log(b);
// // var b = 10;

// output: This will give You undefined Due to Hoisting


// console.log(a); 
// let a = 10; 
// a = 20;

// output: This will give You Error: Variable not define Due to Hoisting


// console.log(x); 

// const x = 15; 

// console.log(x);

// output: This will give You Error: Variable not define Due to Hoisting


greet();

// console.log(a);

function greet(){
    console.log("Function Run Due to Hoisting");
};

// greet();


// Hoisting Arrow Function Work nh krti

greet1();

const greet1 = ()=>{
  console.log("Hi..");
}



