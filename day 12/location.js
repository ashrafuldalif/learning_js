var div=document.getElementById("location");
var pS=div.querySelectorAll("p");
var visit=document.querySelector("#visit");

pS[0].innerHTML="href : "+location.href;
pS[1].innerHTML="protocol : "+location.protocol;
pS[2].innerHTML="hostname : "+location.hostname;
pS[3].innerHTML="port : "+location.port;
pS[4].innerHTML="pathname : "+location.pathname;

visit.addEventListener("click",e=>{
location.assign("https://www.instagram.com");
}); 