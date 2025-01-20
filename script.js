let container = document.querySelector("#container")
let dino = document.querySelector("#dino")
let obstacle = document.querySelector("#obstacle")

//dino jumping code
window.addEventListener("keydown", (e) => {
    if (e.key == "ArrowUp") {
        if (dino.classList != "animatedino") {
            dino.classList.add("animatedino")
            setTimeout(() => {
                dino.classList.remove("animatedino")
            }, 500)
        }
    }
});

//obstacles movement
window.addEventListener("keydown", (eve) => {
    if (eve.code == "Space") {
        if (obstacle.classList != "animateobstacle") {
            obstacle.classList.add("animateobstacle")
        }
    }
})


