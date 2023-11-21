// load , undload
// scroll 
// resize 
// toggle -> only works with ditails tag

window.addEventListener("load",()=>{console.log("the page is loaded")});

window.addEventListener("unload" ,()=>{console.log("unloaded but you cant see it")})

//  scroll can be used with document and also window

// window.addEventListener("scroll",()=>{console.log("you scrolled right now")})
document.addEventListener("scroll",()=>{console.log("you scrolled right now")})

window.addEventListener("resize",e=>{
var height=window.outerHeight;
var width=window.outerWidth;
    console.log(' you resized the page right now gocha ');

    console.log('and the size right now is hight '+height+"and width is "+width);
})

var details=document.querySelector("details");

details.addEventListener("toggle",e=>{
var on=e.target.open
if(on){
    console.log("the details is ON");
}
else if (!on){
    console.log("the details is OFF");
    
}
});