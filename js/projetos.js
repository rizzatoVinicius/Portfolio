var container = document.getElementById("container__projetos")
var title = document.getElementById("projetos__title")
var text = document.querySelector(".projetos__text")
var button = document.getElementById("projetos__button")
var link = document.getElementById("projetos__link")


var currentIndex = 0;
var links = [
    "https://rizzatovinicius.github.io/Gerenciador-de-tarefas/",
    "https://rizzatovinicius.github.io/dash/"

]
var titulos = [
    "Gerenciador de projetos",
    "Dash"
]
var textos = [
    "Ultiliza JavaScript e bootstrap, é funcional mas nem um pouco bonito.",
    "Ultiliza React, tem um design melhor."
]

button.addEventListener("click", ()=> {
    text.textContent = textos[currentIndex];
    title.textContent = titulos[currentIndex];
    link.href = links[currentIndex]
    currentIndex = (currentIndex + 1) % textos.length;
})

button.addEventListener("click", ()=>{
    button.style.display = "block"
    link.style.display = "block"
})