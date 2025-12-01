// convert array of obj into single obj

let users = [
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
  { id: 3, name: 'C' }
];
// Output ➜ { 1: 'A', 2: 'B', 3: 'C' }
users=users.reduce((accum,current)=>{
    if(!accum[current.id]){
      accum[current.id]=current.name;
    }
    return accum;
},{})

console.log(users)