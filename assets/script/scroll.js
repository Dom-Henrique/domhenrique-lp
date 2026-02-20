let sections = document.querySelectorAll("section")

const animations = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
        else {
            entry.target.classList.remove("show");
        }
    });
});

// função de primeira classe
sections.forEach((section) => { // Precisa de uma função pq ñ sabe o que fazer sozinho
    animations.observe(section); // observe serve para vigiar o elemento
});