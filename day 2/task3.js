
// function calculate(){
//   var num1 = document.getElementById("num1").value;
//   var num2 = document.getElementById("num2").value;
//   num1 = parseFloat(num1, 10);
//   num2 = parseFloat(num2, 10);
//   var sum = num1 + num2;
//   var sub = num1 - num2;
//   var mult = num1 * num2;
//   var divide = num1 / num2;
//   var power = num1 ** num2;
//   var reminder = num1 % num2;
//   document.write(num1 + "+" + num2 + "=" + sum);
//   document.write(num1 + "-" + num2 + "=" + sum);
//   document.write(num1 + "X" + num2 + "=" + sum);
//   document.write(num1 + "/" + num2 + "=" + sum);
//   document.write(num1 + " to the power of " + num2 + "=" + sum);
//   document.write(num1 + "" + num2 + "=" + sum);
// }


function calculate() {
  var num1 = parseFloat(document.getElementById("num1").value,10);
  var num2 = parseFloat(document.getElementById("num2").value,10);

    var sum = num1 + num2;
    var sub = num1 - num2;
    var mult = num1 * num2;
    var divide = num1 / num2;
    var power = num1 ** num2;
    var reminder = num1 % num2;
var results = document.getElementById('result');
results.innerHTML = `
${num1} + ${num2} = ${sum} <br> 
${num1} - ${num2} = ${sub} <br> 
${num1} / ${num2} = ${divide} <br> 
${num1} X ${num2} = ${mult} <br> 
${num1} <sup> ${num2} </sup> = ${power} <br> 
${num1} % ${num2} = ${reminder} <br> 


`;}
