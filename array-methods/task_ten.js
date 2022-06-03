function shuffle(arr) {
    for (let index = arr.length -1 ; index > 0; index--) {
        const random_variable = Math.floor(Math.random() * (index+1));
        [arr[index],arr[random_variable]] = 
        [arr[random_variable],arr[index]];
    }
    return arr
}


let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...