let arr = [1, 2, 2, 3, 4, 4, 5];
// Output ➜ [1, 2, 3, 4, 5]

 arr=arr.reduce((accum,current)=>{
    if(!accum.includes(current)){
     accum.push(current);
    }
    
    return accum;
},[])
console.log(arr);