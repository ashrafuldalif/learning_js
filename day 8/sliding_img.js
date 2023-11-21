var images = [
  "/imgs/luffy.jpg",
  "/imgs/ace.jpg",
  "/imgs/sabo.jpg",
  "/imgs/zoro.jpg",
  "/imgs/sanji.jpg",
  "/imgs/nami.jpg",
  "/imgs/usopp.jpg",
  "/imgs/chopper.jpg",
  "/imgs/robin.jpg",
  "/imgs/franky.jpg",
  "/imgs/jimbai.jpg",

];
var L=images.length;
var i=0;
var imgLink=document.getElementById("img");
function next() {
    i++;
    if (i>=L) {
        i=0;
    }
    imgLink.src=images[i];     
}
function ex(){ 
    i--;
        if (i<0) {
        i=L-1;
    }
    imgLink.src=images[i];

}
