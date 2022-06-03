function filterRangeInPlace(arr, a, b) {
    for (let index = 0; index < arr.length; index++) {
        if ( a < arr[index] || arr[index] > b){
            arr.splice(index,1)
        } 
    }
}



let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // [3, 1]