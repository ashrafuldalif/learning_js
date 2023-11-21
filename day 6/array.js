var names = ["ashraful","mahirma","sara",'anim']

// var names = new Array[5];
// var names =[5];

// or 
// var names = [];

// names[0] = "ashraful";
// names[1] = "roman";
// names[2] = "samir";
// names[3] = "mahirma";
// names[4] = "sara";
console.log(names.length);
console.log(names);
names.pop();
console.log(names);

names.push("alif");
console.log(names);

names.shift();
console.log(names);

names.unshift("Hoob D Noor");
console.log(names);

names.splice(2,1,"sharanika","ching chang cho");
console.log(names);

var country1=["Bangladesh","India","Pakistan","Japan","China"];
console.log(country1);
var country2=["Germany","Autria","Afganistan","Newziland","America"];
console.log(country2);
var country= country1.concat(country2);
console.log(country);

// sorting______________________________________________

var sortedName=names.sort();
console.log(sortedName);

// REVERSE 

var sortedName= sortedName.reverse();
console.log(sortedName);

// for sorting numbers-------------

var numbers= [24,54,6,7,33,65,123,54,0];
numbers.sort(function(a,b){
    return a-b;
}
)
console.log(numbers);

// reverse 

numbers.sort(function(a,b){
    return b-a;
}
)
console.log(numbers);
