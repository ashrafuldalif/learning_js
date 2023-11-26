// array destructure

let numbers =[1,2,3,4,5,6]
let [one,two,three,four,five,six]=numbers;
console.log(`array destructure`)
console.log(`in ordinary way ::  \n one=${one}\n two=${two}\n three=${three}\n four=${four}\n five=${five}\n six=${six}`);
let [a,b,c,...d]=numbers;
console.log(`using spred obaretor :: \n a=${a}\n b=${b}\n c=${c}\n d=${d}`);

// swap variables 

console.log(`swaping by destructure`)
let ami=0,tumi=1;
console.log(`ami : ${ami} \n tumi : ${tumi}`);
[ami ,tumi]=[tumi ,ami];
console.log(`ami : ${ami} \n tumi : ${tumi}`);


// object destructure
console.log(` object destructure \n`);
let object ={
    name : `ashraful alif `,
    roll : 3009,
    job : `nothing`,
    language :{
        native : `bangla`,
        _2nd:`english`,
        wish: `japanese`
    }
}
let {name ,roll,job}=object;

// without destructure 
// console.log(`name : ${object.name} \n roll : ${object.roll} \n job : ${object.job}`);

// with destructure
console.log(`name : ${name} \n roll : ${roll} \n job : ${job}`);

// nested object destructure 

console.log(`nested object destructure \n`);

// this is a way 

// let {language}=object;
// let {native,_2nd,wish }=language;

// this is another way   ( same thing though )

let {native,_2nd,wish }=object.language;  // here the 2nd bracket iz a must be thing if you miss this then you will be fucked up


console.log(`\n native : ${native} \n 2nd : ${_2nd} \n wish : ${wish} \n`);

// destructuring function parameters 
console.log(`\n destructuring function parameters \n`);

const wellcoming=({firstName,lastName})=>{  // in this line dont miss the 2nd bracket or you will be fucked up
    console.log(` Hi, ${firstName} ${lastName} \n welcome to omuk website ekhane tomuk seba paoa jay `);}
    
    let myname={
        firstName:`Ashraful D`,
        lastName : `Alif`
    }
wellcoming(myname);

