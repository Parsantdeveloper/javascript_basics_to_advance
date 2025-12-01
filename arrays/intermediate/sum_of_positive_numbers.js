// sum of postive numbers 

// Given:
let arr = [2, -5, 10, -3, 7];
// Output ➜ 19 (sum of 2 + 10 + 7)

arr=arr.reduce((accum,current)=>{
  if(current>0){
    accum+=current;
  }
  return accum
},0)
console.log(arr)