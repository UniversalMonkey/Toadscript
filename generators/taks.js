function* pseudoRandom(params) {
    let value = params
    for(;;){
        value = (value * 16807) % 2147483647
        yield value  
    }
}





let generator = pseudoRandom(1);

alert(generator.next().value); // 16807
alert(generator.next().value); // 282475249
alert(generator.next().value); // 1622650073