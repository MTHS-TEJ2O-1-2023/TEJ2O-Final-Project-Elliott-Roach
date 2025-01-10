/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Elliott Roach
 * Created on: Jan 2025
 * This program ...
*/

//setup
let forward: number = 0
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
