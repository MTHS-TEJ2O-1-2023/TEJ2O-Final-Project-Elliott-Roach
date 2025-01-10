/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Elliott Roach
 * Created on: Jan 2025
 * This program ...
*/

//setup
let forward: number = 0
radio.setGroup(188)
basic.showIcon(IconNames.Happy)

//moving forward
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    forward = 1
    radio.sendNumber(forward = 1)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    forward = 0
    radio.sendNumber(forward = 0)
})


radio.onReceivedNumber(function (forward: 1) {
        
            
        
        robotbit.StpCarMove(1, 51)
        basic.pause(10)
    }
)
