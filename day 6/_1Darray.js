// var scors =[];
// var i =0;
// for ( i;scors[i-1]!='0';i++){
//     d=i+1;
// //     {
// //     if (scors[i]==='0'){break;}
// //     else
// //     scors[i] = parseFloat(prompt("Enter the score "+d+" :"));
// // }
//    scors[i] = parseFloat(prompt("Enter the score " + d + " :"));

import { best_player } from "./_2Darray";

// }
// scors.sort(function(a,b){
//     return b-a;
// });
// console.log(scors[0]+" is the hiest score");

var scors = [];
var i = 0;
var d = 1;

while (true) {
  scors[i] = parseFloat(prompt("enter " + d + " no score enter 0 to exit  :"));

  if (scors[i] == 0) {
    break;
  }
  i++;
  d++;
}

scors.sort(function (a, b) {
  return b - a;
});

console.log(scors[0] + " is the hiest score");
console.log(
  "best player : " + best_player[0] + " with a score of " + best_player[1]
);
