// 1. blur
// 2. focus
// 3. focusin
// 4. focusout

    var input= document.querySelector("#hudai");
console.log(input)
    input.addEventListener("blur",e=>{
        console.log("blur is occured 3");
        input.value=e.target.value.toUpperCase();
        input.style.padding = "1rem";
        input.style.fontSize = "1rem";
    })

    input.addEventListener("focus",()=>{
        console.log("focus is occured 1");
        input.style.padding = "2rem";
        input.style.fontSize = "1.5rem";
        input.style.borderRadius = "10px";

        
    })
    input.addEventListener("focusin",()=>{
        console.log("focusin is occured 2");
    })
    input.addEventListener("focusout",()=>{
        console.log("focusout is occured 4")
    })