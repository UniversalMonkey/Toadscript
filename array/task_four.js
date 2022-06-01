function sumInput() {
    let array_number_input = []
    let result_sum_array = 0

    while(true){
       let number = prompt("В ожидании числа / цифры", 0)

        if(!number || !isFinite(number)) break;

        array_number_input.push(+number)
    }

    for (const iter of array_number_input){
        result_sum_array += iter
    }

    return result_sum_array
}

alert( sumInput() );