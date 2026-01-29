document.addEventListener("DOMContentLoaded", () => {
  music = document.querySelector(".cbj");
});


let playing = false;

function playMusic(){
    if (!playing){
        music.play();
    } else{
        music.pause()
    }
    playing = !playing;
}