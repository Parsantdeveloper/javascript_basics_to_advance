// check if all elements are unique 

const arr = [1, 2, 3, 4, 5];
// Output ➜ true

const arr2 = [1, 2, 2, 3];
// Output ➜ false

console.log(
    arr.reduce((accum,current,currentIndex)=>{
         return current===(currentIndex+1)?accum:accum=false ;
    },true)
)