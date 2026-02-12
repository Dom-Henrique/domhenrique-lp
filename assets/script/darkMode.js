// Criação de um botão que troca o tema
let aboutMe = document.querySelector(".about-me");
let darkMode = document.querySelector(".darkMode");
let header = document.querySelector(".presentation");
let darkModeSymbol = darkMode.querySelector("i");
let navBar = document.getElementsByTagName("header");
let control = false;
// Adicionar um controlador
darkMode.addEventListener("click", function (){
   if (control == false){
          document.body.classList.toggle("dark-mode");
          control = true;
          darkModeSymbol.classList.toggle("fa-moon");
          // Pega todos os elementos e muda uma propriedade em específico.
          document.documentElement.style.setProperty('--glow', 'rgba(0, 0, 0, 0.5)');
   }
   else if (control == true){
          document.body.classList.toggle("dark-mode")
          control = false;
          darkModeSymbol.classList.toggle("fa-sun");
          document.documentElement.style.setProperty('--glow', '');
   }
})