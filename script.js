const a=document.querySelector("#popdog")
function change1(){
    a.src="pop2.png"
}


function change2(){
    a.src="pop3.png"
}





a.addEventListener("mousedown",change1)
a.addEventListener("mouseup",change2)
a.addEventListener("touchstart",change1)
a.addEventListener("touchmove",change2)