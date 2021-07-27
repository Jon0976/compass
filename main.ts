input.onButtonPressed(Button.A, function () {
    input.calibrateCompass()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (input.compassHeading()))
})
basic.forever(function () {
	
})
