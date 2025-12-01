// Q: Sort the array in ascending order of element frequency
let arr = [1, 3, 2, 3, 4, 2, 2];
// Expected Output: [1, 4, 3, 3, 2, 2, 2]

// [ 1,2,2,2,3,3,4]
//[1,]

let freq=arr.reduce((accum , current)=>{
    if(!accum[current]){
        accum[current]=0;
    }
    accum[current]+=1;
    return accum
},{})
console.log(freq);
arr.sort((a,b)=>{
    return freq[a]-freq[b];
})
console.log(arr)
