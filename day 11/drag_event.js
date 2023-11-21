// dragstart
// drag
// dragend
// dragenter
// drag leave
// drag over
// drop

var pTag1=document.getElementById("pTag1");
var p1=document.getElementById("p1");
var div1=document.getElementById("one");


var ptag=[pTag1,pTag2,pTag3];
var ps=[p1,p2,p3];
var divs=[div1,div2,div3];


pTag1.addEventListener("dragstart",e=>{
    let temp =e.target.id;
    e.dataTransfer.setData("text",temp);
});

div1.addEventListener("dragover",e=>{
    e.preventDefault();
})
div1.addEventListener("drop",e=>{
    let id=e.dataTransfer.getData("text");
    let element = document.getElementById(id);
    p1.classList.add("hide")
    div1.classList.remove("hide")
    div1.appendChild(element);
    element.parentElement.classList.add("style")  
    e.preventDefault();
})
div1.addEventListener("dragleave",e=>{
    div1.classList.add("hide");
    console.log("dragleave");
})
p1.addEventListener("dragover",e=>{
    e.preventDefault();
})
p1.addEventListener("drop",e=>{
    let id=e.dataTransfer.getData("text");
    let element=document.getElementById(id);
    p1.appendChild(element)
    p1.classList.remove("hide");
})


var pTag2=document.getElementById("pTag2");
var p2=document.getElementById("p2");
var div2=document.getElementById("two");


pTag2.addEventListener("dragstart",e=>{
    let temp =e.target.id;
    e.dataTransfer.setData("text2",temp);
});

div2.addEventListener("dragover", e=>{
    e.preventDefault();
} )
p2.addEventListener("dragover", e=>{
    e.preventDefault();
} )

div2.addEventListener("drop",e=>{
    let id=e.dataTransfer.getData("text2");
    let element = document.getElementById(id);
    element.parentElement.classList.add("hide")
    div2.appendChild(element);
    element.parentElement.classList.add("style")
    element.parentElement.classList.remove("hide")
})

div2.addEventListener("dragleave",e=>{
    div2.classList.add("hide");
})
p2.addEventListener("drop",e=>{
    let id =e.dataTransfer.getData("text2");
    p2.appendChild(document.getElementById(id));
    p2.classList.remove("hide");
})


var pTag3=document.getElementById("pTag3");
var p3=document.getElementById("p3");
var div3=document.getElementById("three");


pTag3.addEventListener("dragstart",e=>{
    let temp =e.target.id;
    e.dataTransfer.setData("text3",temp);
});

div3.addEventListener("dragover", e=>{
    e.preventDefault();
} )
p3.addEventListener("dragover", e=>{
    e.preventDefault();
} )

div3.addEventListener("drop",e=>{
    let id=e.dataTransfer.getData("text3");
    let element = document.getElementById(id);
    element.parentElement.classList.add("hide")
    div3.appendChild(element);
    element.parentElement.classList.add("style")
    element.parentElement.classList.remove("hide")
})

div3.addEventListener("dragleave",e=>{
    div3.classList.add("hide");
})
p3.addEventListener("drop",e=>{
    let id =e.dataTransfer.getData("text3");
    p3.appendChild(document.getElementById(id));
    p3.classList.remove("hide");
})


