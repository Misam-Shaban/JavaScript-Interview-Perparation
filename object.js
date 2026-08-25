const obj = {
    fname: "Misam",
    lname: "Shaban",
    age: 24,
    city: "Sahiwal",
    getFullname(){
        return `My Full Name is ${this.name} ${this.lname} `
    }
};

const obj1 = Object.create(obj) ;

console.log("First Object ", obj);

console.log("Second Object",obj1);

