input.onButtonPressed(Button.A, function () {
    basic.showString("Hello!")
})
input.onButtonPressed(Button.B, function () {
    b = randint(0, 2)
    if (b == 0) {
        basic.showLeds(`
            . # # # .
            # . # . #
            # # . # #
            # . . . #
            . # . # .
            `)
    } else {
        if (b == 1) {
            basic.showIcon(IconNames.Scissors)
        } else {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        }
    }
})
let b = 0
let a = 3
basic.forever(function () {
	
})
