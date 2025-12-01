//Group elements by type (numbers, strings, booleans, etc.).
// Input: [1, '2', true, 3, 'x', false]
// Output: { number: [1,3], string: ['2','x'], boolean: [true,false] }

let arr = [1, '2', true, 3, 'x', false];

 arr = arr.reduce((accum , current)=>{
     if(! accum[typeof(current)]){
        accum[typeof(current)]=[];
     }
     accum[typeof(current)].push(current);
     return accum;
 },{})
 console.log(arr)