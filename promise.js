
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
                  resolve("Success")
            }else{
                console.log("Data nh mila");
                reject("Data Not Found")
            }
        },2000)

    })
};

// getData().then((res)=>{
//     console.log("wait",res);
// }).catch((err)=>{
//     console.log("Sorry",err);
// }).finally(()=>{
//     console.log("Ya to hona he tha...");
// })



(async function handleData(){
    try{
        const respones = await getData();
        console.log("wait",respones);
    } catch(err){
        console.log("Rejected", err);
    } finally{
        console.log("Ya to hona he tha....");
    };
}()) // Here i use IFFES for Auto Call a function