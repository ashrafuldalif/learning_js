let array1=[1,2,3];
let array2=[4,5,6];
sum=(x,y,z)=>{return x+y+z};
// console.log(sum(array1[0], array1[1],array1[2]));
console.log(sum(...array1));
// let array=array1.concat(array2);
let array=[0,...array1,...array2,7];
console.log(array);

// we also can use spred oparator in objects like

let obj1={
    name:'ashraful alif',
    age:20,
    father:'aftab uddin',
    mother:`monika akter`
}
let obj2={
    homeTown:'gazipur',
    religion:'Islam',
    nationality:"bangladesh"
}
let obj={
    ...obj1,
    ...obj2
}
console.log(obj);