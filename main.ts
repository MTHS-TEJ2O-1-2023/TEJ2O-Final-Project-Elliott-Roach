/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Elliott Roach
 * Created on: Jan 2025
 * This program ...
*/

//setup
let aNumber: number = 0
radio.setGroup(88)

//sending forward
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(1)
})

//sending left
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(3)
})

//sending right
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(5)
})

//reseving
radio.onReceivedNumber(function (receivedNumber: number) {
    aNumber = receivedNumber
})

//going forward
basic.forever(function () {
    if (aNumber == 1) {
        robotbit.StpCarMove(1, 51)
    }

    //going right
    if (aNumber == 5) {
        robotbit.StpCarTurn(5, 51, 125)
    }


    //going left
    if (aNumber == 3) {
        robotbit.StpCarTurn(-5, 51, 125)
    }
})
