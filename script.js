let container = document.querySelector("#container");
let dino = document.querySelector("#dino");


window.addEventListener("keydown" , (e) => {
    console.log(e);
    if(e.key == "ArrowUp")
        if(dino.classList != "animatedino")
        {
            dino.classList.add("animatedino");
            setTimeout(() => {
                dino.classList.remove("animatedino");        
            },500);
        }
    
});