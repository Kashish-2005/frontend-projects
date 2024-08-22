var love= document.querySelector(".cont i")
var con= document.querySelector(".cont")
var crsr=document.querySelector(".cursor")
var body=document.querySelector(".main")

con.addEventListener("dblclick",function(){
    love.style.transform="translate(-50%,-50%) scale(1)"
    setTimeout(function(){
        love.style.transform="translate(-50%,-50%) scale(0)"
    } ,1500);
});

var cultter="";

var a = 