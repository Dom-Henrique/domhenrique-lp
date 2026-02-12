// Criação de um botão que troca o tema
let landingPage = document.querySelector("body");
let aboutMe = document.querySelector(".about-me");
let darkMode = document.querySelector(".darkMode");
let header = document.querySelector(".presentation");
let darkModeSymbol = darkMode.querySelector("i");
let navBar = document.getElementsByTagName("header");
let control = false;
// Adicionar um controlador
darkMode.addEventListener("click", function (){
    /*
    darkModeSymbol.classList.toggle("fa-solid fa-sun");
    darkModeSymbol.classList.toggle("fa-solid fa-moon");
    */
   if (control == false){
        landingPage.style.backgroundColor = "#d0d0d0";
        landingPage.style.color = "#202020";
        header.style.color = "#d0d0d0"
        aboutMe.style.backgroundColor = "#202020";
        aboutMe.style.color = "#d0d0d0";
        navBar[0].style.backgroundColor = "#202020";
        navBar[0].style.color = "#d0d0d0";
        control = true;
        // Pega todos os elementos e muda uma propriedade em específico.
        document.documentElement.style.setProperty('--glow', 'rgba(0, 0, 0, 0.5)');
   }
   else if (control == true){
        landingPage.style.backgroundColor = "";
        landingPage.style.color = "";
        header.style.color = ""
        aboutMe.style.backgroundColor = "";
        aboutMe.style.color = "";
        navBar[0].style.backgroundColor = "";
        navBar[0].style.color = "";
        control = false;
        document.documentElement.style.setProperty('--glow', '');
   }
})