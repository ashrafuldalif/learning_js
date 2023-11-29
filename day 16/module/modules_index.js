// module is just another JS file for storing variables ,creating function  and classes we can use this things in other js files by inmporing them 

// but  for that we need to use export before every variables , function and classes ya thats handy

let text = "hello from modules haha"; 

export {text as likho}  // by adding as we can change the variable name for the reciving file

export function setText(txt){  // for this function we can change the value of the text variable.
    text=txt;
}



