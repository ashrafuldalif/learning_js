// in this line there must not have any spaces in "input[name=email]"
const name = document.querySelector("input[name=email]");
name.addEventListener("change",ditect); 
function ditect(e){
    console.log("u are changed");
    console.log( "target = " + e.target);
    console.log( "vlaue = " + e.target.vlaue);
    console.log( "name = " + e.target.name);
    console.log( "id = " + e.target.id);
    console.log( "class = " + e.target.className);
}

var PLang= document.querySelectorAll(".PLang");

console.log(PLang);
var learnedLangs=[];
// we converted a nodelist to an array  
PLang=Array.from(PLang);
console.log(PLang);
var j=0
for(var i=0;i<6;i++){
    PLang[i].addEventListener('change',function(e){
        
        if (e.target.checked){
            console.log("checked");
            learnedLangs[j]=e.target.value;
            j++;
        }
        else if (!e.target.checked){
            console.log("unchacked");
    }
    });
}
var dep = document.querySelector(".depart");

    dep.addEventListener("change",e=>{
        var value=e.target.value
        console.log(e.target);
        console.log(value);
    })
    
