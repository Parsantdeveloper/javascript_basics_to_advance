// find the average age of users 

let users = [{name:'A', age:20}, {name:'B', age:30}, {name:'C', age:25},{name:'C', age:35}];
// Output ➜ 25

users = users.reduce((accum,current)=>{
   return accum+current.age/users.length;
},0)
console.log(users)