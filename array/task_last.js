function getMaxSubSum(array) {
    let current_elem = 0
    let max_elem = 0

    for (const iterator of array) {
        current_elem += iterator
        max_elem = Math.max(current_elem, max_elem)
        if(current_elem < 0 ) current_elem = 0
    }

    return max_elem
}


getMaxSubSum([-1, 2, 3, -9]) == 5
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6