/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Elliott Roach
 * Created on: Jan 2025
 * This program ...
*/

//setup
let forward: number = 0
let left: number = 0
basic.showIcon(IconNames.Happy)

//moving forward
if (forward == 0) {
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    forward = 1
    while(forward == 1){
        robotbit.StpCarMove(1, 51)
        basic.pause(10)
        //stopping
        if (forward == 1){
            input.onButtonPressed(Button.AB, function () {
                basic.clearScreen()
                forward = 0
        })
        }
    }
})
}

//turning left
if (left == 0) {
    input.onButtonPressed(Button.A, function () {
        basic.clearScreen()
        left = 1
        while (left == 1) {
            robotbit.StpCarTurn(10, 51, 125)
            basic.pause(10)
            //stopping
            if (left == 1) {
                input.onButtonPressed(Button.A, function () {
                    basic.clearScreen()
                    left = 0
                })
            }
        }
    })
}
