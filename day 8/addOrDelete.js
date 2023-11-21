// this is the FINDING process

var findAdd=document.getElementById("adding");
var findDel = document.getElementById("deleting");

//this is the ADDING  process
var CrElement1=document.createElement("p");
var text =document.createTextNode("This is the new created text by JS");
CrElement1.appendChild(text);
findAdd.appendChild(CrElement1);

// by default it adds itself in the last line but we can add a line as we pleased.

// first of all we need to locate the sentence which will be the second sentence for the new created sentence

var sentence =document.querySelectorAll("p")[2]
var newSentence=document.createElement("p")
var texts=document.createTextNode("new created line which is not in the END of the DIV as usual")
newSentence.appendChild(texts);
findAdd.insertBefore(newSentence,sentence)
newSentence.style.fontSize="1.4rem";


// this is the DELETING process
    var delPTag=document.querySelectorAll("#deleting p")[1];
findDel.removeChild(delPTag);

// we can use any style by JS but at first we need to find the element 

var newElement=document.querySelectorAll("p")[4]
newElement.style.fontSize ="2rem";
newElement.style.margin ="20px";

// we can change the value of href (link) by JS 

var aTag=document.querySelectorAll("a")[0]
aTag.href ="https:/www.youtube.com";

// and also 
//if there are two words you must follow camelcase not hifen like CSS.

aTag.innerHTML="YOU_____TUBE";

aTag.style.textDecoration="none";
aTag.style.color="red";
aTag.style.fontWeight="900";
aTag.style.fontSize="1.3rem";
aTag.style.marginLeft="25px"


var com=document.querySelectorAll("p")[6]

com.style.fontSize="1.3rem";

