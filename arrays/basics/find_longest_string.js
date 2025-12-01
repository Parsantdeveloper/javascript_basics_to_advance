const arr = ['apple', 'banana', 'cherry', 'kiwi'];
// ➜ 'banana'
//  accum=5;
//  accum=6;
//  accum=5;
//  accum=5;
console.log(
  
    arr.reduce((accum,current)=>{
        return accum.length>=current.length?accum:current
    })

)