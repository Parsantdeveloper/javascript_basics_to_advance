//Flatten deeply nested arrays without using flat() — use recursion or reduce.
// Input: [1, [2, [3, [4]]]]
// Output: [1, 2, 3, 4]

// function flatten(arr) {
//   let result = arr;
//   // Keep reducing until no nested arrays left
//   while (result.some(Array.isArray)) {
//     result = result.reduce((acc, val) => acc.concat(val), []);
//   }
//   return result;
// }

// console.log(flatten([1, [2, [3, [4]]]]));
// [1, 2, 3, 4]
 const acc=[1];
 const current=[2, [3, [4]]]
 console.log(acc.concat(current))

 
// [1, [2, [3, [4]]]]
// [1,2,[3, [4]]]
// [1,2,3,[4]]
// [1,2,3,4]