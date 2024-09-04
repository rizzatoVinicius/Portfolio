var list = document.querySelector(".header__list")

function menu(){
        list.classList.toggle("list__active")
        document.body.style.overflow = "hidden"

}

var abriMenu = document.getElementById("header__button")

abriMenu.addEventListener("click", function(){
        menu()

})

list.addEventListener("click", function(){
        list.classList.toggle("list__active")
        document.body.style.overflow = "visible"
})

