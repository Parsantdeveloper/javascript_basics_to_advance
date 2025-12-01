
// find total age of all users 

const users = [{name:'A',age:20}, {name:'B',age:30}, {name:'C',age:25}];
// ➜ 75
console.log(
    users.reduce((accum , current)=>{
        return accum+current.age
    },0)
)

