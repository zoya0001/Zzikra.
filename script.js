document.addEventListener("DOMContentLoaded", function(){

    var musicBtn = document.getElementById("musicBtn");
    var music = document.getElementById("bg-music");

    var touchBtn = document.getElementById("touchBtn");
    var hiddenText = document.getElementById("hiddenText");

    
    musicBtn.addEventListener("click", function(){
        music.play();
        musicBtn.innerText = "🌙 Playing...";
    });

    
    touchBtn.addEventListener("click", function(){
        hiddenText.style.display = "block";
    });

});