// Error handling -> try , catch ,finally , throw
const froom=document.querySelector("form");
const enter=froom.children[0].children[2];
const answer=froom.children[0].children[3];

enter.addEventListener("click",e=>{

    e.preventDefault();
    var toke = froom.children[0].children[1].value;
    try{
        console.log("try is runned");
        var temp=Number(toke)%2==0?"Even" : "Odd";
        answer.innerHTML=toke+" is an "+temp+" number";
        if(toke.trim()=='') {throw ("there is nothing in the box O_O")}
        if(isNaN(toke)) {throw  ("Its not a number you dumb ass")}
        if(toke>100) {throw ("is too big")}
        if(toke<50) {throw ("is too small")}
    }catch(err){
        console.log("catch is runned");
        answer.innerHTML=toke+" "+err;
    }finally{
        console.log("finaly is runned");
        toke.innerHTML="";
    }
})

// console.log("hello there ");
// try {
//     console.log("inside the try ");
//     console.log("the line before the error in try");
//     console.log(ab);
//     console.log("the line after the error in try");
    
// } catch (err) {    
//     console.log("inside the catch ");
//     console.log("the error iz "+err);
//     console.log("the error name iz "+err.name);
//     console.log("the error SMS iz "+err.message);
// }finally{
//     console.log("finally to always e kam kore heh eta koa lage ");
// }

