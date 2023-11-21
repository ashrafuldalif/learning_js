var buton=document.querySelectorAll(".button");
var audio;
for (var i=0; i<3;i++){
    buton[i].addEventListener("click",function (){
        var text =this.innerHTML;
        playAudio(text);
        addStyle(text);
    });
}

document.addEventListener("keyup",function(event){
    var text = event.key;
        playAudio(text);
        addStyle(text);
});


function addStyle(text){
    var select=document.querySelector('.'+text)
    select.classList.add("s");
    setTimeout(() => {
        select.classList.remove("s");
        
    }, 2000);


}

function playAudio(a){
    switch (a) {
    case "a":
        audio= new Audio("sounds/sound-14.mp3");
        audio.play();
    break;
    case "b":
        audio= new Audio ("sounds/sound-16.mp3");
        audio.play();
    break;
    case "c":
        audio= new Audio ("sounds/sound-6.mp3");
        audio.play();
    break;
    }
}