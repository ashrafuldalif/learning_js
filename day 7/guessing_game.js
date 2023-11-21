var won = 0;
var lose = 0;
var guess;
for (var i = 0; i < 5; i++) {
  var random = Math.floor(Math.random() * 6 + 1);
  var c = i + 1;
  guess = parseInt(prompt("Enter a number 1-6 attempt no " + c + " Out of 5"));
  if (random == guess) {
    console.log("YOU are a lucky bitch ! you won MC.");
    won += 1;
  } else if (guess < 1 || guess > 6) {
    console.log(
      "are you a moran or something i sayed 1 to 6  now countdown to 1 to 6 and then press again or roll a dice or ask a"
    );
  } else {
    console.log(
      "YOU loss the random number was " + random + " and you guessed " + guess
    );
    lose += 1;
  }
}
console.log("there are 5 game played in total");
console.log("you WON " + won + " of them");
console.log("And you LOSE " + lose + " of them");

var luck = won > lose ? " a LUCKY bastard" : " just a ORDINARY men what a sham";
console.log("YOu are" + luck);
