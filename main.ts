radio.onReceivedNumber(function (receivedNumber) {
    if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            # # # # .
            # . . . .
            # # # . .
            # . . . .
            # # # # .
            `)
    }
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showNumber(tenInt)
})
let tenInt = 0
radio.setGroup(1)
basic.forever(function () {
    tenInt = input.temperature()
    tenInt = tenInt + 0
})
