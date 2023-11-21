//hoising is a advantage in js we can use a variable before creating it if we use VAR its not useble with let and const


// "use strict"

x=20;
console.log(`x = ${x}`);
var x;

y=10;
if(true){
    console.log(`y = ${y}`);
}
var y;

// we can use a undeclared variable without any problem but we can prevent that by using "use strict". on the top of the document like in the line 4 .

a=40;
console.log(`a = ${a}`);

// if you use const it will be an error

// z=20;
// console.log(`z = ${z}`);
// const z;


