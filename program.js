
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

kaboom();

loadSprite("kartka","kartka.png")
loadSprite("balwan","balwan.png")

loadSound("muzyka","koleda1.mp3")

add([
    sprite("kartka")
])

add([
    sprite("balwan"),
    pos(140,180) 
])

