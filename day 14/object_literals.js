// how to make an object in function easily es6

//not like this *********************************************************

// function makeObj(name,age) {
//     return {
//         name:name,
//         age:age
//     }
// }

// like this_____________________________________________________________

function makeObj(name,age) {
    return {
        name,
        age
    }
}
console.log(makeObj("ashraful alif",20));

// make a function in a object easily by es6

//not like this *******************************************************

// let sms={
//     justAmassage:function(){
//         console.log("just a sms by a function inside a object");
//     }
// }

// like this _________________________________________________________

// let sms={
//     justAmassage(){
//         console.log("just a sms by a function inside a object");
//     }
// }


//you also can use spaces between words like this ____________________________

let sms={
    'just A massage'(){
        console.log("just a sms by a function inside a object");
    }
}
sms['just A massage']();