var buton= document.getElementById("hudai");
var origin= buton.getAttribute("data-orginal")
var firstH1= document.querySelectorAll("h1")[0];
// firstH1.innerHTML="chal be bosdike"
var secondH1= document.querySelectorAll("h1")[1];
var thirdH1= document.querySelectorAll("h1")[2];
var span =document.querySelectorAll("span")[0];
//just event and the function name nothing else needed

buton.addEventListener("click",sayhi);

function sayhi(){
alert("kiu be kutte bohat hasi a rahi hey");
    buton.innerHTML="Thank You";

    setTimeout(function () {
      // buton.innerHTML=origin;
        buton.innerHTML = "Tip Dee";
    }, 5000);
}

//mouseout and mouseover is just 2 parts of the hover property 

firstH1.addEventListener("mouseover",function(){

firstH1.classList.add("first-style");
});

firstH1.addEventListener("mouseout", function(){
    firstH1.classList.remove("first-style");
});
secondH1.addEventListener("mouseover",function (){
secondH1.classList.add("second-style");
});

secondH1.addEventListener("mouseout",function(){
    secondH1.classList.remove("second-style")
});
thirdH1.addEventListener("mouseover",function(){
    thirdH1.classList.add("third-style");
});
thirdH1.addEventListener("mouseout",function (){
    thirdH1.classList.remove("third-style");
});

function color(){
firstH1.classList.add("first-style");
secondH1.classList.add("second-style");
thirdH1.classList.add("third-style");

setTimeout (function(){
    firstH1.classList.remove("first-style");
    secondH1.classList.remove("second-style");
    thirdH1.classList.remove("third-style");
},5000);

}

