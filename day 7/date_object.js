var date= new Date();
console.log(date);
var year =date.getFullYear();
console.log("year    :   "+year);
var month=date.getMonth();
month+=1;
console.log("month    :   "+month);
var day=date.getDate();
console.log("day    :   "+day);
var  weekDay=date.getDay();
weekDay =weekDay == 0? "Sunday": weekDay == 1?  "Monday": weekDay == 2? "Tuesday" :weekDay == 3 ? "Wednesday" : weekDay== 4 ?"Thursday":weekDay==5 ?"Friday": "Saturday";
 console.log("weekDay    :   " + weekDay);

var hour=date.getHours();
console.log("hour    :   "+hour);
var min=date.getMinutes();
console.log("min    :   "+min);
var second=date.getSeconds();
console.log("second    :   "+second);
var time=date.getTime();
console.log("time    :   "+time);













