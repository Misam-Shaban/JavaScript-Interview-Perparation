// function getJoke() {
//   fetch("https://v2.jokeapi.dev/joke/Any")
//     .then((response) => { // 'respones' ko 'response' kar diya
//       return response.json();
//     })
//     .then((newJoke) => {
//       console.log("data mil gya...");
//       console.log(newJoke);

//       console.log(newJoke.joke);
//     })
//     .catch((error) => {
//       console.log("Data nh mila...");
//       console.log(error); // Error dekhne ke liye isko add karna behtar hai
//     });
// }

// getJoke();



async function getJoke() {

    try{
        const response = await fetch("https://v2.jokeapi.dev/joke/Any");

    //     if (!respones.ok) {
    //   throw new Error("Failed to fetch users");
    console.log(response.body);
           const newJoke = await response.json();

           console.log("Data Mil gya...");
        //    console.log(newJoke.status);
           console.log(newJoke.joke);
           console.log(newJoke.setup);
           console.log(newJoke.delivery);
        //    console.log(newJoke.deliver);
    }catch(error){
        console.log("Data nh mila..");
    }
};
getJoke();