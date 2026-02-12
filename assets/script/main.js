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

// Atualizar automaticamente o ano de copyright
let copyright = document.querySelector(".copyright");
const displaYear = new Date();
copyright.innerText = `© Dom Henrique | ${displaYear.getFullYear()}`