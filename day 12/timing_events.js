
var timer;
var save = document.querySelector(".timeoutBtn");
var start = document.querySelector(".start");
var sto0p = document.querySelector(".stop");
var ptag1 = document.querySelector(".tof");
var ptag2 = document.querySelector(".iof");
console.log(sto0p);
save.addEventListener("click",e=>{
    ptag1.innerText="the file is saved successfully "
    setTimeout(() => {
        ptag1.innerText="";
    }, 3000);
});

sto0p.addEventListener("click",e=>{
    clearInterval(timer);
})

start.addEventListener("click",e=>{
    var count=0;
    timer = setInterval(() => {
        ptag2.innerHTML = count;
    count++;
    e.DataTransfer.setData("sec", count);
    }, 1000);
});

