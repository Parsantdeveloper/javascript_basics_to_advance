// replace the arr element if 0 is there replace with a 1 and reverse that elment like this [
//   1, 1, 1, 1,
//   0, 0, 0, 0
// ]
let arr = [0,1,1,0,0,1,0,1,0,1];
// output [0,0,0,0,0,1,1,1,1,1];
// arr=arr.reduce((accum,current)=>{
//     current==0?accum.push(1):accum.push(0);
//     return accum.sort();
// },[])
let arr2=[]
  arr.forEach((data,index)=>{
    if(data==0){
        arr2[index]=1;
    }else{
        arr2[index]=0;
    }
  })
//   for(let i = 0 ; i<=arr2.length; i ++){
//     for(let j =0; j<=arr2.length ; j++){
//       let temp =arr2[i];
//       if(arr2[i]>arr2[j]){
//         arr2[i]=arr2[j];
//         arr2[j]=temp;
//       }
//     }
//   }
// [
//   1, 0, 0, 1, 1,
//   0, 1, 0, 1, 0
// ]
let i = 0 ; j =1;
while(j<arr2.length){
    if(arr2[i]>arr2[j]){
     [arr2[i], arr2[j]] = [arr2[j], arr2[i]];
       console.log(arr2)
       i++;
       j++
    }else{
        j++
    }
}

console.log(arr2)