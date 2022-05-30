let calculator = {
    read(){
        this.first_number = +prompt("Первое значение",0);
        this.second_number = +prompt("Второе значение",0);
    },

    sum(){
        return this.first_number + this.second_number
    },

    mul(){
        return this.first_number * this.second_number
    }
};

calculator.read()
alert( calculator.sum() )
alert( calculator.mul() )