function getJoke() {
  fetch("https://official-joke-api.appspot.com/")
    .then((respones) => {
      return respones.json();
    }).then((newJoke)=>{
        console.log(newJoke);
    })
    .catch((error) => {
      console.log("Data nh mila...");
    });
}
