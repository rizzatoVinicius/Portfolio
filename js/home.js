var linhaDoTempo = document.getElementById("linha-do-tempo")
var home = document.getElementById("container__home")
var homeDesign = document.querySelector(".home__design")


function timeLineActive() {
    linhaDoTempo.style.display = "block";
    home.style.display = "none";
    homeDesign.style.display = "none";
}

var abriTimeLine = document.getElementById("home__button")

abriTimeLine.addEventListener("click", function () {
    timeLineActive()
})

var fechaTimeLine = document.getElementById("linha-do-tempo__button")

function timeLineDisable() {
        linhaDoTempo.style.display = "none"
        home.style.display = "flex"
        homeDesign.style.display = "flex"
}

fechaTimeLine.addEventListener("click", function(){
    timeLineDisable()
})