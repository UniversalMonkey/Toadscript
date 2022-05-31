function checkSpam(str){
    if(str.toLowerCase().includes("viagra") ||
        str.toLowerCase().includes("xxx")){
            return true
        }
    return false
}

console.log(checkSpam('buy ViAgRA now') == true)
console.log(checkSpam('free xxxxx') == true)
console.log(checkSpam("innocent rabbit") == false)