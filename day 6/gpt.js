// GPT 
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
function highest_score_finder(a) {
  var L = a.length;
  var best = a[0];

  for (var i = 1; i < L; i++) {
    var a = parseFloat(best[1]);
    var b = parseFloat(a[i][1]);

    if (b > a) {
    best = a[i];
    }

  }

  return best;
}

var best_player = highest_score_finder(info);
console.log(
  "best player : " + best_player[0] + " with a score of " + best_player[1]
);
