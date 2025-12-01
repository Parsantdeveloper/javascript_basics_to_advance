// find common elements between two arrays 
const a = [1, 2, 3, 4];
const b = [3, 4, 5, 6];
// Output ➜ [3, 4]
let c = [...a,...b];
 c=c.reduce((accum,current)=>{
     if(!accum.includes(current)){
       const repeat= c.filter((data)=>data==current);
       if(repeat.length>1){
        accum.push(repeat[0]);
       }
     }
     return accum;
 },[])
 console.log(c)
