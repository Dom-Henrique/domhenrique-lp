let images = document.querySelectorAll("img")

function toggleTheme(element){
    document.body.style.backgroundColor = "var(--primary)";
    document.body.style.color = "var(--dark)"

    images.document.style.filter = "invert(1)";
}