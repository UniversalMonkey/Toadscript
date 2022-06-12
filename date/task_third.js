function getLocalDay(date) {
    const currentDay = date.getDay()
    
    return currentDay == 0 ? 7 : currentDay
}



let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getLocalDay(date) );       // вторник, нужно показать 2