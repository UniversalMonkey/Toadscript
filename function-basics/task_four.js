function pow(first_number, second_number) {
    if (second_number < 1) {
        return false
    }
    let result_pow = first_number
    for(let count_milti = 1; count_milti < second_number; count_milti++)
    {
        result_pow *= first_number
    }
    return result_pow
}


console.log(pow(3, 2) == 9) //True
console.log(pow(3, 3) == 27) // True
console.log(pow(1, 100) == 1) // True
console.log(pow(1, 0) == false) // True