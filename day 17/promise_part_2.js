console.log('hi');
console.log('hello');

// promise er vitore setTimeOut promise(setTimeOut Function)
// eta vulle shes beee

const task1=()=>{        // making promises with setTimeOut JOYBOY
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`task 1 is comleted`);
    }, 5000);
        });
}
const task2=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
    resolve(`task 2 is comleted`);
}, 4000);
    });
}
const task3=()=>{
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(`task 3 is comleted`);
        // reject(`task 3 is NOT comleted`);
    }, 3000);
    }) 
}
const task4=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        resolve(`task 4 is comleted`);
    }, 2000);
    }) 
}
const task5=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        resolve(`task 5 is comleted`);
    }, 1000);
    }) 
}




// task1()
// .then(res=>console.log(res))
// .then(task2)
// .then(res=>console.log(res))
// .then(task3)
// .then(res=>console.log(res))
// .then(task4)
// .then(res=>console.log(res))
// .then(task5)
// .then(res=>console.log(res))
// .catch(err=>console.log(err))  // one catch is enough for all of promises


// you can uncomment this part for viewing the work  47 to 57 just 10 lines 


// if one of those promises missed then after fialed promise none will work if 3 no promise is failed then 4 & 5 will not work 
// you can uncomment the 25th line for chacking it haha ...

// -----------------------------------------------------------------------

// using ASYNC AWAIT  = async await works just like promises then but much easier  you have to make a funciton 
// and in front of the funciton need to write ASYNC 
// in front of variables you need to write await to run any setTimeOut function like syncronus haha

// async function doingItAgain() {              // old erra 
const doingItAgain = async ()=>{                // new erra
try {
    const t1 = await task1();
    console.log(`0 ${t1}`);
    const t2 = await task2();
    console.log(`0 ${t2}`);
    const t3 = await task3(); // in this async await thing there are nothig for error handaling so we have to use try catch
    console.log(`0 ${t3}`);
    const t4 = await task4();
    console.log(`0 ${t4}`);
    const t5 = await task5();
    console.log(`0 ${t5}`);

} catch (error) {
    console.log(error)
}
}                       //------------------  here is the main advantage is we can easily pass values from one funciton to another funciton 
doingItAgain();  // both of those are doing the same task 

console.log(`bye`);