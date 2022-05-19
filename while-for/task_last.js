let natural_number = prompt("Натуральное число",2)
if(natural_number >2){
next_natural:
for(let check_first_number = 2; check_first_number <= natural_number; check_first_number ++){
        for(let check_second_number = 2; check_second_number < check_first_number; check_second_number++ ){
            if(check_first_number % check_second_number == 0){
                continue next_natural;
            }
        }
        console.log(check_first_number)
    }
}
else if(natural_number == 2)
{
    console.log(2)
}
