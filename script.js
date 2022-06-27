const a=document.querySelector("#popdog");
const score = document.querySelector("#score");
let j=0;
const sound = new Audio("pop1.mp3");
function change1(){
    
    a.src = "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdcoqqD%2FbtrFKaCMe71%2F8xcgd9ltnhJO9v7GVugsdk%2Fimg.png";
    sound.play();
    scorePlus();
}


function change2(){
    a.src = "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FHMOg9%2FbtrFKHG5RUb%2F0IQZZ5RiooYNYoPHSIRtZk%2Fimg.png";
}





a.addEventListener("mousedown",change1);
a.addEventListener("mouseup",change2);
a.addEventListener("touchstart",change1);
a.addEventListener("touchmove",change2);



function scorePlus(){
    j++;
    score.innerHTML=j;
}
