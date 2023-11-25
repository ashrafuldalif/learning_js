// function sayHello() {
//     console.log("hello, i am ashraful d alif");
// }
const example=(x,y)=>{
    console.log("this is an example how to create an arrow function with so many statments ")
    console.log(`${x}+${y}=${x+y}`);
}
example(12,35);

const hello=()=>console.log("hello , i ma ashraful d alif without with console log" )
hello()
const sayHello=()=>"hello , i ma ashraful d alif with out console log"
console.log(sayHello());

// function add (x,y){
//     return x+y;
// }

const add=(x,y)=>x+y;

console.log(add(20,30));

console.log(`\n a demo of usefulness of arrow function \n\n\n`);

let students=[      // an array of objects by using {2nd brackets} inside of  [3rd bracket] 
{
    name:"ashraful",
    roll:3009,
    gpa:3.69
},
{
    name:"hoob",
    roll:3069,
    gpa:3.50
},
{
    name:"luffy",
    roll:3010,
    gpa:2.69
},
{
    name:"sabo",
    roll:3019,
    gpa:3.99
},
{
    name:"ace",
    roll:3001,
    gpa:2.85
}
]
function nameOfToppers1(){
return students.filter(function(x){
    return x.gpa>3;
    }).map(function (y){
        return y.name;
    })
}

console.log(`With normal function ::: ${nameOfToppers1()}`);

const nameOfToppers2 = () =>students.filter(a=> a.gpa>3).map(b => b.name);

console.log(`with arrow function ::: ${nameOfToppers2()}`);