function inBetween(a, b) {
    return function(params)  {
       return  params >= a && params <= b
    }
}

function inArray(arr) {
     return function (params) {
        return arr.includes(params)
     }
}


let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2