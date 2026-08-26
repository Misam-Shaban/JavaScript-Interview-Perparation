function getJoke() {
  fetch("https://v2.jokeapi.dev/joke/Any")
    .then((response) => { // 'respones' ko 'response' kar diya
      return response.json();
    })
    .then((newJoke) => {
      console.log("data mil gya...");
      console.log(newJoke.joke);
    })
    .catch((error) => {
      console.log("Data nh mila...");
      console.log(error); // Error dekhne ke liye isko add karna behtar hai
    });
}

getJoke();