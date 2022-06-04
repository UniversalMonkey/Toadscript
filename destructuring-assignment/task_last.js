function topSalary(salaries) {
    let name_person = null
    let money_person = 0

    for (const [key, value] of Object.entries(salaries)) {
        if (money_person < value){
            [name_person, money_person] = [key,value]
        }
    }
    
    return name_person
}


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert(topSalary(salaries))