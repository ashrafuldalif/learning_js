for(var i=0 ;i<3 ;i++){
document.querySelectorAll(".sounds")[i].addEventListener("click",function(){
  var text = this.innerHTML;

  console.log(text); // its just for testing

    playAudio(text);
    anime(text)
});
}
function playAudio(text){
switch (text) {
  case "konnichiwa":
    var audio = new Audio("sounds/Konichiwa.mp3");
    audio.play();
    break;
  case "arigatou":
    var audio = new Audio("sounds/arigatto.mp3");
    audio.play();
    break;
  case "pikachu":
    var audio = new Audio("sounds/Pikachu.mp3");
    audio.play();
    break;
}}


function anime(text){

    var ani = document.querySelector("."+text);
    ani.classList.add("anim");
setTimeout(() => {
    ani.classList.remove("anim");
}, 4000);

}