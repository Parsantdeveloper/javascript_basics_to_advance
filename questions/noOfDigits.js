let digit=38252;

function count(n){
  let no=0;
  while(n>0){
    no++;
    n=Math.floor(n/10)
  }
  return no;
}
console.log(count(digit))