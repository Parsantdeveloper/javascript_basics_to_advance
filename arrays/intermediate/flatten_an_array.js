// Flatten an Array One Level

let arr = [1, [2, 3], [4, 5]];

// Output ➜ [1, 2, 3, 4, 5]

arr=arr.reduce((accum , current )=>{
    if(typeof(current)!="object"){
        accum.push(current);
    }else{
     current.map(data=>accum.push(data));
    }
    return accum;
},[])
console.log(arr);