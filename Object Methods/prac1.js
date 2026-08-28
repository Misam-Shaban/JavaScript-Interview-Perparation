const student = {
  name: "Misam",
  age: 23,
  course: "BSCS",
  city: "Sahiwal",
  university: "VU"
};


const studentValues = Object.values(student);
console.log(studentValues);
console.log(studentValues.length);
console.log(studentValues[2]);

for(const values of studentValues){
    console.log(values);
}

console.log(studentValues.includes("BSCS"));

// With ForEach Loop

const studentValues1 = Object.values(student);

studentValues1.forEach((value)=>{
    console.log(value);
});

