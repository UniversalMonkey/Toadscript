/* setInterval
function printNumbers(from, to){
    let timeIDinterval = setInterval(()=>{
        if(from === to){
            clearInterval(timeIDinterval)
        }
            alert(from)
            
            from++
    },1000)
}*/

/* setTimeout
function printNumbers(from, to){
    let timeIDinterval = setTimeout( function romal(){
        if(from !== to){
            setTimeout(romal,1000)
        }
        alert(from)
            
        from++
    },1000)
}
*/
printNumbers(1,10)