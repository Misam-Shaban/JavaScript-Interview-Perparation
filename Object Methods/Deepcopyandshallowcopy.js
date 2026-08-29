// const fuirtsArr1 = ["Apple", " Mango" , "Banana"];
// // const fuirtsArr2 = fuirtsArr1;

// // console.log(fuirtsArr1);




// // console.log(fuirtsArr2);

// const copyArr = [...fuirtsArr1];

// copyArr.push("Peach");
// copyArr.push("Orange");

// console.log(fuirtsArr1);
// console.log(copyArr);





// const userName1 = "Misam";

// let userName2 = userName1;

// userName2 = "Admad";
 
// // console.log(userName2);


// const obj1 = {
//      age: 24,
//     city: "Sahiwal",
//     name:"Misam Shaban"
// };

// let obj2 = {...obj1};

// obj2.address = "Cotton Research Staion";

// // obj2.push(["address:Sahiwal"])

// // const copyedObj = Object.assign(obj2,obj1);

// console.log(obj1);
// console.log(obj2);
// console.log(copyedObj);


const user = {
  name: "Misam",
  address: {
    city: "Sahiwal"
  }
};

const user2 = Object.assign({}, user);

console.log(user2);
