user_login = prompt("В ожидании логина", '')

if(user_login == "Админ"){
    user_password = prompt("В ожидании пароля", '')
    if (user_password == "Я главный"){
        alert("Здравствуйте")
    }
    else if(!user_password){
        alert("Отменено")
    }
    else{
        alert("Неверный пароль")
    }
}
else if(!user_login){
    alert("Отменено")
}
else {
    alert("Я вас не знаю")
}