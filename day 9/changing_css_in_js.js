var html=document.getElementsByClassName("back")[0];
var body=document.getElementsByClassName("back")[1];
var text= document.getElementById("pTag");
var spider= document.getElementById("spider");

function add_back(){

    html.classList.add("background");
    body.classList.add("background");
}
function remove_back() {
    html.classList.remove("background");
    body.classList.remove("background");
}
function add_TS(){
    text.classList.add("p-style");
}
function remove_TS(){
    text.classList.remove("p-style");
}
function add_SS(){
    spider.classList.add("spiderman-style");
}
function remove_SS(){
    spider.classList.remove("spiderman-style");
}
