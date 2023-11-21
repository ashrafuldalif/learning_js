function sum (a, b,...c){
    a=parseInt(a);
    b=parseInt(b);
    let l =c.length;
    var x=0;
    for (let i=0;i<l;i++){
        c[i]=parseInt(c[i]);
        x=x+c[i];
    }
    return a+b+x;
}

console.log(sum(1,2,3,5,14));


function sayHallo(name= "unknown admii"){
    console.log(`hello, ${name}`);
}
sayHallo(`Ashraful Alif`);
sayHallo();