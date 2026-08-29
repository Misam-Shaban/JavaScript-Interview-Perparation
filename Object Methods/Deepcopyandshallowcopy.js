const fuirtsArr1 = ["Apple", " Mango" , "Banana"];
const fuirtsArr2 = fuirtsArr1;

// console.log(fuirtsArr1);

fuirtsArr2.push("Peach");

// console.log(fuirtsArr2);


const userName1 = "Misam";

let userName2 = userName1;

userName2 = "Admad";
 
console.log(userName2);


const obj1 = {
     age: 24,
    city: "Sahiwal",
    name:"Misam Shaban"
};


const obj2 = {}


const copyedObj = Object.assign(obj2,obj1);

console.log(obj1);
console.log(obj2);
console.log(copyedObj);


