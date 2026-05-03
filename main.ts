basic.forever(function () {
    lcd.clearScreen()
    lcd.displayText("MKE-M04", 1, 1)
    lcd.displayText("Value:", 1, 2)
    lcd.displayText(convertToText(pins.analogReadPin(AnalogPin.P0)), 8, 2)
    if (pins.analogReadPin(AnalogPin.P0) < 200) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
    }
    if (pins.analogReadPin(AnalogPin.P0) > 200 && pins.analogReadPin(AnalogPin.P0) < 400) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
    }
    if (pins.analogReadPin(AnalogPin.P0) > 400 && pins.analogReadPin(AnalogPin.P0) < 600) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (pins.analogReadPin(AnalogPin.P0) > 600 && pins.analogReadPin(AnalogPin.P0) < 800) {
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (pins.analogReadPin(AnalogPin.P0) > 800 && pins.analogReadPin(AnalogPin.P0) < 1024) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    basic.pause(200)
})
