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


// Question 4 Promise Chaining

// getUser Function
function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
    const user = true;
    if (user) {
      // console.log("Data successfully received");
      resolve("User mil gya");
    } else {
      // console.log("Data Fetch nh howa");
      reject("User nh mila");
    }
    },3000)
  });
}

// getProfiles Function

function getProfile() {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
    const profile = true;
    if (profile) {
      // console.log("Data successfully received");
      resolve("Profile mil gya");
    } else {
      // console.log("Data Fetch nh howa");
      reject("Profile nh mila");
    }
    },3000)
  });
}


// getPost Function

function getPost() {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
    const post = true;
    if (post) {
      // console.log("Data successfully received");
      resolve("post mil gya");
    } else {
      // console.log("Data Fetch nh howa");
      reject("post nh mila");
    }
    },3000)
  });
}


