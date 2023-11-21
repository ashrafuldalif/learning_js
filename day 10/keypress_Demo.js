var press= document.getElementById("press");
var up= document.getElementById("up");
var down= document.getElementById("down");
var area=document.getElementById("textarea");
var character = document.getElementById("characters");

document.addEventListener("keypress",function (event){
    var text=event.key;
    press.innerHTML = "keypressed = "+text;
});


document.addEventListener("keyup",function (event){
    text =event.key;
    up.innerHTML="keyup = " + text;
});

document.addEventListener("keydown", function (event){
    text =event.key;
    down.innerHTML = "keydown = "+text;
});

area.addEventListener("keypress",function (u){
    let count= area.value.length+1;
    character.innerHTML="there are "+count+" characters in total ";
    });