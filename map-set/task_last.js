let map = new Map();

map.set("name", "John");

let keys1 = Array.from(map.keys());

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys1.push("more")

alert(keys1);