// forEach   map   filter

let nums =[1,2,3,4,5,6,7,8,9,10];

console.log(`numbers :: ${nums}`);
// nums.forEach((x,index,arr) => {
//     arr[index]=x*5;
// });
// console.log(nums);

// forEach cant return another array for that we need to push to another array like this
let newNums=[];
nums.forEach((x) => {
    newNums.push(x*5);
});
console.log(`numbers multiply by 5 ::  ${newNums}`);

// but MAP returns an array so we dont have to do all that work 

let squar = nums.map((x) => { return x*x });
console.log(`squar of numbers ::  ${squar}`);

// filter comes handy when we need to separate a array by some kind of a logic like 

let even = nums.filter((x)=>{return x%2==0});
console.log(`all even numbers ::  ${even}`); 

let odd = nums.filter((x)=>{return x%2!=0});
console.log(`all odd numbers ::  ${odd}`); 