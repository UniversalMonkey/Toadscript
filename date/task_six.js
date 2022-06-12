function getSecondsToday() {
    const currentDate = new Date()
    return (
        currentDate.getHours() * 3600 + 
        currentDate.getMinutes() * 60 +
        currentDate.getSeconds()
    )
}

alert(getSecondsToday())