// filter and transform together 

// Given:
let nums = [1, 2, 3, 4, 5, 6];
// Output ➜ Double only the even numbers [4, 8, 12]

nums=nums.flatMap((data)=>data%2==0?[data*2]:[]);
console.log(nums)
// nums=nums.reduce((accum , current)=>{
//     if(current%2==0){
//         accum.push(current*2)
//     }
//     return accum
// },[])
// console.log(nums)