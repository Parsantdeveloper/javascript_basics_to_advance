// //Sort words by the number of vowels in each.

// Input: ['banana', 'apple', 'pear']
// Output: ['pear', 'apple', 'banana']

// {
//     banana:3,
//     apple:2,
//     pear:2
// }
// let arr =['banana', 'apple', 'pear'];
// function getVowelCount(word){
//   let fruit= word.split("");
//    let arr=fruit.reduce((accum , current)=>{
//      if(["a", "e", "i", "o", "u"].includes(current)){
//      accum.push(current);
//     }
//     return accum;
//   },[]); 
//   return arr.length;
// }
// let frequency=arr.reduce((acc,current)=>{
//   if(!acc[current]){
//     acc[current]=0;
//   }
//   acc[current]=getVowelCount(current);
//   return acc;
// },{})

// arr=arr.sort((a,b)=>(frequency[a]==frequency[b])?a.length-b.length:frequency[a]-frequency[b])
// console.log(arr)

let arr = ['banana', 'apple', 'pear'];

function getVowelCount(word) {
    return word.split('').filter(char => 
        ['a', 'e', 'i', 'o', 'u'].includes(char)
    ).length;
}
console.log(getVowelCount("banana"))
// arr.sort((a, b) => getVowelCount(a) - getVowelCount(b));

console.log(arr); // ['pear', 'apple', 'banana']