/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Elliott Roach
 * Created on: Jan 2025
 * This program ...
*/

//setup
let forward: number = 0
let left: number = 0
let right: number = 0
radio.setGroup(218)
basic.showIcon(IconNames.Happy)
radio.sendValue
basic.forever(function() {


radio.sendValue("forward", 1)

    //moving forward
    if (forward == 0) {
    input.onButtonPressed(Button.AB, function () {
        basic.clearScreen()
        radio.sendValue("forward", 1)
        radio.sendValue("left", 0)
        radio.sendValue("right", 0)
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
            radio.sendValue("forward", 0)
            radio.sendValue("left", 1)
            radio.sendValue("right", 0)
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

    //turning right
    if (right == 0) {
        input.onButtonPressed(Button.B, function () {
            basic.clearScreen()
            radio.sendValue("forward", 0)
            radio.sendValue("left", 0)
            radio.sendValue("right", 1)
            while (right == 1) {
                robotbit.StpCarTurn(-10, 51, 125)
                basic.pause(10)
                //stopping
                if (right == 1) {
                    input.onButtonPressed(Button.B, function () {
                        basic.clearScreen()
                        right = 0
                    })
                }
            }
        })
    }
})