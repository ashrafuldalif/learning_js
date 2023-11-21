console.log("I am hoob d noor");
document.write("<h1>i am asharaful</h1>");
alert("get out");

var name,age,country ;
name="ashraful"; 
age =21;
country="Bangladesh";
// document.write(name,age,country);
document.write("name = " + name);
document.write("<br>");
document.write("age = "+age);
document.write("<br>");
document.write("country = "+country);

// number to string
var num =90;
console.log(typeof (num));
num=toString(num)
console.log(typeof (num));

// string to Number
var stringNumber ="45";
console.log(typeof (stringNumber));
stringNumber=parseInt(stringNumber);
console.log(typeof (stringNumber));

// string to float/number
var stringNumber ="45.456";
console.log(typeof (stringNumber));
stringNumber=parseFloat(stringNumber);
console.log(typeof (stringNumber));

//   tofixed is used to say the consol how many 
// dosomin number you want to see
var number =3.2987;
console.log(number.toFixed(2));
// toPrecision is used to say the console how many numbers you wanna see in total
console.log(number.toPrecision(3));

// Number is used to convert anything into number 
console.log(Number(" 1323"));
console.log(Number(true));
console.log(Number("apple"));
console.log(Number("0.123"));
