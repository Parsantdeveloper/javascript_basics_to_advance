let digit=181;

function sumOf(n){
    let sum=0;
    console.log(n)
    while(n/10>0){
       sum+= n%10
       n=Math.floor(n/10)
    }
    return sum;
}
console.log(sumOf(digit))