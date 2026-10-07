const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const today = new Date();
const liveTime = today.toLocaleTimeString();
const dayName = days[today.getDay()];
console.log(`Today is : ${dayName}`);
console.log(`Current time is: ${liveTime.toUpperCase()}`);
