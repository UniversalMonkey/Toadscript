function readNumber(){
    let number = prompt("Число",'') 

    while (!isFinite(number) || !number){
        if(!number) return null
        number = prompt("Число",'') 
    }

    return +number
}

alert(`Число: ${readNumber()}`)