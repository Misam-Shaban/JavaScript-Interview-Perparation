
//         const isgetData = true;
//         if(isgetData){
//             console.log("Data Mil gya....");
//         }else{
//             console.log("Data nh mila...");
//         }
//         },2000)
//         resolve("Success");
//     });
// };

// getData();

// .then((data)=>{
//     console.log("Good",data);
// })
// .catch((data)=>{
//     console.log("Sorry",data);  
// });





function getData(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            const data = true;
            if(data){
                console.log("Data Mil gya...");
                  resolve("Promise Data Mil jyn ga")
            }else{
                console.log("Data nh mila");
                reject("No")
            }
        },2000)

    })
};

getData().then((res)=>{
    console.log("wait",res);
}).catch((err)=>{
    console.log("Sorry",err);
}).finally(()=>{
    console.log("Ya to hona he tha...");
})



// function run(){
//     try{
//         const res = getData();
//         console.log("wait", res);
        
//     } catch(err){

//     }
// }