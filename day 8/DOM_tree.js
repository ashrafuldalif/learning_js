var first = document.querySelector("#first")

// we can use the selected element instad o document it will search inside the selected element not the whole document

// var orderedList=first.querySelector("ol");


// select element by children operator_____________________________

var orderedList=first.children[0];
var ol2ndChild=orderedList.children[1];
ol2ndChild.innerHTML="TWO";

ol2ndChild.previousElementSibling.innerHTML="ONE"

ol2ndChild.nextElementSibling.innerHTML="THREE"



// select element by PARENT operator_____________________________

//here we select the first child in the list from the second div

var secDiv1stChild=document.querySelectorAll("#second ul li")[0];
secDiv1stChild.innerHTML="alu";

// then select the parent element of that element 

var secDivUl=secDiv1stChild.parentElement;
//again select the parent element
var secondDIv=secDivUl.parentElement
secondDIv.style.background="pink";
secondDIv.style.height="100px";
secondDIv.style.width="100px";
secondDIv.style.padding="5px";



























