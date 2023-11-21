// copy
// cut
// paste

var input = document.querySelector('input');
var pTag = document.querySelector('p');
console.log(input);
console.log(pTag);
input.addEventListener("copy",e=>{
pTag.innerText="you copied the text from the input field";
})

input.addEventListener("cut",e=>{
pTag.innerText="you cuted the text from the input field";
})

input.addEventListener("paste",e=>{
pTag.innerText="you pasted the text from the input field";
})