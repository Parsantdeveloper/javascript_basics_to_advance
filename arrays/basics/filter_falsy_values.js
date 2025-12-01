// filter falsy values 

let arr = [0, 1, false, 2, '', 3, null];
// ➜ [1, 2, 3]

arr=arr.filter(data=>typeof data ==='number');
console.log(arr)
