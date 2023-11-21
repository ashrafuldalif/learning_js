// select elements by tag name

document.getElementsByTagName("h1")[0].innerHTML="HOLA";

// select elements by id
document.getElementById("quistion").innerHTML="whats your name?";

// select elements by id
document.getElementsByClassName("qsn")[0].innerHTML="whats your age?";


// we can store the getelements line in a variable and use it multiple times by using the variable name .

var elementByTag=document.getElementsByTagName("div a")[0];
elementByTag.innerHTML = "SO WHAT ...!";
//IT CAN BE USED WITH  ALL OF THE SELECTORS
var elemnetBId = document.getElementById("quistion");
var elementBClass=document.getElementsByClassName("qsn")[0];