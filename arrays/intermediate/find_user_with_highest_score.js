// find the user with highest score 
let users = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Eve', score: 78 }
];
// Output ➜ { name: 'Bob', score: 92 }

users=users.reduce((accum , current)=>{
  return accum.score>current.score?accum:current;
})
console.log(users)