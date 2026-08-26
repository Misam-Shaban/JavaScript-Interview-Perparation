function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data = true;
            if(data){
                 resolve("Success")
                console.log("Data successfully received");
            }else{
                console.log("Data Fetch nh howa");
                reject("Data not Found")
            }
        },2000)
       
    })
}

getData().then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("Promise Done");
})