let obj = {
    name: "misam",
    fullname:  'Misam Shaban',
    city: "Sahiwal",
    age:25,
   getFulldata(){
    console.log("My full name is", this.fullname ,"and age is ", this.age, "and i lived in", this.city);
   }
}

obj.getFulldata();