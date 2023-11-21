var num = Number(prompt("Enter a number  :: "));

// if (num%2==0)
// document.write( num +" is an EVEN number");
// else
// document.write( num +" is an ODD number");

// OR 

//{ var answer = num % 2 == 0 ? "EVEN" : "ODD";
// document.write(num +" is an "+ answer + " number");}


// or we can do this also

num % 2 == 0 ? document.write("EVEN") : document.write("ODD");

// we also can use as many conditions as we used in if else conditions

result = num<0 ? "NEGATIVE" :   num >0? "POSITIVE" : "zero" ;

document.write(result);

