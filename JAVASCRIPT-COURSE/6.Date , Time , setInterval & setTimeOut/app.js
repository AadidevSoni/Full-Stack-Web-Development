const currentDate = new Date();
console.log(currentDate); 

//year,month,day,hr,min,sec,ms

const newDate = new Date(2025,6,10,12,0,0,0);
console.log(newDate);

//getDates
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const hr = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();
console.log(year + " year");
console.log(month + " month");
console.log(day + " Day");
console.log(hr) + " hr";
console.log(min + " min");
console.log(sec + " sec");

//toString
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleDateString());


//setDate
date.setDate(date.getDate() + 1);
console.log(date);

//setInterval
//setInterval(() => console.log("This function will be executed every 2 seconds"),  2000);

let i = 0;
function number() {
  i++;
  console.log(i);
}
const intervalID = setInterval(number,2000);

//setTimeOut  
setTimeout(function() {
  console.log("This function will be executed after 4 seconds");
},4000);

//Stop the execution after 6 seconds
setTimeout(function() {
  clearInterval(intervalID);
  console.log("Execution Stopped");
},6000)
  
