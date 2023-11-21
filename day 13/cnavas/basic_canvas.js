let cnvs=document.getElementById("canvas");
console.log(cnvs);
let contex = cnvs.getContext('2d');

cnvs.style.background='#ff6';
cnvs.style.border="2px black solid"

cnvs.height=window.innerHeight;
cnvs.width=window.innerWidth;

contex.fillRect(100,100,50,100);
contex.fillStyle="blue";
contex.fillRect(100,300,50,100);

contex.beginPath();
contex.strokeStyle="blue";
contex.lineWidth="5";
contex.arc(400,300,100,0,Math.PI*2,false);
contex.stroke();
contex.closePath()