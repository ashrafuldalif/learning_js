var text = document.getElementById("text");
text.addEventListener("keydown", e=>{
    console.log("key down is ocured");
    if(e.repeat){
alert("dont press the same key you damn fool ")}
});
// text.addEventListener("keypress", ()=>{
//     console.log("keypress is ocured");
// });
text.addEventListener("keyup", e=>{
    console.log("keyup is ocured")
    console.log("e.key : "+e.key)
    // for asci code of the key 
    console.log('asci :'+e.keyCode)
    // for the key code from keyboard
    console.log("the key value form the keyboard : "+e.code)
    
if(e.shiftKey){
    console.log("shift+"+ e.key)
}

}); 
clear();