var cvs=document.getElementById("golGOl");

var context=cvs.getContext('2d');
cvs.style.background = "gray";
cvs.width=window.innerWidth;
cvs.height=window.innerHeight;

class circle {
constructor(Xaxis, Yaxis, r, a, b, c, text) {
    this.Xaxis = Xaxis;
    this.Yaxis = Yaxis;
    this.r = r;
    this.a = a;
    this.b = b;
    this.c = c;
    this.text = text;
}
drawCircle(context) {
    context.beginPath();
    let C="rgb"+"("+this.a+","+this.b+","+this.c+")";
    context.strokeStyle = C;
    context.textAlign = "center";
    context.textBaseline="middle"
    context.font="22px arial"
    context.fontWeight = "900";
    
    context.lineWidth = "9";
    context.fillText(this.text, this.Xaxis, this.Yaxis);
    context.arc(this.Xaxis, this.Yaxis, this.r, 0, Math.PI * 2, false);
    context.stroke();
    context.closePath();
}
}
function randomCircleGenerator(){

var count=1;
for (var i=0;i<10;i++){
let x=Math.random()*window.innerWidth;
let y=Math.random()*window.innerHeight;
let z=Math.floor(Math.random()*100+50);
let r=randomColor();
let g=randomColor();
let b=randomColor();
let gol= new circle(x,y,z,r,g,b,count);
gol.drawCircle(context);
count++;
}
function randomColor(){
let a=Math.floor(Math.random()*255);
return a;

}}

for(var i=0;i<100;i++){

    randomCircleGenerator();
}
