function pow(x,n) // pow(x, n) {
{
  let result=1; // let result = 1 
  // Enter
  for(let i=0;i<n;i++) {result*=x;}  // for (let i = 0; i < n; i++) { result *= x; }
  // Enter
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'') // let x = prompt("x?", ''), n = prompt("n?", '');
if (n<=0)  //  if (n <= 0) {
{
  alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`); 
} //else {
else
{
  alert(pow(x,n)) // ( pow(x, n) )
}