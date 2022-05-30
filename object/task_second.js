let schedule = {};


alert( isEmpty(schedule) )

schedule["8:30"] = "get up"


alert ( isEmpty(schedule) )



function isEmpty(object) {

    for(key in object){
        return false
    }
    
    return true
}