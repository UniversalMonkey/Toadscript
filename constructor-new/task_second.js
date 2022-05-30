function Calculator(){
    this.read = function(){
        this.first_number = +prompt("Первое значение",0);
        this.second_number = +prompt("Второе значение",0);
    }
    this.sum = function(){
        return this.first_number + this.second_number
    }
    this.mul = function(){
        return this.first_number * this.second_number
    }
}



let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );