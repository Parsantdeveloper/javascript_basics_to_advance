// count how many numbers are even in an array!

const arr = [1, 2, 3, 4, 5, 6];
// ➜ 3

//  const sum=arr.reduce((acumm,current)=>{
//   return current%2===0?acumm+1:acumm;
//  },0)
 console.log(arr.reduce((accum,current)=>current%2===0?accum+1:accum,0))

// const even= arr.filter((data)=>data%2===0);
// console.log(even.length)