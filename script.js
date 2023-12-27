var main = document.querySelector("#main")
var couros = document.querySelector(".container")

main.addEventListener("mousemove",function(dets){
    couros.style.left= dets.x+"px"
    couros.style.top= dets.y+"px"

})