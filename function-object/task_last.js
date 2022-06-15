function sum(a) {
    let c_sum = a

    function xz(b) {
        c_sum += b
        return xz
    }

    xz.toString = function () {
        return c_sum
    }

    return xz
}


sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15