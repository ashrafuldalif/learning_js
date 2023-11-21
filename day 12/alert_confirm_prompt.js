
alert("error here go away");

function deletes(){
    let value=confirm("Do you sure you wanna to delete ? ")
    if(value){
        document.write("oh no all the important file is deleted now you are gone haha");
        console.log("confirm :: value is true ");
    }
    else{
        document.write("dont warry the file isnt deleted");
        console.log("confirm :: value is false");
    }
}
var h1=document.createElement("h1");
var text ,textNode;
function welcomeSms(){
    var name = prompt("whats your name ::  ");
    if(name==null || name ==""){
        text = "no name iz found so u r not welcome here !"
    }
    else{
    text="hello, "+name;
    }
    textNode=document.createTextNode(text);
    h1.appendChild(textNode);
    document.body.appendChild(h1);
}
welcomeSms();
deletes();
