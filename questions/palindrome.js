let num=1001;

function findPalindrome(n){
    let first =n ;
    let second=0
    let isPalindrome=false;
    // n===+String(n).split("").reverse().join("")?isPalindrome=true:isPalindrome=false
    while(n>0){
      let reverse=n%10
      second=second*10+reverse
       n=Math.floor(n/10) 
    }
    first===second?isPalindrome=true:isPalindrome=false
    return isPalindrome;
}

console.log(findPalindrome(num))