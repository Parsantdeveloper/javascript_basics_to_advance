//Count how many times each word appears in a sentence (case-insensitive).
// Input: "I love JavaScript because I love coding"
// Output: { i: 2, love: 2, javascript: 1, because: 1, coding: 1 }

let input="I love JavaScript because I love coding".split(" ").reduce((accum,current)=>{
   if(!accum[current]){
    accum[current]=0;
   }
   accum[current]+=1;
   return accum;
},{})
console.log(input);
