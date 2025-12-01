// Find the sum of all numbers 

const nums = [1, 2, 3, 4, 5];
// ➜ 15      a           d
        //     a=a+d =3
        //     a=a+d =6
        //     a=a+d =10
        //  return a+d;


console.log(nums.reduce((accum,data)=>accum+data))

function sum(){
    nums.reduce((accum,data)=>{
        console.log(`accum:${accum} and data:${data}`);
        return accum+data;
    })
}
 sum();