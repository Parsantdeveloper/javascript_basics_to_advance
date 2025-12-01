let arr = [1, [2, [3, [4]]]];
// Output ➜ [1, 2, 3, 4]

arr=arr.flat(Infinity);
console.log(arr);