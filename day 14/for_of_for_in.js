// for of is for all arrays and 
// for in is for object 

    // FOR OF____________________________________________________________

let numbers =[1,2,3,4,5,6,7,8];
let sum=0;
for (i of numbers){
    i=parseInt(i);
    sum+=i;
    i<8?console.log(`+${i}`):console.log(`${i}`);
}
console.log(sum);


let person={
    name:`ashraful alif`,
    age : 20,
    "home town":"gazipur",
    Country:"bangladesh",
    Relegion :'islam'
}

for (x in person){
    console.log(`${x} : ${person[x]}`);
}
// thanks a lot brothers 