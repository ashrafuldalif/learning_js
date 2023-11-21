// length is used to count the leters in a string 

// var text = "ashraful-alif\n";
// // document.write("there are "+text.length+" letters in "+text );
// var len =text.length;

// document.write(len);

// var ans = prompt ("Enter your name : ");

// document.write ("Hi,"+ans+" your name have "+ans.length+" characters" ); 


var text = "ashraful-alif\n";
//document.write("There are " + text.length + " letters in " + text + "<br>");

var len = text.length;
document.write(len + "<br>");

var ans = prompt("Enter your name: ");
document.write("Hi, " + ans + ", your name has " + ans.length + " characters<br>");

// charAt is used to display only one character from the string using indexs
var text2 ="iluminati";
document.write(text2.charAt(6));

// toUpperCase() is used to convert into uppercase .
text2 = text2.toUpperCase();
document.write("<br> uppercase = "+text2);
// toLowerCase() is used to convert into lowercase .
text2 = text2.toLowerCase();
document.write( "<br> lowercase = "+text2);

var text2="i am to obak";
var embeOi =text2.slice(8,-1);
document.write("<br>" + embeOi);

// concat is used to combined two strings and store it in one string 

var firstName ='ashraful' ,lastName = ' alif';
var fullName =firstName.concat(lastName);

document.write("<br>" + fullName);
