// divideble by 3 and 5 

var i=1;
var arr=[];
var j=0;
var sum =0;
// while ( i<=200){
//     if (i % 3 == 0 && i % 5 == 0) {
        
//     document.write(i + " ");
//     sum += i;
//     if (i!=100)
//     document.write('+');
//     }
//     i++;
// {
// if(i==200)
// document.write('= ' +sum);
// }
// }
while ( i<=100){
if (i%5==0 && i%3==0){
arr[j]=i;
sum+=i;
j++;
}
i++;
}
i=0;
while(i<j){
    console.log(arr[i] +' ');
    if (i==(j-1)){
        console.log('=' + sum);
    }
    else 
    console.log('+');
    i++;
}
