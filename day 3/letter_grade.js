// letter grade

// var mark =parseFloat(prompt("Enter your mark here : "));
function grade_ko(mark){
if (mark >100 || mark <=0){
console.log ("invalid mark brother");
}

 else if (mark >= 80 && mark <=100) {
    console.log("You got A+");
} 
else if (mark >=75 && mark <=79) {
    console.log(" You got A");
}
else if (mark >=70 && mark <=74) {
    console.log(" You got A-");
}
else if (mark >=65 && mark <=69) {
    console.log(" You got B+");
}
else if (mark >=60 && mark <=64) {
    console.log(" You got B");
}
else if (mark >=55 && mark <=59) {
    console.log(" You got B-");
}
else if (mark >=50 && mark <=54) {
    console.log(" You got C+");
}
else if (mark >=45 && mark <=49) {
    console.log(" You got C");
}
else if (mark >=40 && mark <=44) {
    console.log(" You got D");
}
else  {
    console.log(" SORRY dude you failed better try next time ");
}
}
var mark=46;
grade_ko (mark);