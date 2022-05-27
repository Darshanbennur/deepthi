const music = new Audio("happy.mp3");

document.body.addEventListener("click",()=>{
    music.play();
    music.loop = true;
});
