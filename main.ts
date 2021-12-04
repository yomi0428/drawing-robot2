input.onButtonPressed(Button.A, function () {
    No = randint(1, 20)
    start_count = 1
    stopornot = 0
    _4digit_for_no.show(No)
})
input.onButtonPressed(Button.AB, function () {
    time = 0
    No = randint(1, 20)
})
input.onButtonPressed(Button.B, function () {
    stopornot = 1
    if (time < No && time > No) {
        radio.sendNumber(1)
    }
})
let No = 0
let stopornot = 0
let time = 0
let start_count = 0
let _4digit_for_no: grove.TM1637 = null
radio.setGroup(60)
_4digit_for_no = grove.createDisplay(DigitalPin.P2, DigitalPin.P16)
let _4digit = grove.createDisplay(DigitalPin.P1, DigitalPin.P15)
start_count = 0
time = 0
stopornot = 1
basic.forever(function () {
    if (start_count == 1) {
        if (time >= 0 && stopornot == 0) {
            time += 1
            basic.pause(1000)
        }
    }
    _4digit.show(time)
})
