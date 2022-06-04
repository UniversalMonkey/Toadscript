function aclean(arr) {
    let object_anagram = {}

    for (let index = 0; index < arr.length; index++) {
        let sort_letters = arr[index].toLowerCase().split("").sort().join("")
        object_anagram[sort_letters] = arr[index]
    }

    return Object.values(object_anagram)
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) )