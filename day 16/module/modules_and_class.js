// we also can change the variable name here like

// import {text as likho ,setText} from './modules_index.js'  

// but if we do it in both file for the same variable its not gonna work sooooooo

import {likho ,setText} from './modules_index.js'  // for using module you need to add module type in the script link in html go and see .

console.log(likho);
setText(`i am Ashraful D Alif `);
console.log(likho);


class student {
constructor(id, name) {
    this.id = id;
    this.name = name;
}
set changeName(name){  // this is not a function 
    this.name=name;
}
set changeId(id){     // not a function 
    this.id=id;
}
get strudentInfo(){      // !function
    return `id : ${this.id} \n name : ${this.name}`;
}
}

let s1 = new student(11296, `Ashraful D Alif`);
console.log(s1);
s1.changeId= 66;        // n0 bracket needed
s1.changeName =`sanji` // n0 bracket needed
console.log(s1);     
console.log(s1.strudentInfo);     //  n0 bracket needed 


