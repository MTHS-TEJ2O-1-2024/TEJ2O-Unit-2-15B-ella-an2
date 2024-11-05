/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ella An
 * Created on: Nov 2024
 * This program lights up pixels using while loops
*/

// variable
let sprite: game.LedSprite = null
let loopCounter1 = 0
let loopCounter2 = 0

// setup
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()

// when button a is pressed, the pixels light up clockwise
input.onButtonPressed(Button.A, function () {
    // setup
    basic.clearScreen()
    loopCounter1 = 0
    sprite = game.createSprite(0, 0)

    // ligting up the pixels
    while (loopCounter2 < 4) {
        loopCounter2 = loopCounter2 + 1

        // moves the pixels
        while (loopCounter1 <= 5) {
            basic.pause(500)
            sprite.move(1)
            loopCounter1 = loopCounter1 + 1
        }
        sprite.turn(Direction.Right, 90)
        loopCounter1 = 0
    }
    sprite.delete()
    basic.showIcon(IconNames.Happy)
})
