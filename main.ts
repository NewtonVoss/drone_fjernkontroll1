// Gassen skal reduserast
input.onButtonPressed(Button.A, function () {
    if (throttle < 40) {
        throttle += -5
    } else {
        throttle += -1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (arm) {
        arm = 0
    } else {
        arm = 1
    }
    throttle = 0
})
// Gassen skal reduserast
input.onButtonPressed(Button.B, function () {
    if (throttle < 40) {
        throttle += 5
    } else {
        throttle += 1
    }
})
input.onGesture(Gesture.Shake, function () {
    throttle = 0
    arm = 0
})
let roll = 0
let pitch = 0
let arm = 0
let throttle = 0
let radiogroup = 23
basic.showNumber(radiogroup)
radio.setGroup(radiogroup)
basic.forever(function () {
    pitch = input.rotation(Rotation.Pitch)
    roll = input.rotation(Rotation.Roll)
    basic.clearScreen()
    if (arm) {
        // Viser om drona er armert eller ikkje med eit lysande punkt oppe til venstre.
        led.plot(0, 0)
    }
    // Lysande punkt  som flyttar seg oppover og nedover i fyrste kolonne i takt med throttle.
    led.plot(0, 4 - throttle / 25)
    led.plot((45 + roll) / 22.5, (45 + pitch) / 22.5)
    radio.sendValue("P", pitch)
    radio.sendValue("A", arm)
    radio.sendValue("R", roll)
    radio.sendValue("T", throttle)
})
