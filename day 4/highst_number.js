var a = parseFloat(prompt("Enter first number :"));
var b = parseFloat(prompt("Enter second number :"));
var c = parseFloat(prompt("Enter third number :"));

var textForHigh = "the Highst number is ";
var textForLow = "the lowest number is ";

document.write(
  "the numbers are" + "    " + a + " , " + b + " , " + c +  "<br>"
);
var temp = a;
{
  if (temp > b && temp > c) {
    document.write(textForHigh + temp);
  } else if (b > a && b > c) {
    temp = b;
    document.write(textForHigh + temp);
  } else {
    temp = c;
    document.write(textForHigh + temp);
  }
}
temp = a;
document.write("<br>");
{
  if (temp < b && temp < c) {
    document.write(textForLow + temp);
  } else if (b < a && b < c) {
    temp = b;
    document.write(textForLow + temp);
  } else {
    temp = c;
    document.write(textForLow + temp);
  }
}
