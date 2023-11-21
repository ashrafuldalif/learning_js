// querySelector is can be used as a alternative to all of the selectors 
// replesement of getELemnetByid && getElementsByClassName && getElementsByTagName

// element by tag name
document.querySelector("h1").innerHTML="Best anime names in MY Oponion ...";

// element by id
document.querySelector("#op").innerHTML= "ONE PIECE (master piece)" ;

// element by clss
document.querySelector(".dbz").innerHTML="Dragon Ball Z (old master piece)"


//querySelectorAll is used to select all the elements at the same time and then use  index number to select a specific line like this
document.querySelectorAll("li")[2].innerText="Death Note ( short anime )"

document.querySelectorAll("li")[3].innerHTML="One Punch Man ( comedy )"
