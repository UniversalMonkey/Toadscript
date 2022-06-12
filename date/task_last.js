function formatDate(date) {
    const diffCurrentDateMS = new Date() - date
    const diffCurrentDateSeconds = Math.round(diffCurrentDateMS / 1000) 
    const diffCurrentDateMinutes = diffCurrentDateSeconds / 60
    const diffCurrentDateHours =  diffCurrentDateMinutes / 60

    let ParamDateMinutes = date.getMinutes()
    let ParamDateHours = date.getHours()
    let ParamDateDay = date.getDate()
    let ParamDateMonth = date.getMonth()
    const ParamDateYear = String(date.getFullYear()).slice(-2)


    ParamDateMinutes = ParamDateMinutes < 10 ? '0'+ ParamDateMinutes : ParamDateMinutes
    ParamDateHours = ParamDateHours < 10 ? '0'+ ParamDateHours : ParamDateHours
    ParamDateDay = ParamDateDay < 10 ? '0'+ ParamDateDay : ParamDateDay
    ParamDateMonth = ParamDateMonth < 10 ? '0'+ ParamDateMonth : ParamDateMonth
    
    if(diffCurrentDateSeconds < 1){
        return "прямо сейчас"
    }
    else if(diffCurrentDateMinutes < 1 ){
        return `${diffCurrentDateSeconds} сек. назад`
    }
    else if(diffCurrentDateHours < 1 ){
        return `${diffCurrentDateMinutes} мин. назад`
    }
    else{
        return `${ParamDateDay}.${ParamDateMonth}.${ParamDateYear} ${ParamDateHours}:${ParamDateMinutes}`
    }
}

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );