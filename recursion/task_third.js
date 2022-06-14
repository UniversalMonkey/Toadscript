function fib(n) {
    if (n == 1 || n < 0){
        return n
    } 
    else if (n == 2){
        return n + 1
    } 
    else if (n >= 3) {
        let prev_number = 1
        let current_number = 1
        let current_sum = 0

        for (let number = 2; number < n; number++) {
            current_sum = prev_number + current_number;
            [prev_number,current_number] = [current_number, current_sum];
        }
        return current_sum
    }
}

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757