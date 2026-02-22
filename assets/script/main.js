document.addEventListener("DOMContentLoaded", () => {
  cbj = document.querySelector(".cbj");
  kv = document.querySelector(".kv");
});


let playing = false;

function playCBJ(){
    if (!playing){
        cbj.play();
    } else{
        cbj.pause();
    }
    playing = !playing;
}

function playKV(){
    if (!playing){
        kv.play();
    } else{
        kv.pause();
    }
    playing = !playing;
}

// Atualizar automaticamente o ano de copyright
let copyright = document.querySelector(".copyright");
const displaYear = new Date();
copyright.innerText = `© Dom Henrique | ${displaYear.getFullYear()}`