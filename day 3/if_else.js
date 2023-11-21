
var positive_negative=function (a){
    
if ( a<0)
console.log(a +" is a POSITIVE ");
else 
console.log(a +" is a NEGATIVE ");

}

function even_odd(num,func){
    if (num == 0)
    console.log( " Nothing to say bro the number is ZERO ( 0 ) and its nothing.. ");
    
else if ( num%2==0){
func(num);
console.log(" EVEN  number");
}
else 
func(num);
console.log(" ODD number");

}
even_odd(3,positive_negative);

