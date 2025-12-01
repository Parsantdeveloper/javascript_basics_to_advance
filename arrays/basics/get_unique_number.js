// Get only unique number 

let  arr = [1, 2, 3, 2, 4, 4, 5];
// ➜ [1, 2, 3, 4, 5]

uniques=[...  new Set(arr)]
console.log(uniques);

// arr = arr.filter((data, index) =>{
//      console.log(arr.indexOf(data) === index , data , arr.indexOf(data),index)
//      return arr.indexOf(data) === index
// }
// );

// console.log(arr); // ➜ [1, 2, 3, 4, 5]
