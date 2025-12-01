// get users older then 18
let  people = [{name: 'Sam', age: 17}, {name: 'Tom', age: 22}];
// ➜ [{name:'Tom', age:22}]

people =people.filter(data=>data.age>18);
console.log(people)