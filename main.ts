IR.IR_callbackUser(function () {
    if (IR.IR_read() == 23) {
        basic.showString("A1")
    }
    if (IR.IR_read() == 63) {
        basic.showString("C1")
    }
    if (IR.IR_read() == 4) {
        basic.showString("A2")
    }
    if (IR.IR_read() == 6) {
        basic.showString("B2")
    }
    if (IR.IR_read() == 31) {
        basic.showString("C2")
    }
    if (IR.IR_read() == 8) {
        basic.showString("A3")
    }
    if (IR.IR_read() == 10) {
        basic.showString("B3")
    }
    if (IR.IR_read() == 47) {
        basic.showString("C3")
    }
    if (IR.IR_read() == 12) {
        basic.showString("A4")
    }
    if (IR.IR_read() == 14) {
        basic.showString("B4")
    }
    if (IR.IR_read() == 15) {
        basic.showString("C4")
    }
    if (IR.IR_read() == 16) {
        basic.showString("A5")
    }
    if (IR.IR_read() == 17) {
        basic.showString("B5")
    }
    if (IR.IR_read() == 55) {
        basic.showString("C5")
    }
    if (IR.IR_read() == 20) {
        basic.showString("A6")
    }
    if (IR.IR_read() == 21) {
        basic.showString("B6")
    }
    if (IR.IR_read() == 22) {
        basic.showString("C6")
    }
})
Maqueen_V5.I2CInit()
IR.IR_init()
