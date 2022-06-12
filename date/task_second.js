function getWeekDay(date) {
    const WeekDayName = ['ВС', 'ПН', 'ВТ', 'СР',
                'ЧТ', 'ПТ', 'СБ']
          
    return WeekDayName[date.getDay()]
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года

alert( getWeekDay(date) );        // нужно вывести "ВТ"