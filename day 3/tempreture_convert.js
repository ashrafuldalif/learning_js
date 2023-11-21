var fahrenheit = parseFloat(prompt("Enter tempreture in fahrenheit :"));
var Celcias = (fahrenheit - 32) * (5 / 9);
document.write("Tempreture in censius : " + Celcias + "<br>");

var Celcias = parseFloat(prompt("Enter tempreture in Celcias  :"));
var fahrenheit = Celcias * (9 / 5) + 32;
document.write("Tempreture in fahrengeit : " + fahrenheit + "<br>");
