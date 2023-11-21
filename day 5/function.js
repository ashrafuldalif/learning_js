function hello(){
    document.write("hello , there"+"<br>");
}
hello();
(function sum(x,y){
    document.write(x+y);        
})("number  ",0);


(function sum(x,y){
    document.write(x+y+"<br>");        
})(3.4,1.6);


var msg=function massage(M){
document.write(M + "<br>");
}


msg("haha may hu mu mogambo");