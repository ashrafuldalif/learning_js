var ptag =document.getElementsByTagName("p")[0];
for (var i=0 ;i <3 ;i++){
    var butons=document.getElementsByClassName("B")[i];
    butons.addEventListener("click",function (){
        
        var name = this.innerHTML;
        ptag.innerHTML = " I am " + name; 
    });
}