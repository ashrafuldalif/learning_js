let one =[1,2,4,6,8,9,45,7,10];
//find ( callback, value ) retrun the value of the first elementthat pass certain conditioin 

let finding=one.find(e=>e>10);
console.log(`find value : ${finding}`);

// findIndex ( callback, value ) return the index of the first element that pass certain condition

let findingIndex=one.findIndex(e=>e>10);

console.log(`find index : ${findingIndex}`);

// find form object 

let objArray = [
    {
        name:`ashraful alif`,
        age:21,
        gpa:3.03 

    }, 
    {
        name:`luffy`,
        age:24,
        gpa:3.00 

    }, 
    {
        name:`ace`,
        age:26,
        gpa:4.10 

    },
    {
        name:`sabo`,
        age:26,
        gpa:5.00 
    }
];

let findStudent=objArray.find(e=>e.gpa>4);
console.log(`${findStudent.name} got gpa ${findStudent.gpa} `);