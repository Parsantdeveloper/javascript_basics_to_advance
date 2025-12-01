//Add 10 to all numbers greater than 5
let arr = [1, 6, 3, 8, 10];
// ➜ [1, 16, 3, 18, 20]

arr=arr.map((data)=>{
   return data>5?data+10:data
})
console.log(arr)