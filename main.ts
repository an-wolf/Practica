basic.showString("Wolf")
basic.showNumber(16)
basic.showIcon(IconNames.Heart)
basic.showIcon(IconNames.Skull)
basic.showArrow(ArrowNames.NorthEast)
for (let index = 0; index < 2; index++) {
    basic.showLeds(`
        # # # . .
        # # . . .
        # . # . .
        . . . # .
        . . . . #
        `)
    basic.showLeds(`
        . . # # #
        . . . # #
        . . # . #
        . # . . .
        # . . . .
        `)
}
