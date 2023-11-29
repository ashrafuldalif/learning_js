// const squar=x=>x*x;

// console.log(`with normal function : ${squar(4)}`);

// const higherOrderFunction=(value,callback)=>console.log(`with Higher Order Function : ${callback(value)}`);

// higherOrderFunction(6,squar);


const task1=(callback)=>{
    console.log(`task 1`);
    callback()
}
const task2=(callback)=>{
  console.log(`task 2`);
  callback();
}
const task3=(callback)=>{
    setTimeout(() => {
    console.log(`task 3 ... loading One Piece `);
    callback();
    }, 2000);
}
const task4=(callback)=>{
    console.log(`task 4`);
    callback();
}
const task5=()=>console.log(`task 5`);

// task1()
// task2()
// setTimeout(() => {
//     task3()
// }, 2000);
// task4()
// task5()

task1(()=>{
task2(()=>{
    task3(()=>{
        task4(()=>{
            task5();
        })
    });
})
})