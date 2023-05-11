
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

kaboom();

loadSprite("kartka","kartka.png")
loadSprite("balwan","balwan.png")

loadSound("muzyka","koleda1.mp3")

add([
    sprite("kartka")
])

const balwan = add([
    sprite("balwan"),
    pos(140,180) 
])

let wprawo = true

balwan.onUpdate(() => {

    if(wprawo && balwan.pos.x < 500)
        balwan.pos.x += 1

    else if(!wprawo && balwan.pos.x > 20)
        balwan.pos.x -= 1

        else wprawo ^= true


})

onMouseRelease(()=>play("muzyka"))