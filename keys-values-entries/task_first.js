function sumSalaries(salaries) {
    let result_sum = 0

    for(let curl of Object.values(salaries)){
        result_sum +=curl
    }
    
    return result_sum
}



let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
  };
  
alert( sumSalaries(salaries) );