//Chunk an Array into Smaller Arrays

let arr = [1, 2, 3, 4, 5, 6, 7];
const size = 3;

// [] == accum  done 
//[[1,2,3]] use filter function 
//[[1,2,3],[4,5,6]]
//[[1,2,3],[4,5,6],[7]]

// Output ➜ [[1, 2, 3], [4, 5, 6], [7]]

arr=arr.reduce((accum, current,index)=>{
  if(index%size===0){
    accum.push(arr.slice(index , index+size ))
  }
  return accum
},[])
console.log(arr)
