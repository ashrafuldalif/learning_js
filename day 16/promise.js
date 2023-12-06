console.log (`Welcome`);

// how to create a promise - pending , resolve , reject .

const promise1= new Promise ((resolve,reject)=>{
    
    if(true){
        resolve("you are a honnrable man");
    }else {
        // reject(`You are a mother fucker `);  
        reject(new Error(`You are a mother fucker `)); // in this way the error will be properly addressed like an arror
    }
})
const promise2=new Promise ((resolve,reject)=>{
    setTimeout(() => {
        if (true) {
        resolve("completed promise 2");
        } else {
        reject("rejected promise 2");
        }
    }, 2000);
})
const promise3=new Promise ((resolve,reject)=>{
setTimeout(() => {
        if (true) {
        resolve("completed promise 3");
        } else {
        reject("rejected Promise 3");
        }
}, 1000);
})
console.log(promise1);
promise1
.then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)})
.catch((err)=>{console.log(err.message)})


// we can use many promise together...
// like this 
        Promise.all([promise2, promise3])
        .then((res) => console.log(res))
        //here we also can destructure it
        // .then((res1,res2) => console.log(res1,res2))
        .catch((err) => {
        console.log(err);
        });  

//in case of Promise.all if we use Promise.race it will just do one task which ends it task first like

Promise.race([promise2,promise3])  
.then((res)=>console.log(res))
.catch((err)=>console.log(err))

        // and promise is a ASYNCHRONOUS program like settimeout
console.log (`End`);