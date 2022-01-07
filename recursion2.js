// Recursive Fibonacci
function rFib(num) {
    if (Math.trunc(num) <= 0) {
        return 0
    }
    if (Math.trunc(num) == 1) {
        return 1
    }
    return rFib(Math.trunc(num) - 1) + rFib(Math.trunc(num) - 2)
}
console.log(rFib(3))

// Recursive "Tribonacci"
function rTrib(num) {
    if (Math.trunc(num) <= 1) {
        return 0
    }
    if (Math.trunc(num) == 2) {
        return 1
    }
    return rTrib(Math.trunc(num) - 1) + rTrib(Math.trunc(num) - 2) + rTrib(Math.trunc(num) - 3)
}
console.log(rTrib(6))

// Paging Dr. Ackermann
function ackermann(num1, num2) {
    if (Math.trunc(num1) == 0) {
        return num2 + 1
    }
    if (Math.trunc(num2) == 0 && Math.trunc(num1) > 0) {
        return ackermann(num1 - 1, 1)
    }
    return ackermann(num1 - 1, ackermann(num1, num2 - 1))
}
console.log(ackermann(4, 0))

// Zibonacci
function Zib(num) {
    if (Math.trunc(num) < 2) {
        return 1
    }
    if (Math.trunc(num) == 2) {
        return 2
    }
    if (Math.trunc(num) % 2 == 0) {
        return Zib(Math.trunc(num) / 2) + Zib(Math.trunc(num) / 2 + 1) + 1
    }
    else {
        return Zib(Math.trunc(num) / 2) + Zib(Math.trunc(num) / 2 - 1) + 1
    }
}
console.log(Zib(2463))
console.log(Zib(2464))
console.log(Zib(2465))
console.log(Zib(2466))
console.log(Zib(2467))
console.log(Zib(2468))
console.log(Zib(2469))
console.log(Zib(2470))
console.log(Zib(2471))
console.log(Zib(2472))
console.log(Zib(2473))
console.log(Zib(2474))
console.log(Zib(2475))

function bestZibNum(num) {
    if (num == 1) {
        return 1
    }
    if (num == 2) {
        return 2
    }
    max_zib_index = 3
    while (Zib(max_zib_index) != num) {
        max_zib_index++
        if (Zib(max_zib_index) == num) {
            for (i = 0; i < 3; i++) {
                max_zib_index++
                if (Zib(max_zib_index) == num) {
                    return max_zib_index
                }
            }
        }
        if (Zib(max_zib_index) > num + 8) {
            return null
        }
    }
    return max_zib_index
}
console.log(bestZibNum(3186))
console.log(bestZibNum(1))
console.log(bestZibNum(3183))
console.log(bestZibNum(3192))