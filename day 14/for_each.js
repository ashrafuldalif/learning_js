// for VS foreach

let nums=[1,23,45,6,7];

// with normal for loop 

// for (let i=0;i<nums.length;i++){
    //     console.log(`value of ${i+1} no index : ${nums[i]}`);
    // }
    
// with normal forEach loop 


// nums.forEach(printingTheValue(x));

// function printingTheValue(x,index,arr){
//     console.log(`value of ${index+1} no index : ${x}`);
// }

//although we can use anomiouse function to minimize the lines

nums.forEach((x, index, arr) => {
    console.log(`value of ${index + 1} no index : ${x}`);
});

// we also can store the calculated numbers in the array like this

// squar of the numbers

console.log(nums);  // before

nums.forEach((x, index, arr) => {
    arr[index]=x*x;
});
console.log(nums);  // after

