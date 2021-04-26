controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Total_guy.say(tip_total)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    dollar_amount += 1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    tip_percentage += 0.1
})
let tip_percentage = 0
let dollar_amount = 0
let tip_total = 0
let Total_guy: Sprite = null
Total_guy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . 2 2 . . . 2 . . . . . . 
    . . . . 2 2 . . . 2 . . . . . . 
    . . . . . . . . . 2 . . . . . . 
    . . . . . . . . . 2 . . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let Tip_guy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . 7 7 7 7 7 . . . . . . 
    . . . . . 7 . 7 . 7 . . . . . . 
    . . . . . 7 . . . . . . . . . . 
    . . . . . 7 . . . . . . . . . . 
    . . . . . 7 7 7 7 . . . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . 7 . 7 . 7 . . . . . . . 
    . . . . 7 7 7 7 7 . . . . . . . 
    . . . . . . 7 . . . . . . . . . 
    . . . . . . 7 . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let percentage_guy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . f f . . . . 
    . . . f f f . . . . f . . . . . 
    . . . f f f . . . f f . . . . . 
    . . . f f f . . . f . . . . . . 
    . . . . . . . . f f . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . f f f . . f f f . . . 
    . . . . f f . . . . f f f . . . 
    . . . . . . . . . . f f f . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(1)
percentage_guy.setPosition(120, 71)
Tip_guy.setPosition(24, 70)
Total_guy.setPosition(73, 30)
game.onUpdateInterval(500, function () {
    tip_total = tip_percentage * dollar_amount
    Tip_guy.say(dollar_amount)
    percentage_guy.say(tip_percentage)
})
