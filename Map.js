// const map = new Map();

// map.set("name","Msiam shanan");
// map.set("city","Sahiwal");
// map.set("name", "Ahmed");

// // map.clear(); // use to remove all data

// console.log(map.get("name")); //get value return krta ha key ki
// console.log(map.size);

// console.log(map.has("city"));

// const map = new Map();

// map.set("name", "Ali");
// map.set("age", 23);
// map.set("name", "Ahmed");

// console.log(map.get("name"));
// console.log(map.size);
// console.log(map);

// const map = new Map();

// map.set({ id: 1 }, "Ali");

// console.log(map.get({ id: 1 }));

// let obj = {
//   name: "Misam",
//   fullName: "Misam Shaban",
//   address: {
//     city: "Sahiwal",
//     home: "Cotton Research Station Sahiwal",
//   },
//   email: {
//     emailAddress: "maysamshaban789@gmail.com",
//   },
// };

// console.log(obj);

// for (let [key, value] in Object.entries(obj)) {
//   console.log(key, value);
// }

// Map banana
// const student = new Map();

// // values add karna -> set() method
// student.set("name", "Ali");
// student.set("age", 20);
// student.set(true, "isStudent"); // key boolean bhi ho sakti hai!

// // value nikalna -> get() method
// console.log(student.get("name")); // "Ali"

// // size check karna
// console.log(student.size); // 3

// // check karna key hai ya nahi
// console.log(student.has("age")); // true

// // delete karna
// student.delete("age");

// // loop chalana
// for (let [key, value] of student) {
//   console.log(key, value);
// }

const arr = ["Misam", "Shaban", "Ahmad", "Ali"];

arr.map((data) => {
  console.log(data);
});
