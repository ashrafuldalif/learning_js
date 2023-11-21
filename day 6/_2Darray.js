var info = [
  ["ashraful", 458],
  ["alif", 358],
  ["anim", 486],
  ["psyful", 951],
  ["mahirma", 753],
  ["sara", 159],
  ["bintu", 269],
  ["jafna", 225],
  ["etc", 100],
];
function hiest_score_finder(a){
    var L = a.length
    var best = a[0];
// console.log("L "+L);
for (var i = 1; i < L; i++) {
  var aScore = parseFloat(best[1]);
  var bScore = parseFloat(a[i][1]);
// console.log(i);
  if (bScore > aScore) {
    // best[0] = a[i][0];
    // best[1] = a[i][1];
    best=a[i];
    // console.log("B  "+best[0]);
  }

}
return best;
}

var best_player= hiest_score_finder(info);
console.log("best player : "+best_player[0]);
console.log("best score : "+best_player[1]);


