/* 1. С использованием цикла.
function sumTo(n) {
    let sum_result = 0
    for (let index = 1; index <= n; index++) {
        sum_result+=index
    }
    return sum_result
}
*/

/* 2. Через рекурсию sumTo(100000) - работать не будет.
function sumTo(n) {
    return n == 1 ? n : n + sumTo(n - 1)
} 
*/

/* 3. С использованием формулы арифметической прогрессии. - быстрее всех
function sumTo(n) {
    return n * (n + 1) / 2
}
*/


alert( sumTo(100) )