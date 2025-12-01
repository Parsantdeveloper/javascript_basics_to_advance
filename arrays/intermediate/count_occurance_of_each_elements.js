// count occurance of each elements in an array 

let fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// Output ➜ { apple: 3, banana: 2, orange: 1 }

fruits=fruits.reduce((accum,current)=>{
   if(!accum[current]){
    accum[current]=0;
   }
   accum[current]+=1;
   return accum ; 
},{})
console.log(fruits)