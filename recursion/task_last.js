/* Рекурсия
function printList(list) {
    
    if (list.next){
        printList(list.next)
    }
    alert(list.value)
}
*/

/* Цикл
function printList(list) {
    const temp_array = []
    while (list) {
        temp_array.push(list.value)
        list = list.next
    }
    temp_array.reverse().map(value => alert(value))
}
*/

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};

printList(list)