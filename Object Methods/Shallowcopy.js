
const obj1  = {
    name: "Misam Shaban", 
    age: 23,
};

// const firstCopy = {...obj1};
// firstCopy.city = "Sahiwal"; 
// console.log(firstCopy);


const obj2={
     name: "Misam Shaban", 
    age: 23,
    address:{
        city: "Sahiwal",
    },
}

console.log(obj2.address);

const secendCopy = {...obj2};
secendCopy.fatherName = "Shaban";
console.log(obj2);

secendCopy.address.study = "BSCS";
console.log(secendCopy);
