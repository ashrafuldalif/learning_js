var hour =document.getElementById("hour");
var min =document.getElementById("min");
var sec =document.getElementById("sec");
var DoN=document.getElementById("don")
var timeBtn=document.getElementById("clock_btn");
var Amout=document.getElementById("amOuter");
var ampm='am';
console.clear();

timeBtn.addEventListener("click",e=>{
Amout.classList.add('show');
    setInterval(() => {
            time();
        }, 1000);
    
});

function time(){
    let date= new Date;
    let Amin=date.getMinutes();
    let Asec=date.getSeconds();
    let Ahour=date.getHours();
    Amin=add0(Amin);
    Asec=add0(Asec);
    Ahour=setHours(Ahour);
    
    hour.innerHTML=Ahour;
    min.innerHTML=Amin;
    sec.innerHTML=Asec;
    DoN.innerHTML=ampm;
}


function add0(value){
    if(value<10){
        value="0"+value;
    }
    return value;
}

function setHours(value){
    if(value>12){
        ampm='pm';
        return value-12;
    }
}


var shour=document.getElementById("sh");
var smin=document.getElementById("sm");
var ssec=document.getElementById("ss");
var pause=document.getElementById("pause");
var play=document.getElementById("play");
var reset=document.getElementById("reset");
var second=0,minute=0,h=0;
var timer;

function setTimee(value) {
    if (value < 10) {
        value = "0" + value;
    } else if (value >= 59) {
        minute=-1;
        h++;
        h = add0(h);
        shour.innerHTML = h;
    }
    return value;
}

// function setHour(value){

// }
play.addEventListener("click",e=>{

    timer=setInterval(() => {
        if(second>60){
            second=0;
            minute+=1;
            smin.innerHTML=setTimee(minute);
        }
        second=add0(second);
        ssec.innerHTML=second;
        second++;
    }, 1000);
});

pause.addEventListener("click",()=>{
    clearInterval(timer);
});

reset.addEventListener("click",e=>{
    clearInterval(timer);
    second=0;
    minute=0;
    h=0;
    shour.innerHTML="";
    smin.innerHTML="";
    ssec.innerHTML="";
})