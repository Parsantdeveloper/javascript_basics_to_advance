// const words = ['apple', 'banana', 'avocado', 'cherry', 'blueberry'];
// // Output ➜ { a: ['apple', 'avocado'], b: ['banana', 'blueberry'], c: ['cherry'] }

// let obj = words.reduce((accum,current)=>{
//     const firstletter=current.charAt(0);
//     if(!accum[firstletter]){
//      accum[firstletter]=[];
//     }
//     accum[firstletter].push(current);
//     return accum;
// },{});
// console.log(obj);



let words = ['apple', 'banana', 'avocado', 'cherry', 'blueberry'];
// Output ➜ { a: ['apple', 'avocado'], b: ['banana', 'blueberry'], c: ['cherry'] }

words=words.reduce((accum,current)=>{
    if(!accum[current.charAt(0)]){
      accum[current.charAt(0)]=[];
    }
    accum[current.charAt(0)].push(current);
    return accum;
},{})

console.log(words);






