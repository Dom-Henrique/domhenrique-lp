// Criação de um botão que troca o tema
let darkMode = document.querySelector(".darkMode");
let darkModeSymbol = darkMode.querySelector("i");
let control = false;
// Adicionar um controlador
darkMode.addEventListener("click", function (){
   if (control == false){
          document.body.classList.toggle("dark-mode");
          darkModeSymbol.classList.toggle("fa-moon");
          // Pega todos os elementos e muda uma propriedade em específico.
          document.documentElement.style.setProperty('--glow', 'rgba(0, 0, 0, 0.5)');
   }
   else if (control == true){
          document.body.classList.toggle("dark-mode")
          darkModeSymbol.classList.toggle("fa-sun");
          document.documentElement.style.setProperty('--glow', '');
   }
})