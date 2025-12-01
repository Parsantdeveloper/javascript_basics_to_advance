//find the most frequent element in an array of strings 

let arr = ['dog', 'cat', 'dog', 'bird', 'dog', 'cat'];
// Output ➜ 'dog'

arr=arr.reduce((accum,current,currentIndex,currentarr)=>{
    if(!accum[current]){
     accum[current]=0;
    }
    accum[current]+=1;

    return accum;
},{})
 
let mostFrequent = Object.entries(arr)
.reduce((accum,current)=>accum>current?accum:current)
console.log(mostFrequent[0])