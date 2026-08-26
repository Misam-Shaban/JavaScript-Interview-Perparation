// // Question 1

// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = true;
//       if (data) {
//         console.log("Data successfully received");
//         resolve("Success");
//       } else {
//         console.log("Data Fetch nh howa");
//         reject("Data not Found");
//       }
//     }, 2000);
//   });
// }

// getData()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Promise Done");
//   });

//   Question 2

// function checkUser() {
//   return new Promise((resolve, reject) => {
//     const isLogedin = false;
//     if (isLogedin) {
//       // console.log("Data successfully received");
//       resolve("User logged in");
//     } else {
//       // console.log("Data Fetch nh howa");
//       reject("User not logged in");
//     }
//   });
// }

// checkUser()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log("invalid Password", err);
//   });


//   Question 3 

// function checkUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//     const isLogedin = false;
//     if (isLogedin) {
//       // console.log("Data successfully received");
//       resolve("User logged in");
//     } else {
//       // console.log("Data Fetch nh howa");
//       reject("invalid Pass");
//     }
//     },3000)
//   });
// }

// checkUser().catch((err)=>{
// console.log(err,"try with Right Pass");
// }).finally(()=>{
//     console.log("Process finished");
// })


// Question 4


