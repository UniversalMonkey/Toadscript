function getSecondsToTomorrow() {
    const currentDate = new Date()
    return (
       86400 -  (currentDate.getHours() * 3600 + 
        currentDate.getMinutes() * 60 +
        currentDate.getSeconds())
    )
}

alert(getSecondsToTomorrow())