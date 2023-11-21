var divs =document.querySelectorAll(".divs");
// divs= Array.from(divs);
// console.log(divs)
for (var i=0;i<8;i++){
    divs[i].addEventListener("click",()=>{
        var audio= new Audio ("sound-14.mp3");
        audio.play();
    })
}

var Click=document.querySelector("#click");
var dblclick=document.querySelector("#dblclick");
var mouseDown=document.querySelector("#mouseDown");
var mouseUp=document.querySelector("#mouseUp");
var mouseEnter=document.querySelector("#mouseEnter");
var mouseleave =document.querySelector("#mouseLeave");
var mouseMove =document.querySelector("#mouseMove");
var mouseOver=document.querySelector("#mouseOver");
var back= document.querySelectorAll(".hide");
Click.addEventListener("click",()=>{
hidandsik(0,Click);
});
dblclick.addEventListener("dblclick",()=>{
hidandsik(1,dblclick);
});
mouseDown.addEventListener("mousedown",()=>{
hidandsik(2,mouseDown);
});
mouseUp.addEventListener("mouseup",()=>{
hidandsik(3,mouseUp);
});
mouseEnter.addEventListener("mouseenter",()=>{
hidandsik(4,mouseEnter);
});
mouseleave.addEventListener("mouseleave",()=>{
hidandsik(5,mouseleave);
});
mouseMove.addEventListener("mousemove",()=>{
hidandsik(6,mouseMove);
});
mouseOver.addEventListener("mouseover",()=>{
hidandsik(7,mouseOver);
});

function hidandsik(i,fun){
    back[i].classList.add("bc");
    fun.classList.add("op");
    
    setTimeout(() => {
        back[i].classList.remove("bc");
        fun.classList.remove("op");
    }, 6000);
}